import { Button, Center, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Image, Input, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { ReadCvLogo } from "@phosphor-icons/react";
import { ReactNode } from 'react';
import { UploadButton } from './UploadButton';

export const SendCVMail = ({ children }: { children: ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const DrawerPosition = useBreakpointValue({ base: 'bottom', md: 'bottom', lg: 'right' })

    return (
        <>
            <Flex onClick={onOpen} w="full"  >{children}</Flex>
            <Drawer isOpen={isOpen} onClose={onClose}
                //@ts-ignore
                placement={DrawerPosition} size={['md', 'md', 'lg']}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex direction={"column"} gap={4} alignItems={"center"} py={8}>
                                <HStack alignItems="center" gridGap="4px">
                                    <Icon boxSize={6} color='gray.500' as={ReadCvLogo} />
                                    <Text fontSize="2xl" color="gray.600" justifyContent={"center"} fontWeight={"bold"}>Envie seu currículo</Text>
                                </HStack >
                                <Text fontSize="md" color="gray.500" textAlign={"center"}  >Preencha as informações abaixo e selecione seu currículo para confirmar sua candidatura.</Text>                                <Input type='text' placeholder='Nome completo' />
                                <Input placeholder='WhatsaApp com DDD' type='tel' />
                                <Input placeholder='E-mail' type='email' />
                                <UploadButton setFiles={null} xfiles={[]} />
                            </Flex>
                            <Center>
                                <Image minH="full" src="https://i.imgur.com/wPNfC7i.png" ></Image>
                            </Center>

                            <Flex direction={"column"} gap={4} py={4}>
                                <Checkbox defaultChecked>Salvar dados para candidaturas futuras</Checkbox>
                                <Checkbox defaultChecked>Concordo com os Termos e Condições</Checkbox>
                                <Button colorScheme="blue" w="full" >Enviar candidatura</Button>
                            </Flex>

                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    );
}