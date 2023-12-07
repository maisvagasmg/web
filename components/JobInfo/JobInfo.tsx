import { Badge, Box, Card, CardBody, Flex, Icon, Text } from '@chakra-ui/react';
import { Briefcase, CalendarBlank, Coins, Gift, Wheelchair } from "@phosphor-icons/react";

const contractColorSchemes = {
    efetivo: 'green',
    estagio: 'blue',
    aprendiz: 'purple',
    pj: 'orange',
    temporario: 'red',
};

export default function JobInfo({ data }) {
    return (
        <>
            <Flex w="full" justifyContent="center" >
                <Flex w='full' justifyContent="center" direction={{ base: 'column', md: 'row' }} >
                    <Card height="full" variant="outline" boxShadow="sm" w="full" >
                        <CardBody display="flex" flexDirection="column" gap={2} >
                            <Flex direction={{ base: 'column', md: 'row' }} justifyContent="justify" gap={{ base: 2, md: 4 }}  >
                                <Flex direction={"column"} gap={2} justifyContent="space-between" w="full">
                                    <Flex justifyContent="space-between" >
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={6} color='green.500' as={Briefcase} />
                                            <Text fontWeight={'semibold'}> Tipo </Text>
                                        </Flex>
                                        <Box>
                                            <Badge variant="subtle" colorScheme={contractColorSchemes[data?.Contract]}>
                                                {data?.Contract}
                                            </Badge>
                                        </Box>
                                    </Flex>

                                    <Flex justifyContent="space-between" >
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={6} color='blue.500' as={Coins} />
                                            <Text fontWeight={'semibold'}>Salário</Text>
                                        </Flex>
                                        <Text>
                                            {data?.salary
                                                ? new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                }).format(data?.salary)
                                                : 'Não informado'}
                                        </Text>
                                    </Flex>

                                    <Flex justifyContent="space-between"  >
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={6} color='red.500' as={CalendarBlank} />
                                            <Text fontWeight={'semibold'}>Publicado</Text>
                                        </Flex>
                                        <Text>
                                            {data?.date_updated || data?.date_created
                                                ? new Date(data?.date_updated || data?.date_created).toLocaleDateString('pt-BR')
                                                : 'Não informado'}
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Flex direction={"column"} gap={2} w="full">
                                    <Flex justifyContent="space-between" >
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={6} color='purple.500' as={Gift} />
                                            <Text fontWeight={'semibold'}>Quantidade</Text>
                                        </Flex>
                                        <Text >{data?.quantidade ? data?.quantidade.toString().padStart(2, '0') : '01'}</Text>
                                    </Flex>

                                    <Flex justifyContent="space-between" >
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={6} color='teal.500' as={Wheelchair} />
                                            <Text fontWeight={'semibold'}>PCD</Text>
                                        </Flex>
                                        <Text>
                                            {data?.pcd === 'nao-aceita'
                                                ? 'Não aceita'
                                                : data?.pcd === 'nao-informado'
                                                    ? 'Não informado'
                                                    : data?.pcd && data?.pcd.charAt(0).toUpperCase() + data?.pcd.slice(1)}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}
