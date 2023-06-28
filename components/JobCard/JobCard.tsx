import React from 'react';
import { Box, Flex, Image, Text, Divider, Badge, Card, CardHeader } from '@chakra-ui/react';

interface JobCardProps {
    logo: string;
    title: string;
    company: string;
    jobType: string;
    city: string;
    datePosted: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, title, company, jobType, city, datePosted }) => {
    return (
        <Card variant="outline" boxShadow="sm" p={4} mb={4} w="100%">
            <CardHeader p="2">

            </CardHeader >
            <Flex align="center" mt="4">
                <Image src={logo} alt="Logo da Empresa" boxSize={20} borderRadius="8px" mr={4} />
                <Divider orientation='vertical' height='80px' />

            </Flex>
            <Flex>
                <Text fontWeight="bold">{title}</Text>
            </Flex>
            <Text mt={2} color="gray.600">{company}</Text>
            <Flex align="center">
                <Badge colorScheme="blue" mr={2}>{jobType}</Badge>
                <Text color="gray.500">{city}</Text>
            </Flex>
            <Text color="gray.500">{datePosted}</Text>
        </Card >
    );
};

const App = () => {
    return (
        <Box>
            <JobCard
                logo="https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2022/06/Movida.png"
                title="Frontend Developer"
                company="Movida"
                jobType="Efetivo"
                city="Vila Velha"
                datePosted="27/06/2023"
            />
        </Box>
    );
};

export default App;
