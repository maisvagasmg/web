import React from 'react';
import { Box, Card, CardHeader, CardBody, Text, Flex, Divider, FormLabel } from '@chakra-ui/react';
import JobTypeFilter from './JobTypeFilter';
import PostPeriodFilter from './PostPeriodFilter';
import EducationLevelFilter from './EducationLevelFilter';
import ModalityFilter from './ModalityFilter';

const Sidebar = () => {
    return (
        <Box ml={8} py={4}> {/* Atualize essa linha */}
            <Card variant="outline" minW="300px" w="100%">
                <CardHeader py="4">
                    <Flex justifyContent="space-between">
                        <Text fontSize="lg" fontWeight="bold">Filtros</Text>
                        <Text fontSize="lg" fontWeight="bold" color="red.500" cursor="pointer" ml="auto">Limpar</Text>
                    </Flex>
                </CardHeader>
                <Divider />
                <CardBody>
                    <FormLabel>Data do anúncio</FormLabel>
                    <PostPeriodFilter></PostPeriodFilter>
                    <Divider mt="4" />
                    <FormLabel mt="4">Nível de escolaridade</FormLabel>
                    <EducationLevelFilter></EducationLevelFilter>
                    <Divider mt="4" />
                    <FormLabel mt="4">Modalidade de trabalho</FormLabel>
                    <ModalityFilter></ModalityFilter>
                    <Divider mt="4" />
                    <FormLabel mt="4">Tipo de vaga</FormLabel>
                    <JobTypeFilter></JobTypeFilter>
                </CardBody>
            </Card>
        </Box >
    );
};


export default Sidebar;
