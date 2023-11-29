import { Badge, Card, Flex, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
                <Flex px={{ base: 4, md: 8 }} w='6xl' justifyContent="center" direction={{ base: 'column', md: 'row' }}  >
                    <Card height="full" variant="outline" boxShadow="sm" w="full" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} overflow="hidden" transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                        <Flex w="full">
                            <Image justifyContent={"center"} minH="full" src={logo} boxSize={28} borderTopLeftRadius={8} borderBottomLeftRadius={8} objectFit="cover" />
                            <Flex direction="column" px={4} py={4} justifyContent="space-between" w="full">
                                <Text minH={11} fontWeight={'semibold'} fontSize='sm' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{title}</Text>
                                <Flex direction="column" w="full">
                                    <Text fontSize="12px" color="gray.600">{company}</Text>
                                    <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center" w="full">
                                        <Text fontSize="xs" color="gray.500" textAlign="left">{city}</Text>
                                        <Badge colorScheme="blue" size="xs" textAlign="right">{jobType}</Badge>
                                    </Grid>
                                </Flex>
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
            title: "Pessoa Analista de Remuneração - Recrutamento e Seleção",
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
        <SimpleGrid columns={[1, 1, 2]} spacing={4} maxW="7xl" mx="auto" py={8}>
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
        </SimpleGrid>
    );
};

export default App;