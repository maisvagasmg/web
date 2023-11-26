import { Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Image, Text, useDisclosure } from '@chakra-ui/react';
import { WhatsappLogo } from "@phosphor-icons/react";
import { ReactNode } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const SendCVWhatsApp = ({ children }: { children: ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex onClick={onOpen} w="full"  >{children}</Flex>
            <Drawer isOpen={isOpen} onClose={onClose} placement='bottom' >
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
                                <Text fontSize="xs" color="gray.400"> Aproximadamente <b>89 inscrições</b> através do nosso site</Text>
                                <Center>
                                    <CountdownCircleTimer
                                        isPlaying
                                        size={120}
                                        strokeWidth={8}
                                        duration={15}
                                        colors={['#38A169', '#68D391', '#9AE6B4']}
                                        colorsTime={[11, 6, 0]}
                                        isSmoothColorTransition={true}
                                        onComplete={() => {
                                            window.location.href = 'https://api.whatsapp.com/send?phone=5527992924645&text=Ol%C3%A1!%20Vi%20a%20vaga%20de%20*Auxiliar%20de%20Servi%C3%A7os%20Gerais*%20no%20site%20Mais%20Vagas%20ES,%20e%20estarei%20enviando%20meu%20curr%C3%ADculo%20para%20que%20possa%20ser%20avaliado.%0A%0ADesde%20j%C3%A1%20agrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o.%20%F0%9F%98%84';
                                        }}
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