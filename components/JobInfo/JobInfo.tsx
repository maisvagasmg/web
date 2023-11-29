import { Badge, Card, CardBody, Flex, Icon, Text, Box } from '@chakra-ui/react';
import { Briefcase, Clock, CurrencyCircleDollar } from "@phosphor-icons/react";

export default function JobInfo() {
    return (
        <>
            <Flex w="full" justifyContent="center"  >
                <Flex w='full' justifyContent="center" direction={{ base: 'column', md: 'row' }}  >
                    <Card height="full" variant="outline" boxShadow="sm" w="full" >
                        <CardBody justifyContent="space-between" display="flex" flexDirection="column" gap={2}>
                            <Flex justifyContent="space-between" >
                                <Flex align="center" gap={1}>
                                    <Icon boxSize={6} color='green.500' as={Briefcase} />
                                    <Text fontWeight={'bold'}> Tipo </Text>
                                </Flex>
                                <Box>
                                    <Badge variant='subtle' colorScheme="green" >Efetivo</Badge>
                                </Box>
                            </Flex>

                            <Flex justifyContent="space-between" >
                                <Flex align="center" gap={1}>
                                    <Icon boxSize={6} color='blue.500' as={CurrencyCircleDollar} />
                                    <Text fontWeight={'bold'}>Salário</Text>
                                </Flex>
                                <Text >R$ 3.600,00</Text>
                            </Flex>

                            <Flex justifyContent="space-between"  >
                                <Flex align="center" gap={1}>
                                    <Icon boxSize={6} color='red.500' as={Clock} />
                                    <Text fontWeight={'bold'}>Publicado</Text>
                                </Flex>
                                <Text >21 de Outubro</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}
