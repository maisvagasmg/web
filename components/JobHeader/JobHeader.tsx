import { Button, Flex, Image, Text, SimpleGrid, Grid, GridItem, Card, CardBody, CardFooter, CardHeader, Divider } from '@chakra-ui/react';
import JobInfo from '../JobInfo/JobInfo';
import { SendCVMail } from '../SendCV/SendCVMail';
import { SendCVLink } from '../SendCV/SendCVLink';
import { SendCVWhatsApp } from '../SendCV/SendCVWhatsApp';
import JobSidebar from '../JobSidebar/JobSidebar';

export default function Jobheader() {
    return (
        <>
            <Flex w="full" justifyContent="center" direction="column" >
                <Flex px={4} justifyContent="center" direction={{ base: 'column', md: 'row' }} bg="gray.50" py={6} borderWidth={1} borderColor="gray.200" borderBottomLeftRadius={24} borderBottomRightRadius={24} >
                    <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 8]} maxW="7xl" mx="auto" >
                        <Flex direction={'column'}  >
                            <Flex gap={4} mb={[4, 4, 0]} >
                                <Image boxSize={[24, 24, 32]} objectFit='cover' rounded="lg" src='https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png' />
                                <Flex direction={'column'} justifyContent={'space-between'}>
                                    <Text fontWeight={'bold'} fontSize='md' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}> Analista de Recursos Humanos - Recrutamento e Seleção</Text>
                                    <Flex direction={'column'}>
                                        <Text fontWeight={'medium'} fontSize={['xs', 'xs', 'sm']} color="gray.500" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>Vitória, Vila Velha, Cariacica, Viana</Text>
                                        <Text fontWeight={'medium'} fontSize={['xs', 'xs', 'sm']} color="gray.500" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>Grupo Coutinho (Extrabom Supermercados)</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <JobInfo />
                    </SimpleGrid>
                </Flex>

                <Flex direction={['row', 'row', 'column']} px={4} py={4} gap={4} mt={4} alignItems={'center'} maxW="7xl" mx="auto" w="full" flexWrap={['wrap', 'wrap', 'nowrap']} >
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='100%' colSpan={[3, 3, 2]} >
                            <Card boxShadow="sm" rounded={6} overflow="hidden" variant="outline">
                                <CardHeader>
                                    <Text fontWeight="bold" fontSize="xl" color="gray.800" textAlign="center"> Informações da Vaga</Text>
                                </CardHeader>
                                <Divider w="full"></Divider>
                                <CardBody>
                                    <Text color="gray.600" py={4}>
                                        A empresa Litoral T&ecirc;xtil est&aacute; com nova vaga em aberto na cidade de Vila Velha para o cargo de ANALISTA DE RECURSOS HUMANOS<br />
                                        Confira logo mais abaixo todos os detalhes da vaga e como se candidatar a essa oportunidade de emprego.<br />
                                        N&oacute;s do Mais Vagas ES acreditamos em voc&ecirc; e desejamos boa sorte nesse processo seletivo.<br />
                                        N&atilde;o deixe de nos contar caso voc&ecirc; seja contratado! Estamos ansiosos para celebrar essa conquista juntos!<br />
                                        <br />
                                        Sal&aacute;rio: Sal&aacute;rio a combinar<br />
                                        Empresa: Litoral T&ecirc;xtil<br />
                                        Local de trabalho: Vila Velha, ES, BR (1 vaga)<br />
                                        Hor&aacute;rio: Segunda &agrave; sexta de 8h &agrave;s 18h | 1h12min de Almo&ccedil;o<br />
                                        <br />
                                        Descri&ccedil;&atilde;o:<br />
                                        Realizar processos de R&amp;S em todos os n&iacute;veis operacionais, t&eacute;cnicos, administrativos e de Gest&atilde;o;<br />
                                        Atuar de forma proativa nas Redes Sociais e ferramentas de R&amp;S;<br />
                                        Alinhar perfil de vagas com gestores e a Pol&iacute;tica de Cargos e Sal&aacute;rios;<br />
                                        Realizar o processo de onbording;<br />
                                        Acompanhar evolu&ccedil;&atilde;o e adapta&ccedil;&atilde;o de admitidos durante no per&iacute;odo de Experi&ecirc;ncia;<br />
                                        Gerar e acompanhar indicadores de R&amp;S.<br />
                                        <br />
                                        Requisitos:<br />
                                        Ensino Superior Completo em Psicologia, Gest&atilde;o de RH, Administra&ccedil;&atilde;o ou &aacute;reas afins;<br />
                                        Experi&ecirc;ncia em processos de R&amp;S;<br />
                                        Experi&ecirc;ncia com processos seletivos de volume ser&aacute; um diferencial;<br />
                                        Conhecimento de ferramentas de Avalia&ccedil;&atilde;o Comportamental.<br />
                                        Benef&iacute;cios: Assist&ecirc;ncia m&eacute;dica, Assist&ecirc;ncia odontol&oacute;gica, Aux&iacute;lio academia, Celular corporativo, Estacionamento, Seguro de Vida, Vale-alimenta&ccedil;&atilde;o, Vale-transporte<br />
                                        <br />
                                        COMO SE CANDIDATAR A VAGA?<br />
                                        Clique no bot&atilde;o VERDE com o nome &#8618; ME CANDIDATAR A ESSA VAGA &#8617; logo abaixo, e voc&ecirc; ser&aacute; redirecionado automaticamente para o site da empresa<br />
                                        L&aacute; voc&ecirc; poder&aacute; preencher as informa&ccedil;&otilde;es ou anexar seu curr&iacute;culo.<br />
                                        &rarr; Essa vaga poder&aacute; n&atilde;o estar mais dispon&iacute;vel dependendo do momento em que voc&ecirc; esteja vendo essa publica&ccedil;&atilde;o.
                                    </Text>
                                </CardBody>
                                <Divider w="full"></Divider>
                                <CardFooter>
                                    <SendCVMail>
                                        <Button colorScheme="green" w="full">Me candidatar a essa vaga</Button>
                                    </SendCVMail>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem w='100%' colSpan={[3, 3, 1]}>
                            <JobSidebar />
                        </GridItem>
                    </Grid>
                    <Flex direction={'column'} >
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}


{/* <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} >
                                <Image boxSize={20} objectFit='cover' rounded="lg" src='https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png?w=680&ssl=1' mb={4} />
                                <Text fontWeight={'bold'} size='md' color="blue.800">Analista de Departamento Pessoal</Text>
                                <Text fontWeight={'medium'} size='sm' color="gray.500">São Domingos do Norte</Text>
                            </Flex> */}