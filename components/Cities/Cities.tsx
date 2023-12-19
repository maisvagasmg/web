import { Card, Flex, Hide, HStack, Icon, Show, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { Briefcase } from "@phosphor-icons/react";

export default function Cities() {
    return (
        <>

            <Flex w="full" direction="column"  >
                <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                    <Flex direction={'column'} py={4} px={6} justifyContent="center"  >
                        <Flex justifyContent={'center'} gap={4} direction={'column'}>
                            <Text fontWeight={'bold'} fontSize='xl' textAlign={'center'} color="blue.700">Cidades
                            </Text>
                            <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'} color="gray.500">Descubra vagas próximas a você! Escolha uma cidade abaixo e explore as vagas disponíveis exclusivas para essa localidade.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="column" w="full" px={6} maxW="7xl" mx="auto">
                <Text py={8} textAlign={'center'} fontWeight="bold" fontSize="lg" color="gray.700"> Este recurso estará disponível em breve</Text>

                {/* <Text py={4} fontWeight="bold" fontSize="lg" color="gray.700"> V (23)</Text>
                <Flex justifyContent="center" gap={4} >
                    <SimpleGrid w="full" spacing={4} columns={[1, 1, 2]} >
                        <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden" >
                            <Flex  >
                                <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                    <HStack alignItems="center" w="full">
                                        <Text fontSize="md" fontWeight="semibold">Vitória</Text>
                                        <Spacer />
                                        <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                        <Text fontWeight="semibold" fontSize="md" color="gray.600">02</Text>
                                    </HStack>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden">
                            <Flex  >
                                <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                    <HStack alignItems="center" w="full">
                                        <Text fontSize="md" fontWeight="semibold">Vila Velha</Text>
                                        <Spacer />
                                        <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                        <Text fontWeight="semibold" fontSize="md" color="gray.600">12</Text>
                                    </HStack>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card variant="outline" boxShadow="sm" rounded={6}  >
                            <Flex  >
                                <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                    <HStack alignItems="center" w="full">
                                        <Text fontSize="md" fontWeight="semibold">Viana</Text>
                                        <Spacer />
                                        <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                        <Text fontWeight="semibold" fontSize="md" color="gray.600">32</Text>
                                    </HStack>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card variant="outline" boxShadow="sm" rounded={6}  >
                            <Flex  >
                                <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                    <HStack alignItems="center" w="full">
                                        <Text fontSize="md" fontWeight="semibold">Venda Nova do Imigrante</Text>
                                        <Spacer />
                                        <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                        <Text fontWeight="semibold" fontSize="md" color="gray.600">01</Text>
                                    </HStack>
                                </Flex>
                            </Flex>
                        </Card>
                    </SimpleGrid>
                </Flex> */}
            </Flex>
        </>
    )
}
