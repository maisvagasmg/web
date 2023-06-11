'use client';
import { Flex } from '@chakra-ui/react';
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex direction='column' h="100%" textColor='gray.700'>
        <Flex h="100%" position='relative'>
          <Flex overflowY='auto' w="full" bgColor='gray.800' >
            <Flex flexDir="column" overflowY='auto' w="full">
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}