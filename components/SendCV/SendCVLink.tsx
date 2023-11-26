import { Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Image, Text, useDisclosure } from '@chakra-ui/react';
import { ArrowSquareOut } from "@phosphor-icons/react";
import { ReactNode } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const SendCVLink = ({ children }: { children: ReactNode }) => {
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
                                    <Icon boxSize={6} color='blue.500' as={ArrowSquareOut} />
                                    <Text fontSize="2xl" color="blue.600" justifyContent={"center"} fontWeight={"bold"}>Candidatura externa</Text>
                                </HStack >
                                <Text fontSize="md" color="gray.500" textAlign={"center"}  >Você está sendo redirecionado para o <b>site de inscrição da empresa</b>. Lá você deverá preencher suas informações para confirmar sua candidatura a vaga.</Text>
                                <Text fontSize="xs" color="gray.400"> Aproximadamente <b>89 inscrições</b> através do nosso site</Text>
                                <Center>
                                    <CountdownCircleTimer
                                        isPlaying
                                        size={120}
                                        strokeWidth={8}
                                        duration={15}
                                        colors={['#3182CE', '#9F7AEA', '#ED64A6']}
                                        colorsTime={[11, 6, 0]}
                                        isSmoothColorTransition={true}
                                        onComplete={() => {
                                            window.location.href = 'https://maisvagases.com.br/inscricao';
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