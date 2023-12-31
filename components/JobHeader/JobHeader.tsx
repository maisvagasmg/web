import { Card, CardBody, CardFooter, CardHeader, Divider, Flex, Grid, GridItem, Image, SimpleGrid, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import JobInfo from '../JobInfo/JobInfo';
import { SendCVLink } from '../SendCV/SendCVLink';
import { SendCVMail } from '../SendCV/SendCVMail';
import { SendCVWhatsApp } from '../SendCV/SendCVWhatsApp';
import Telegram from '../Telegram/Telegram';
import JobSidebar from '../JobSidebar/JobSidebar';

export default function Jobheader({ data, isLoaded }) {
    return (
        <>
            <Flex w="full" justifyContent="center" direction="column" >
                <Telegram />
                <Flex px={4} justifyContent="center" direction={{ base: 'column', md: 'row' }} bg="gray.50" py={6} borderWidth={1} borderColor="gray.200" borderBottomLeftRadius={8} borderBottomRightRadius={8} w="full">
                    <SimpleGrid columns={[1, 1, 2]} spacing={[4, 4, 8]} maxW="7xl" mx="auto" px={[0, 0, 4]} w="full">
                        <Flex direction={'column'}  >
                            <Flex gap={4} mb={[4, 4, 0]} >
                                <Skeleton isLoaded={isLoaded}>
                                    <Image boxSize={[24, 24, 32]} objectFit='cover' rounded="lg" src={`${process.env.NEXT_PUBLIC_URL}/assets/${data?.companies?.Logo?.filename_disk}format=webp&quality=75`} />
                                </Skeleton>
                                <Flex direction={'column'} justifyContent={'space-between'}>
                                    <Skeleton noOfLines={1} isLoaded={isLoaded}>
                                        <Text fontWeight={'bold'} fontSize='md' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                            {data?.cargo.Cargo}
                                        </Text>
                                    </Skeleton>
                                    <Flex direction={'column'}>
                                        <Text fontWeight={'medium'} fontSize={['xs', 'xs', 'sm']} color="gray.500" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                            {data?.cidade.map((tag, index) => (<Skeleton as='span' isLoaded={isLoaded} key={tag.id}>
                                                <Text fontSize="sm" display={index > 0 ? 'inline' : 'none'} as='span'
                                                    dangerouslySetInnerHTML={{ __html: index === data?.cidade.length - 1 ? "&nbsp;e&nbsp;" : ",&nbsp;" }} />
                                                {tag.Cidades_id?.cidade}
                                            </Skeleton>
                                            ))}
                                        </Text>
                                        <Skeleton isLoaded={isLoaded}>
                                            <Text fontWeight={'medium'} fontSize={['xs', 'xs', 'sm']} color="gray.500" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{data?.companies?.Empresa}</Text>
                                        </Skeleton>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <JobInfo data={data} isLoaded={isLoaded} />
                    </SimpleGrid>
                </Flex>

                <Flex direction={['row', 'row', 'column']} px={4} py={4} gap={4} mt={4} alignItems={'center'} maxW="7xl" mx="auto" w="full" flexWrap={['wrap', 'wrap', 'nowrap']} >
                    <Grid templateColumns='repeat(3, 1fr)' gap={6} >
                        <GridItem w='100%' colSpan={[3, 3, 2]} >
                            <Card boxShadow="base" rounded={6} overflow="hidden" variant="outline" mb={32}>
                                <CardHeader>
                                    <Text fontWeight="bold" fontSize="xl" color="gray.800" textAlign="center"> Informações da Vaga</Text>
                                </CardHeader>
                                <Divider w="full"></Divider>
                                <CardBody>
                                    <SkeletonText noOfLines={15} isLoaded={isLoaded} skeletonHeight={18}>
                                        <Text as='p' >
                                            A empresa <strong>{data?.companies?.Empresa}</strong> está com nova vaga em aberto para a cidade de&nbsp;
                                            <Text as='strong' style={{ lineBreak: 'anywhere' }}>
                                                {data?.cidade.map((tag, index) => (
                                                    <Text as='span' key={tag.id}>
                                                        <Text display={index > 0 ? 'inline' : 'none'} as='span'
                                                            dangerouslySetInnerHTML={{ __html: index === data?.cidade.length - 1 ? "&nbsp;e&nbsp;" : ",&nbsp;" }} />
                                                        {tag.Cidades_id?.cidade}&nbsp;
                                                    </Text>
                                                ))}

                                            </Text> para o cargo de <strong>{data?.cargo.Cargo}.<br /></strong>

                                        </Text>


                                        Confira logo mais abaixo todos os detalhes dessa vaga de emprego e como se candidatar a essa oportunidade.<br />
                                        Nós do Mais Vagas ES te desejamos boa sorte neste processo seletivo! Caso seja contratado, não esqueça de compartilhar essa conquista conosco através de um de nossos canais de comunicação. <br />
                                        <Text dangerouslySetInnerHTML={{ __html: data?.descricao }} className="description"></Text>
                                        <Flex bg="blue.50" w="full" p={4} rounded={6} borderWidth={1} borderColor="blue.100">
                                            <Text color="blue.600" justifyContent="justify" fontSize="sm"  >
                                                Para se candidatar a vaga, clique no botão AZUL abaixo com o nome <strong>↪ ME CANDIDATAR A ESSA VAGA ↩</strong> logo abaixo. Preencha suas informações com nome, email e WhatsApp e anexe seu currículo.
                                            </Text>
                                        </Flex>
                                    </SkeletonText>
                                </CardBody>
                                <Divider w="full"></Divider>
                                <CardFooter >
                                    {data?.candidatura == "link" && <SendCVLink link={data?.url} inscricoes={data?.inscricoes} id={data?.id} />}
                                    {data?.candidatura == "mail" && <SendCVMail />}
                                    {data?.candidatura == "whatsapp" && <SendCVWhatsApp whatsapp={data?.whatsapp?.whatsapp} cargo={data?.cargos} inscricoes={data?.inscricoes} id={data?.id} />}
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem w='100%' colSpan={[3, 3, 1]}>
                            <JobSidebar cargo={data?.cargo.Cargo} empresa={data?.companies.Empresa} />
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}