import { Card, Flex, Hide, HStack, Icon, Image, Show, Spacer, Text, SimpleGrid } from '@chakra-ui/react';
import { Briefcase } from "@phosphor-icons/react";

export default function Companies() {
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
                <Text py={8} textAlign={'center'} fontWeight="bold" fontSize="lg" color="gray.700"> Este recurso estará disponível em breve</Text>

                <Text py={4} fontWeight="bold" fontSize="lg" color="gray.700"> A (99)</Text>
                <SimpleGrid columns={[1, 1, 2]} spacing={4} >
                    <Card variant="outline" boxShadow="sm" rounded={8} w="full" overflow="hidden">
                        <Flex maxH={20} w="full" >
                            <Image justifyContent={"center"} minH="full" src='https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png?' objectFit={"cover"} boxSize={20} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
                            <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                <HStack alignItems="center" w="full">
                                    <Text fontSize="md" fontWeight="semibold"  >Kurumá Veículos</Text>
                                    <Spacer />
                                    <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                    <Text fontWeight="semibold" fontSize="md" color="gray.600">02</Text>
                                </HStack>
                            </Flex>
                        </Flex>
                    </Card>

                    <Card variant="outline" boxShadow="sm" rounded={8} w="full" overflow="hidden">
                        <Flex maxH={20} w="full" >
                            <Image justifyContent={"center"} minH="full" src='https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png?' objectFit={"cover"} boxSize={20} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
                            <Flex w="full" px={4} py={4} justifyContent="space-between"  >
                                <HStack alignItems="center" w="full">
                                    <Text fontSize="md" fontWeight="semibold"  >Kurumá Veículos</Text>
                                    <Spacer />
                                    <Icon boxSize={6} color='gray.600' as={Briefcase} />
                                    <Text fontWeight="semibold" fontSize="md" color="gray.600">02</Text>
                                </HStack>
                            </Flex>
                        </Flex>
                    </Card>
                </SimpleGrid>
            </Flex>
        </>
    )
}
