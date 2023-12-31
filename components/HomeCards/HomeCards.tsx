import { Button, Card, Flex, Icon, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { CaretRight } from "@phosphor-icons/react";

export default function HomeCards() {
    return (
        <>
            <Flex w="full" direction="column" maxW="7xl" mx="auto" py={8} px={[4, 4, 8]}>
                <SimpleGrid columns={[1, 1, 3]} spacing={4} mx="auto">
                    <Link href="/cidades" target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }} className="mobile-card">
                        <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden" p={8} transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                            <Flex justifyContent="center" gap={4}>
                                <Flex direction="column">
                                    <Text fontWeight="bold" fontSize="xl" > Vagas por cidade</Text>
                                    <Text fontSize="sm" > Seu tempo é valioso! Encontre as vagas mais perto de você</Text>
                                    <Button maxW={40} colorScheme="red" mt={4} rightIcon={<Icon as={CaretRight} />}>Ver vagas</Button>
                                </Flex>
                                <Flex>
                                    <Image className="floating" minH="full" objectFit={"contain"} boxSize={32} src="./assets/map.png"></Image>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>

                    <Link href="/empresas" target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
                        <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden" p={8} transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                            <Flex justifyContent="center" gap={4}>
                                <Flex direction="column">
                                    <Text fontWeight="bold" fontSize="xl" > Vagas por empresa</Text>
                                    <Text fontSize="sm" > Confira as vagas em aberto na empresa dos seus sonhos</Text>
                                    <Button maxW={40} colorScheme="red" mt={4} rightIcon={<Icon as={CaretRight} />}>Ver empresas</Button>
                                </Flex>
                                <Flex>
                                    <Image className="floating" minH="full" objectFit={"contain"} boxSize={32} src="./assets/company.png"></Image>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>

                    <Link href="/cargos" target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }} >
                        <Card variant="outline" boxShadow="sm" rounded={6} overflow="hidden" p={8} transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card" >
                            <Flex justifyContent="center" gap={4}>
                                <Flex direction="column">
                                    <Text fontWeight="bold" fontSize="xl" > Vagas por cargo</Text>
                                    <Text fontSize="sm" > Já sabe o que procura? Veja as vagas pelo seu cargo</Text>
                                    <Button maxW={40} colorScheme="red" mt={4} rightIcon={<Icon as={CaretRight} />}>Ver cargos</Button>
                                </Flex>
                                <Flex>
                                    <Image className="floating" minH="full" objectFit={"contain"} boxSize={32} src="./assets/briefcase.png"></Image>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>
                </SimpleGrid>
            </Flex>
        </>
    )
}
