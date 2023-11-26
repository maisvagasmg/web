import { Button, Flex, Hide, Icon, Image, Show, Text } from '@chakra-ui/react';
import JobInfo from '../JobInfo/JobInfo';
import { SendCVMail } from '../SendCV/SendCVMail';
import { SendCVLink } from '../SendCV/SendCVLink';
import { SendCVWhatsApp } from '../SendCV/SendCVWhatsApp';

export default function Jobheader() {
    return (
        <>
            <Show above="md">Versão para desktop indiponível no momento</Show>

            <Hide above="md">
                <Flex w="full" justifyContent="center" direction="column" >
                    <Flex px={4} justifyContent="center" direction={{ base: 'column', md: 'row' }} bg="gray.50" py={6} borderWidth={1} borderColor="gray.200" borderBottomLeftRadius={24} borderBottomRightRadius={24} >
                        <Flex justifyContent={'center'} direction={'column'} gap={4}>
                            <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} >
                                <Flex gap={4}>
                                    <Image boxSize={24} objectFit='cover' rounded="lg" src='https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png' mb={4} />
                                    <Flex direction={'column'} >
                                        <Text fontWeight={'bold'} size='md' color="blue.800">Analista de Recursos Humanos - Recrutamento e Seleção</Text>
                                        <Text fontWeight={'medium'} size='sm' color="gray.500">São Domingos do Norte</Text>
                                        <Text fontWeight={'medium'} size='sm' color="gray.500">Grupo Coutinho (Extrabom Supermercados)</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <JobInfo />
                        </Flex>
                    </Flex>

                    <Flex direction={'column'} px={4} py={4} gap={4} mt={4} alignItems={'center'}>
                        <Text fontWeight="bold" fontSize="xl" color="gray.800"> Informações da Vaga</Text>
                        <Text fontWeight="medium" color="gray.600" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper congue mauris, ac malesuada ipsum semper sit amet. Ut consequat non libero vel interdum. <br /><br />
                        </Text>

                        <SendCVWhatsApp>
                            <Button colorScheme="blue" w="full">Me candidatar</Button>
                        </SendCVWhatsApp>
                    </Flex>
                </Flex>
            </Hide>

        </>
    )
}


{/* <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} >
                                <Image boxSize={20} objectFit='cover' rounded="lg" src='https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2021/11/Kuruma-Veiculos.png?w=680&ssl=1' mb={4} />
                                <Text fontWeight={'bold'} size='md' color="blue.800">Analista de Departamento Pessoal</Text>
                                <Text fontWeight={'medium'} size='sm' color="gray.500">São Domingos do Norte</Text>
                            </Flex> */}