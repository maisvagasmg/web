import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import JobCard from "../components/JobCard/JobCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Vagas() {
    const [load, setLoad] = useState<boolean>(true)
    const [vaga, setVaga] = useState<any[]>([])

    async function loadJobs() {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?fields=slug,cargo.Cargo,companies.Empresa,Contract,cidade.Cidades_id.cidade,pcd,quantidade,companies.Logo.filename_disk&status=published&sort=-date_updated`)
        //@ts-ignore
        setVaga(response?.data?.data)
    }

    useEffect(() => {
        if (load) {
            loadJobs()
        }
    }, [load])

    return (
        <>
            <PageTitle>Vagas</PageTitle>

            <Flex w="full" direction="column"  >
                <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={8} borderBottomRightRadius={8} borderWidth={1} borderColor="gray.200">
                    <Flex direction={'column'} py={4} px={4} justifyContent="center" >
                        <Flex justifyContent={'center'} gap={4} direction={'column'}>
                            <Text fontWeight={'bold'} fontSize='xl' textAlign={'center'} color="blue.700">Vagas ({vaga.length}) </Text>
                            <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'} color="gray.500">Confira todas as vagas disponiveis no site. As melhores oportunidades estão aqui.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <JobCard jobData={vaga} />
            <Footer />
        </>
    );
}
