import { Box, Flex, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Logo } from "../Logo/Logo";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'800'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <>
            <Flex direction="column" px="8" w="full" alignItems="center" bg="gray.100" mt={["8", "16"]} >
                <Flex w="full" maxW="8xl" py={10} px={["2", "8"]} >
                    <SimpleGrid w='full'
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <Logo />
                            </Box>
                            <Text fontSize={'sm'}>
                                © 2023 Ofertas ES. Todos os direitos reservados.
                            </Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Informações</ListHeader>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Perguntas Frequentes</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Anunciar</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>O que fazemos?</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Ofertas ES</ListHeader>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Sobre</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Contato</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Parceria</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Legal</ListHeader>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Termos e Condições</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Política de Privacidade</Link>
                            <Link style={{ textDecoration: 'none' }} href={'#'}>Isenção de Responsabilidade</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Siga-nos</ListHeader>
                            <Link style={{ textDecoration: 'none' }} href={'https://facebook.com/maisvagases'}>Facebook</Link>
                            <Link style={{ textDecoration: 'none' }} href={'https://t.me/maisvagases'}>Telegram</Link>
                            <Link style={{ textDecoration: 'none' }} href={'https://instagram.com/maisvagases'}>Instagram</Link>
                        </Stack>
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Flex mb={[24, 0]} direction="column" px="8" py="4" w="full" alignItems="center" bg="blue.100">
                <Flex w="full" justifyContent="center" maxW="8xl" >
                    <Text fontSize="10px" textAlign="justify" color="blue.600">
                        O Mais Vagas ES é uma plataforma capixaba que reúne diariamente as melhores vagas de emprego em todo o Espírito Santo. Fique por dentro das últimas vagas de emprego ofertadas e encontre facilmente as melhores oportunidades na sua região. Como um dos principais sites de busca de emprego do estado, somos a sua fonte confiável para visualizar as vagas mais recentes nas empresas, proporcionando uma vantagem exclusiva por possuímos diversas parcerias com empresas.
                    </Text>
                </Flex>
            </Flex>

        </>
    );
}