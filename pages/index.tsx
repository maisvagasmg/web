import HomeCards from "@/components/HomeCards/HomeCards";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import JobCard from "../components/JobCard/JobCard";

export default function Index() {
  const [load, setLoad] = useState<boolean>(true)
  const [vaga, setVaga] = useState<any[]>([])

  async function loadJobs() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?fields=slug,cargos,company.Empresa,Contract,cidade.Cidades_id.cidade,company.Logo.filename_disk`)
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
      <Hero />
      <HomeCards />
      <Heading size="lg" color="gray.600" textAlign={"center"} py={8}>🌟 Vagas recentes</Heading>
      <JobCard jobData={vaga} />
      <Footer />
    </>
  );
}
