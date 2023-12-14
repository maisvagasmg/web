import { Badge, Card, Flex, Grid, Image, SimpleGrid, Text, Link, CardFooter, Divider, Icon } from '@chakra-ui/react';
import { SuitcaseSimple, Wheelchair } from '@phosphor-icons/react';
import React from 'react';

interface JobCardProps {
    logo: string;
    title: string;
    company: string;
    jobType: string;
    city: string;
    slug: string;
    quantidade: number;
    pcd: string;
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

export const JobCard: React.FC<JobCardProps> = ({ logo, title, company, jobType, city, slug, quantidade, pcd }) => {
    return (
        <>
            <Flex w="full" justifyContent="center">
                <Flex px={{ base: 4, md: 8 }} w='6xl' justifyContent="center" direction={{ base: 'column', md: 'row' }} minW="full">
                    <Link href={`/vaga/${slug}`} target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }} minW="full">
                        <Card height="full" variant="outline" boxShadow="sm" width="full" minW="full" rounded={8} borderTopLeftRadius={8} borderBottomLeftRadius={8} overflow="hidden" transition="transform 0.3s" _hover={{ transform: "scale(1.05)" }} className="mobile-card" >
                            <Flex w="full" minW="full">
                                <Image justifyContent={"center"} minH="full" src={process.env.NEXT_PUBLIC_IMAGE_URL + logo} boxSize={28} borderTopLeftRadius={8} borderBottomLeftRadius={0} objectFit="cover" />
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
                            <Divider w="full" />
                            <CardFooter p={4}>
                                <Flex gap={2} w="full" justifyContent="space-between">
                                    <Flex justifyContent="space-between">
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={5} color='purple.500' as={SuitcaseSimple} />
                                            <Text fontWeight='semibold' fontSize="sm">Quantidade:</Text>
                                        </Flex>
                                        <Text ml={2}>{quantidade ? quantidade.toString().padStart(2, '0') : 'Não informado'}</Text>
                                    </Flex>

                                    <Flex justifyContent="space-between">
                                        <Flex align="center" gap={1}>
                                            <Icon boxSize={5} color='teal.500' as={Wheelchair} />
                                            <Text fontSize="sm">
                                                {pcd}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </CardFooter>
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
                    quantidade={job.quantidade}
                    pcd={job.pcd}
                />
            ))}
        </SimpleGrid>
    );
};

export default Jobs;