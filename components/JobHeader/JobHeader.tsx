import { Button, Flex, Image, Text, SimpleGrid } from '@chakra-ui/react';
import JobInfo from '../JobInfo/JobInfo';
import { SendCVMail } from '../SendCV/SendCVMail';
import { SendCVLink } from '../SendCV/SendCVLink';
import { SendCVWhatsApp } from '../SendCV/SendCVWhatsApp';

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
                                    <Text fontWeight={'bold'} fontSize='md' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}> Analista de Recursos Humanos - Recrutamento e Seleção Analista de Recursos Humanos - Recrutamento e Seleção</Text>
                                    <Flex direction={'column'}>
                                        <Text fontWeight={'medium'} size='sm' color="gray.500">Vitória, Vila Velha, Cariacica, Viana</Text>
                                        <Text fontWeight={'medium'} size='sm' color="gray.500">Grupo Coutinho (Extrabom Supermercados)</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <JobInfo />
                    </SimpleGrid>
                </Flex>

                <Flex direction={'column'} px={4} py={4} gap={4} mt={4} alignItems={'center'} >
                    <Flex direction={'column'} maxW="7xl" mx="auto" w="full" gap={4}>
                        <Text fontWeight="bold" fontSize="xl" color="gray.800" textAlign="center"> Informações da Vaga</Text>
                        <Text fontWeight="medium" color="gray.600" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                        </Text>

                        <SendCVMail>
                            <Button colorScheme="blue" w="full">Me candidatar</Button>
                        </SendCVMail>
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