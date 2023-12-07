import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Image, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { WhatsappLogo } from "@phosphor-icons/react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SendCVWhatsApp = ({ whatsapp, cargo, inscricoes }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const DrawerPosition = useBreakpointValue({ base: 'bottom', md: 'bottom', lg: 'right' })

    const [numInscricoes, setNumInscricoes] = useState(0);

    const handleTimerComplete = () => {
        const updatedNumInscricoes = numInscricoes + 1;

        // window.open(`https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1!%20Vi%20a%20vaga%20de%20*${cargo}*%20no%20site%20Mais%20Vagas%20ES,%20e%20estarei%20enviando%20meu%20curr%C3%ADculo%20para%20que%20possa%20ser%20avaliado.%0A%0ADesde%20j%C3%A1%20agrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o.%20%F0%9F%98%84`);

        // axios.put(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/`, {
        //     data: {
        //         inscricoes: updatedNumInscricoes,
        //     },
        // })
        //     .then(() => {

        //     })
        //     .catch((error) => {
        //         console.error('Erro ao atualizar o número de inscrições:', error);
        //     });
    };

    // useEffect(() => {
    //     axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/`)
    //         .then((response) => {
    //             const incricoes = response.data[0].data.incricoes;
    //             setNumInscricoes(incricoes);
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao obter o número de inscrições:', error);
    //         });
    // }, []);

    return (
        <>
            <Flex onClick={onOpen} w="full"><Button colorScheme="green" w="full">Me candidatar a essa vaga</Button></Flex>
            <Drawer isOpen={isOpen} onClose={onClose}
                //@ts-ignore
                placement={DrawerPosition} size={['md', 'md', 'lg']} >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex direction={"column"} gap={4} alignItems={"center"} py={8}>
                                <HStack alignItems="center" gridGap="4px">
                                    <Icon boxSize={6} color='green.500' as={WhatsappLogo} />
                                    <Text fontSize="2xl" color="green.600" justifyContent={"center"} fontWeight={"bold"}>Candidatura via WhatsApp</Text>
                                </HStack >
                                <Text fontSize="md" color="gray.500" textAlign={"center"}  >Você está sendo redirecionado para o <b>WhatsApp da empresa</b>. Lá você deverá enviar seu currículo para confirmar sua candidatura a vaga.</Text>
                                <Text fontSize="xs" color="gray.400"> Aproximadamente <b>{inscricoes} inscrições</b> através do nosso site</Text>
                                <Center>
                                    <CountdownCircleTimer
                                        isPlaying
                                        size={120}
                                        strokeWidth={8}
                                        duration={15}
                                        colors={['#38A169', '#68D391', '#9AE6B4']}
                                        colorsTime={[11, 6, 0]}
                                        isSmoothColorTransition={true}
                                        onComplete={handleTimerComplete}
                                    >
                                        {({ remainingTime }) => remainingTime}
                                    </CountdownCircleTimer>
                                </Center>
                            </Flex>
                            <Center mb={8} >
                                <Image minH="full" src="https://i.imgur.com/wPNfC7i.png" ></Image>
                            </Center>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    );
}