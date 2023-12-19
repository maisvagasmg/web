import { Flex, Heading, Stack, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export const Hero = () => {
    return (
        <>
            <Flex w="full" bg="blue.50" justifyContent="center" alignItems="center" >
                <Flex py={4} px={8} align={'center'} justifyContent={'space-between'} bg='blue.50' w='full' maxW="7xl"  >
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}>
                            <Text as={'span'} position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>
                                Sua vaga está aqui!
                            </Text>
                            <br />{' '}
                            <Text color={'blue.400'} as={'span'}>
                                É mais vagas pra você.
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'gray.600'}>
                            O jeito mais rápido, fácil e eficaz de você achar seu emprego no MG!
                        </Text>
                    </Stack>
                    <Flex  >
                        <Image minH="full" objectFit={"contain"} boxSize={48} src="./assets/job.gif"></Image>
                    </Flex>
                </Flex>
            </Flex>


        </ >
    );
}
