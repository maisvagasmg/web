import { Card, Flex, Hide, HStack, Icon, Show, Spacer, Text } from '@chakra-ui/react';
import { Briefcase } from "@phosphor-icons/react";

export default function Positions() {
    return (
        <>
            <Show above="md">Versão para desktop indiponível no momento</Show>

            <Hide above="md">
                <Flex w="full" direction="column"  >
                    <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                        <Flex direction={'column'} py={4} px={4} justifyContent="center" >
                            <Flex justifyContent={'center'} >
                                <Text fontWeight={'bold'} fontSize='xl' color="blue.700">Cargos (322)
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex direction="column" w="full" px={6}  >
                    <Text py={4} fontWeight="bold" fontSize="lg" color="gray.700"> A (23)</Text>
                    <Flex justifyContent="center" gap={4} >
                        <Flex w="full" justifyContent="center" direction={"column"}  >
                            <Card variant="outline" boxShadow="sm" rounded={6}  >
                                <Flex  >
                                    <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                        <HStack alignItems="center" w="full">
                                            <Text fontSize="md" fontWeight="semibold">Gestor de Portfólio e Desenvolvimento de Produtos Cerâmicos</Text>
                                            <Spacer />
                                            <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                            <Text fontWeight="semibold" fontSize="md" color="gray.600">02</Text>
                                        </HStack>
                                    </Flex>
                                </Flex>
                            </Card>
                            <Card variant="outline" boxShadow="sm" rounded={6}  >
                                <Flex  >
                                    <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                        <HStack alignItems="center" w="full">
                                            <Text fontSize="md" fontWeight="semibold">Auxiliar de Recursos Humanos - Recrutamento e Seleção</Text>
                                            <Spacer />
                                            <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                            <Text fontWeight="semibold" fontSize="md" color="gray.600">13</Text>
                                        </HStack>
                                    </Flex>
                                </Flex>
                            </Card>
                        </Flex>
                    </Flex>
                </Flex>
            </Hide>
        </>
    )
}
