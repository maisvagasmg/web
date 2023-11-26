import { Card, CardBody, Flex, HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { Briefcase, Clock, CurrencyCircleDollar } from "@phosphor-icons/react";

export default function JobInfo() {
    return (
        <>
            <Flex w="full" justifyContent="center"  >
                <Flex w='full' justifyContent="center" direction={{ base: 'column', md: 'row' }}  >
                    <Card height="full" variant="outline" boxShadow="sm"  >
                        <CardBody >
                            <Flex direction="column">
                                <SimpleGrid columns={2}>
                                    <Flex justifyContent={'center'} gap={1} flexWrap={'wrap'} direction={'column'}>
                                        <HStack alignItems="center" gridGap="4px">
                                            <Icon boxSize={6} color='green.500' as={Briefcase} />
                                            <Text fontWeight={'bold'}> Tipo </Text>
                                        </HStack>
                                        <HStack alignItems="center" gridGap="4px">
                                            <Icon boxSize={6} color='purple.500' as={CurrencyCircleDollar} />
                                            <Text fontWeight={'bold'}>Salário</Text>
                                        </HStack>
                                        <HStack alignItems="center" gridGap="4px">
                                            <Icon boxSize={6} color='red.500' as={Clock} />
                                            <Text fontWeight={'bold'}>Publicado</Text>
                                        </HStack>
                                    </Flex>
                                    <Flex direction="column" gap={1} textAlign={'right'}>
                                        <Text >Efetivo</Text>
                                        <Text >R$ 3.600,00</Text>
                                        <Text >21 de Outubro</Text>
                                    </Flex>
                                </SimpleGrid>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}
