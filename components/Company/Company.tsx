import { Badge, Card, Flex, Grid, Hide, Image, Show, Text, SimpleGrid } from '@chakra-ui/react';

export default function Company() {
    return (
        <>
            <Flex w="full" justifyContent="center" direction="column"  >
                <Flex px={2} justifyContent="center" direction={{ base: 'column', md: 'row' }} bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                    <Flex justifyContent={'center'} direction={'column'} gap={4} py={4} >
                        <Flex justifyContent={'center'} direction={'column'} alignItems={'center'}  >
                            <Image boxSize={24} objectFit='cover' rounded="lg" src='https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png' mb={4} />
                            <Text fontWeight={'bold'} fontSize='lg' color="blue.800">Kurumá Veículos</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Text textAlign="center" px={4} py={4} fontWeight="bold" fontSize="lg" color="gray.800"> Vagas em aberto (16)</Text>
            <Flex justifyContent="center" >
                <Flex justifyContent="center" direction={"column"} px={4} >
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} maxW="6xl" mx="auto">
                        <Card variant="outline" boxShadow="sm" rounded={8} overflow="hidden">
                            <Flex w="full">
                                <Image justifyContent={"center"} minH="full" src='https://i0.wp.com/maisvagasmg.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png' objectFit={"cover"} boxSize={24} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
                                <Flex direction="column" px={4} py={4} justifyContent="center">
                                    <Text fontWeight={'semibold'} fontSize='md' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>Analista de Recursos Humanos - Recrutamento e Seleção </Text>
                                    <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center">
                                        <Text fontSize="md" color="gray.500" textAlign="left">Serra</Text>
                                        <Badge colorScheme="blue" size="sm" textAlign="right">Efetivo</Badge>
                                    </Grid>
                                </Flex>
                            </Flex>
                        </Card>
                    </SimpleGrid>

                </Flex>
            </Flex>
        </>
    )
}
