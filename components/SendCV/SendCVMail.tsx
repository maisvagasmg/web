import { Button, Center, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Image, Input, Text, useDisclosure } from '@chakra-ui/react';
import { ReadCvLogo } from "@phosphor-icons/react";
import { ReactNode } from 'react';


export const SendCVMail = ({ children }: { children: ReactNode }) => {
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
                                    <Icon boxSize={6} color='gray.500' as={ReadCvLogo} />
                                    <Text fontSize="2xl" color="gray.600" justifyContent={"center"} fontWeight={"bold"}>Envie seu currículo</Text>
                                </HStack >
                                <Text fontSize="md" color="gray.500" textAlign={"center"}  >Preencha as informações abaixo e selecione seu currículo para confirmar sua candidatura.</Text>

                                {/* <FormControl>
                                    <FormLabel>Nome completo</FormLabel>
                                    <Input type='text' placeholder='João da Silva Sauro' />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>WhatsApp com DDD</FormLabel>
                                    <Input placeholder='(27) 99999-9999' type='tel' />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>E-mail</FormLabel>
                                    <Input placeholder='joaodasilva@gmail.com' type='email' />
                                </FormControl> */}
                                <Input type='text' placeholder='Nome completo' />
                                <Input placeholder='WhatsaApp com DDD' type='tel' />
                                <Input placeholder='E-mail' type='email' />
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