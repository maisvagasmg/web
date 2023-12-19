import { Button, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { WhatsappLogo } from '@phosphor-icons/react';
import axios from 'axios';
import { useState } from 'react';

const WhatsApp = () => {
    async function WhatsAppLink(): Promise<string> {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/WhatsApp/?&filter[url][_eq]=true`)
        //@ts-ignore
        return response?.data?.data[0]?.link;
    }

    return (
        <Flex justifyContent="center" position="fixed" bottom="0" left="0" right="0" bg="white" wrap="wrap" zIndex={9999} p={4} display={["flex", "none"]} borderTop="1px" borderColor="gray.200">
            <Button
                colorScheme="whatsapp"
                size="md"
                width="100%"
                onClick={async () => {
                    const link = await WhatsAppLink();
                    window.location.href = link;
                }}
            >
                <Flex alignItems="center">
                    <Icon as={WhatsappLogo} boxSize={4} mr={2} />
                    <Text fontSize="sm" >CLIQUE PARA RECEBER VAGAS WHATSAPP</Text>
                </Flex>
            </Button>
            <Flex mt="2">
                <Text fontSize={10}>Ao entrar no grupo, você concorda com os &nbsp;</Text>
                <Link href="/termos-e-condicoes" target="_blank">
                    <Text fontSize={10} textDecoration="underline"> Termos e condições</Text>
                </Link>
            </Flex>
        </Flex>
    );
};

export default WhatsApp;
