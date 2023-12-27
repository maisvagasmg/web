import { Card, Flex, Hide, HStack, Icon, Show, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { Briefcase } from "@phosphor-icons/react";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Positions() {
    const [cargos, setCargos] = useState([]);

    const groupedCargos = cargos.reduce((acc, position) => {
        const initial = position.Cargo.charAt(0).toUpperCase();

        if (!acc[initial]) {
            acc[initial] = [];
        }

        acc[initial].push(position);

        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedCargos).sort();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Cargos/?limit=9999999&fields=Cargo,slug,Vagas`).then((res) => {
            setCargos(res.data.data)
        })
    }, [])

    const renderCargoWithVagas = (cargos) => { 
        return cargos
            .filter((c) => c.Vagas.length > 0)
            .map((cargo, index) => (
                <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden" >
                    <Flex  >
                        <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                            <HStack alignItems="center" w="full">
                                <Text fontSize="md" fontWeight="semibold">{cargo.Cargo}</Text>
                                <Spacer />
                                <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                <Text fontWeight="semibold" fontSize="md" color="gray.600">{cargo.Vagas.length}</Text>
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
                            <Text fontWeight={'bold'} fontSize='xl' textAlign={'center'} color="blue.700">Cargos
                            </Text>
                            <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'} color="gray.500">Descubra oportunidades profissionais! Escolha um cargo abaixo para visualizar as empresas com vagas abertas para essa posição.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="column" w="full" px={6} maxW="7xl" mx="auto">

                <div>
                    {sortedKeys.map((initial) => {
                        const cargoComVagas = groupedCargos[initial].filter((cargo) => cargo.Vagas.length > 0);

                        // Renderiza a seção apenas se houver empresas com vagas
                        if (cargoComVagas.length > 0) {
                            return (
                                <div key={initial}>
                                    <Text py={4} fontWeight="bold" fontSize="lg" color="gray.700">
                                        {initial}
                                    </Text>
                                    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
                                        {renderCargoWithVagas(cargoComVagas)}
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
