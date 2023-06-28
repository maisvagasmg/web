import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Hero: React.FC = () => {
    return (
        <Box bg="gray.100" py={16} px={8}>
            <Heading as="h1" size="xl" textAlign="left" mb={4}>
                Vagas de emprego no ES!
            </Heading>
            <Heading fontWeight="light" as="h2" size="md" textAlign="left">
                O jeito mais rápido e fácil de achar seu emprego no ES!
            </Heading>
        </Box>
    );
};

export default Hero;
