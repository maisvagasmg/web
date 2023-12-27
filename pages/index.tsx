import HomeCards from "@/components/HomeCards/HomeCards";
import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import JobCard from "../components/JobCard/JobCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Index() {
  <link rel="icon" href="/favicon.ico" />

  const [load, setLoad] = useState<boolean>(true)
  const [vaga, setVaga] = useState<any[]>([])
  const [vagasHoje, setVagasHoje] = useState<number>(0); // Adicione essa variável de estado
  useEffect(() => {
    if (load) {
      loadJobs();
    }
  }, [load]);

  useEffect(() => {
    // Use a função filter para obter apenas as vagas publicadas hoje
    const vagasPublicadasHoje = vaga.filter((vaga) => {
      const dataAtual = new Date();
      const dataVaga = new Date(vaga.date_updated);
      return dataVaga.toDateString() === dataAtual.toDateString();
    });

    setVagasHoje(vagasPublicadasHoje.length);
  }, [vaga]);

  async function loadJobs() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?fields=slug,cargos,company.Empresa,Contract,cidade.Cidades_id.cidade,company.Logo.filename_disk,date_updated,quantidade,pcd&sort=-date_updated`)
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
      <PageTitle excludePrefix >Mais Vagas MG</PageTitle>
      <Hero />
      <HomeCards />
      <Flex w="full" justifyContent="center">
        <Flex w="7xl" justifyContent='space-between' alignItems="center" p={[2, 2, 8]} px={[4, 4, 8]}>
          <Flex direction="column" >
            <Text fontWeight="bold" fontSize="xl" >Vagas recentes</Text>
            <Text fontWeight="light" fontSize="sm">{vagasHoje} vagas adicionadas hoje</Text>
          </Flex>
          <Button as={'a'} href={'/vagas'} size="sm" variant="outline" rightIcon={<Icon as={ArrowUpRight} />}>Todas as vagas</Button>
        </Flex>
      </Flex>
      <JobCard jobData={vaga} />
      <Footer />
    </>
  );
}
