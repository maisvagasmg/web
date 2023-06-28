import { Box, Button, Divider, Flex, Link, Spacer } from '@chakra-ui/react';
import { Logo } from "../Logo/Logo";
const Header = () => {
    return (
        <>
            <Box as="header" bg="gray.50" py={4} px={8} h="100%"> {/* Adicione essa linha */}
                <Flex align="center" h="100%"> {/* Adicione essa linha */}
                    <Box>
                        <Link href="/">
                            <Logo />
                        </Link>
                    </Box>
                    <Spacer />
                    <Flex alignItems="center" justifyContent="center" h="100%"> {/* Atualize essa linha */}
                        <Link href="/vagas" mr={4}>
                            Todas as vagas
                        </Link>
                        <Link href="/empresas" mr={4}>
                            Empresas
                        </Link>
                        <Link href="/cursos-concursos" mr={4}>
                            Cursos e Concursos
                        </Link>
                        <Link href="/contato" mr={4}>
                            Contato
                        </Link>
                        <Button colorScheme="pink">Publicar vaga</Button>
                    </Flex>
                </Flex>
            </Box>
            <Divider />
        </>
    );
};

export default Header;
