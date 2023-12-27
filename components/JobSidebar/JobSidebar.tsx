import { Button, Flex, Image, Text, Grid, Card, CardBody, CardHeader, Divider, Badge, Box, Icon } from '@chakra-ui/react';
import { SendCVMail } from '../SendCV/SendCVMail';
import { SendCVLink } from '../SendCV/SendCVLink';
import { SendCVWhatsApp } from '../SendCV/SendCVWhatsApp';
import { ArrowUpRight, Briefcase } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobSidebar({ cargo, empresa }) {
    const [vagasCargos, setVagasCargos] = useState([]);
    const [vagasEmpresas, setVagasEmpresas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    async function loadJobs() {
        const request_cargos = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?limit=3&cargos[_eq]=${cargo}fields=slug,cargo.Cargo,companies.Empresa,Contract,cidade.Cidades_id.cidade,companies.Logo.filename_disk,date_updated,quantidade,pcd&sort=-date_updated`)
        const request_empresas = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?limit=3&empresa[_eq]=${empresa}&fields=slug,cargo.Cargo,companies.Empresa,Contract,cidade.Cidades_id.cidade,companies.Logo.filename_disk,date_updated,quantidade,pcd&sort=-date_updated`)
        //@ts-ignore
        setVagasCargos(request_cargos?.data?.data)
        //@ts-ignore
        setVagasEmpresas(request_empresas?.data?.data)

    }

    useEffect(() => {
        if (!isLoaded) {
            loadJobs()
        }
    }, [isLoaded])
    return (
        <>
            <Flex w="full" justifyContent="center" direction="column" >
                <Flex direction={['row', 'row', 'column']} gap={4} alignItems={'center'} maxW="7xl" mx="auto" w="full" flexWrap={['wrap', 'wrap', 'nowrap']} justifyContent="center">
                    <Image minH="full" src="https://s0.2mdn.net/simgad/7285059862373984776" ></Image>
                    {vagasCargos &&
                        <Card variant='outline' boxShadow="sm" rounded={6} overflow="hidden" bg="gray.50" >
                            <CardHeader>
                                <Flex justifyContent="center" alignItems="center" gap={2}>
                                    <Icon as={Briefcase}></Icon>
                                    <Text fontWeight={'bold'} fontSize="md" color="gray.600" textAlign="center">Mais vagas desse mesmo cargo</Text>
                                </Flex>
                            </CardHeader>
                            <Divider w="full"></Divider>
                            <CardBody display='flex' flexDirection='column' gap={4}>
                                {vagasCargos?.map((vaga) => (
                                    <Card height="full" variant="outline" boxShadow="sm" w="full" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} pl="0" pt="0" pb="0" overflow="hidden" transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                                        <Flex w="full">
                                            <Image justifyContent={"center"} minH="full" src="https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2022/01/Timenow.png" boxSize={20} borderTopLeftRadius={8} borderBottomLeftRadius={8} objectFit="cover" />
                                            <Flex direction="column" px={4} py={2} justifyContent="space-between" w="full">
                                                <Text minH={11} fontWeight={'semibold'} fontSize='xs' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>Analista de Recursos Humanos - Recrutamento e Seleção
                                                </Text>
                                                <Flex direction="column" w="full">
                                                    <Text fontSize="12px" color="gray.600">{vaga.companies.Empresa}</Text>
                                                    <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center" w="full">
                                                        <Text fontSize="xs" color="gray.500" textAlign="left">Vitória</Text>
                                                        <Box>
                                                            <Badge colorScheme="blue" size="xs" textAlign="right">Efetivo</Badge>
                                                        </Box>
                                                    </Grid>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                ))}
                                <Button rightIcon={<ArrowUpRight />} colorScheme="blue" w='full' variant="outline" my={8}>Ver mais vagas deste cargo</Button>
                            </CardBody>
                        </Card>}
                    {vagasEmpresas &&
                        <Card variant='outline' boxShadow="sm" rounded={6} overflow="hidden" bg="gray.50" >
                            <CardHeader>
                                <Text fontWeight={'bold'} fontSize="md" color="gray.600" textAlign="center">Outras vagas em Grupo Coutinho (Extrabom Supermercados)</Text>
                            </CardHeader>
                            <Divider w="full"></Divider>
                            <CardBody display='flex' flexDirection='column' gap={4}>
                                {vagasEmpresas?.map((vaga) => (
                                    <Card height="full" variant="outline" boxShadow="sm" w="full" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} pl="0" pt="0" pb="0" overflow="hidden" transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                                        <Flex w="full">
                                            <Image justifyContent={"center"} minH="full" src="https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2022/06/Lince-Humanizacao.png" boxSize={20} borderTopLeftRadius={8} borderBottomLeftRadius={8} objectFit="cover" />
                                            <Flex direction="column" px={4} py={2} justifyContent="space-between" w="full">
                                                <Text minH={11} fontWeight={'semibold'} fontSize='xs' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>Assistente de Departamento Pessoal - Folha de Pagamento
                                                </Text>
                                                <Flex direction="column" w="full">
                                                    <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center" w="full">
                                                        <Text fontSize="xs" color="gray.500" textAlign="left">Serra</Text>
                                                        <Badge colorScheme="blue" size="xs" textAlign="right">Efetivo</Badge>
                                                    </Grid>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                ))}
                                <Button bg="white" rightIcon={<ArrowUpRight />} colorScheme="blue" w='full' variant="outline" my={8}>Ver mais vagas dessa empresa</Button>
                            </CardBody>
                        </Card>
                    }
                </Flex>
            </Flex>
        </>
    )
}
