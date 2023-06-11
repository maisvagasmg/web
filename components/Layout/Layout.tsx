'use client';
import { Box, Flex, Hide } from '@chakra-ui/react';
import { Header } from '../Header/Header';
import CookieConsent from "react-cookie-consent";
import Link from 'next/link'
import { HeaderFilter } from '../HeaderFilter/HeaderFilter';
import { useState, useEffect } from 'react';
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [cidades, setCidades] = useState<any[]>([]);
  useEffect(() => {
    if (cidades.length === 0) {
      fetchData();
    }
    async function fetchData() {
      const response = await fetch('/api/cidades');
      setCidades(await response.json());
    }
  }, [cidades]);
  return (
    <>
      <Flex direction='column' h="100%" textColor='gray.700'>
        <Flex h="100%" position='relative'>
          <Flex overflowY='auto' w="full" bgColor='gray.800' >
            <Flex flexDir="column" overflowY='auto' w="full">
              <Header cidades={cidades} />
              <Hide below='md'>
                <HeaderFilter cidades={cidades} />
              </Hide>
              <Box px={[4]}>{children} </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <style>
        {` 
        ::-webkit-scrollbar {
            width: 6px !important;
            height: 6px !important;
        }
        
        ::-webkit-scrollbar-track {
            background: #2D3748!important;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #fbd38d;
            border-radius: 12px !important;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background:#fbd38d !important;
        } 
      `}
      </style>
      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        cookieName="ImoveisSTCookies"
        style={{ background: "#fbd38d", color: "#2D3748" }}
        buttonStyle={{ color: "#fbd38d", background: '#2D3748', borderRadius: "4px", fontSize: "13px" }}
        expires={150}
      >
        <span style={{ fontSize: "14px" }}>Nosso site utiliza apenas cookies essenciais para melhorar a experiência do usuário. Ao navegar você aceita os <Link href='/termos-e-condicoes' style={{ textDecoration: 'underline' }}>Termos de uso</Link> e <Link style={{ textDecoration: 'underline' }} href='/politica-de-privacidade'>Política de Privacidade</Link>.</span>
      </CookieConsent>
    </>
  );
}