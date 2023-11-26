import { Badge, Box, Card, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface JobCardProps {
    logo: string;
    title: string;
    company: string;
    jobType: string;
    city: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, title, company, jobType, city }) => {
    return (
        <>
            <Flex w="full" justifyContent="center" >
                <Flex px={{ base: 2, md: 8 }} w='6xl' justifyContent="center" mt={4} direction={{ base: 'column', md: 'row' }}  >
                    <Card height="full" variant="outline" boxShadow="sm" minW={{ base: 'none', md: 'sm' }} maxW="sm" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} pl="0" pt="0" pb="0" data-renderer="Card">
                        <Flex w="full">
                            <Image justifyContent={"center"} minH="full" src={logo} boxSize={24} borderTopLeftRadius={8} borderBottomLeftRadius={8} />
                            <Flex direction="column" px={4} py={4} justifyContent="center">
                                <Text fontSize="14px" fontWeight="semibold">{title}</Text>
                                <Text fontSize="12px" color="gray.600">{company}</Text>
                                <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center">
                                    <Text fontSize="xs" color="gray.500" textAlign="left">{city}</Text>
                                    <Badge colorScheme="blue" size="xs" textAlign="right">{jobType}</Badge>
                                </Grid>
                            </Flex>
                        </Flex>
                    </Card>

                </Flex>
            </Flex>
        </>
    );
};

const App = () => {
    const jobData = [
        {
            logo: "https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2022/01/Timenow.png",
            title: "Pessoa Analista de Remuneração",
            company: "Timenow",
            jobType: "Efetivo",
            city: "Vitória"
        },
        {
            logo: "https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2023/02/Animale.png",
            title: "Assistente Administrativo Financeiro I",
            company: "Animale",
            jobType: "Estágio",
            city: "Serra"
        },
        {
            logo: "https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2022/06/Lince-Humanizacao.png",
            title: "Auxiliar Operacional",
            company: "Lince Humanização",
            jobType: "Estágio",
            city: "Serra"
        },
        {
            logo: "https://i0.wp.com/maisvagases.com.br/wp-content/uploads/2023/06/Valoren.png",
            title: "Estágio Planejamento e Controle da Manutenção",
            company: "Grupo Águia Branca",
            jobType: "Estágio",
            city: "Vila Velha"
        }
    ];

    return (
        <Box>
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    logo={job.logo}
                    title={job.title}
                    company={job.company}
                    jobType={job.jobType}
                    city={job.city}
                />
            ))}
        </Box>
    );
};

export default App;