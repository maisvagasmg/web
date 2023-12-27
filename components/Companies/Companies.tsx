import { Card, Flex, Hide, HStack, Icon, Image, Show, Spacer, Text, SimpleGrid } from '@chakra-ui/react';
import { Briefcase } from "@phosphor-icons/react";
import { useEffect, useState } from 'react';
import axios from 'axios' 
export default function Companies() {
    const [empresas, setEmpresas] = useState([]);

    const groupedEmpresas = empresas.reduce((acc, empresa) => {
        const initial = empresa.Empresa.charAt(0).toUpperCase();

        if (!acc[initial]) {
            acc[initial] = [];
        }

        acc[initial].push(empresa);

        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedEmpresas).sort();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Empresas/?limit=9999999&fields=Empresa,slug,Logo.filename_disk,Logo.url,Vagas`).then((res) => {
            setEmpresas(res.data.data)
        })
    }, [])

    const renderEmpresasWithVagas = (empresas) => {
        return empresas
            .filter((empresa) => empresa.Vagas.length > 0)
            .map((empresa, index) => (
                <Card key={index} variant="outline" boxShadow="sm" rounded={8} w="full" overflow="hidden">
                    <Flex maxH={20} w="full" >
                        <Image justifyContent={"center"} minH="full" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${empresa?.Logo?.filename_disk}`} objectFit={"cover"} boxSize={20} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
                        <Flex w="full" px={4} py={4} justifyContent="space-between">
                            <HStack alignItems="center" w="full">
                                <Text fontSize="md" fontWeight="semibold">{empresa.Empresa}</Text>
                                <Spacer />
                                <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                <Text fontWeight="semibold" fontSize="md" color="gray.600">{empresa.Vagas.length}</Text>
                            </HStack>
                        </Flex>
                    </Flex>
                </Card>
            ));
    };

    return (
        <>
            <Flex w="full" direction="column"  >
                <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                    <Flex direction={'column'} py={4} px={4} justifyContent="center" >
                        <Flex justifyContent={'center'} gap={4} direction={'column'}>
                            <Text fontWeight={'bold'} fontSize='xl' textAlign={'center'} color="blue.700">Empresas
                            </Text>
                            <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'} color="gray.500">Deseja trabalhar em alguma empresa específica? Escolha uma das empresas abaixo para visualizar todas as vagas em aberto nela.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="column" w="full" px={6} mx="auto" maxW="7xl">
                <div>
                    {sortedKeys.map((initial) => {
                        const empresasComVagas = groupedEmpresas[initial].filter((empresa) => empresa.Vagas.length > 0);

                        // Renderiza a seção apenas se houver empresas com vagas
                        if (empresasComVagas.length > 0) {
                            return (
                                <div key={initial}>
                                    <Text py={4} fontWeight="bold" fontSize="lg" color="gray.700">
                                        {initial}
                                    </Text>
                                    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
                                        {renderEmpresasWithVagas(empresasComVagas)}
                                    </SimpleGrid>
                                </div>
                            );
                        }

                        // Se não houver empresas com vagas, retorna null para não renderizar a seção
                        return null;
                    })}
                </div>
            </Flex>
        </>
    )
}
