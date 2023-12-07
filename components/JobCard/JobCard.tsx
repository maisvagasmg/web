import { Badge, Card, Flex, Grid, Image, SimpleGrid, Text, Link } from '@chakra-ui/react';
import React from 'react';

interface JobCardProps {
    logo: string;
    title: string;
    company: string;
    jobType: string;
    city: string;
    slug: string;
}
interface JobProps {
    jobData: any[];
}

const contractColorSchemes = {
    efetivo: 'green',
    estagio: 'blue',
    aprendiz: 'purple',
    pj: 'orange',
    temporario: 'red',
};

const JobCard: React.FC<JobCardProps> = ({ logo, title, company, jobType, city, slug }) => {
    return (
        <>
            <Flex w="full" justifyContent="center">
                <Flex px={{ base: 4, md: 8 }} w='6xl' justifyContent="center" direction={{ base: 'column', md: 'row' }} minW="full">
                    <Link href={`/vaga/${slug}`} target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }} minW="full">
                        <Card height="full" variant="outline" boxShadow="sm" width="full" minW="full" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} overflow="hidden" transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card">
                            <Flex w="full" minW="full">
                                <Image justifyContent={"center"} minH="full" src={process.env.NEXT_PUBLIC_IMAGE_URL + logo} boxSize={28} borderTopLeftRadius={8} borderBottomLeftRadius={8} objectFit="cover" />
                                <Flex direction="column" px={4} py={4} justifyContent="space-between" w="full">
                                    <Text minH={11} fontWeight={'semibold'} fontSize='sm' color="blue.800" wordBreak={'break-all'} display={'-webkit-box'} textOverflow={'ellipsis'} overflow={'hidden'} style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{title}</Text>
                                    <Flex direction="column" w="full">
                                        <Text fontSize="xs" color="gray.600">{company}</Text>
                                        <Grid templateColumns="1fr min-content" columnGap={2} alignItems="center" w="full">
                                            <Text fontSize="xs" color="gray.500" textAlign="left">{city}</Text>
                                            <Badge colorScheme={contractColorSchemes[jobType]} size="xs" textAlign="right">{jobType}</Badge>
                                        </Grid>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
};

const Jobs: React.FC<JobProps> = ({ jobData }) => {
    const getCities = (job: any) => {
        const cities = [];
        job.cidade.forEach((city: any) => {
            cities.push(city.Cidades_id.cidade);
        });
        return cities.join(', ');
    }

    return (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} maxW="7xl" mx="auto" py={8} >
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    logo={job.company.Logo.filename_disk}
                    title={job.cargos}
                    company={job.company.Empresa}
                    jobType={job.Contract}
                    city={getCities(job)}
                    slug={job.slug}
                />
            ))}
        </SimpleGrid>
    );
};

export default Jobs;