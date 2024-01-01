import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import JobHeader from "../../components/JobHeader/JobHeader";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export default function Index() {
  const { slug } = useRouter().query;
  const [vaga, setVaga] = useState<undefined | any>(undefined);
  const [isLoaded, setIsLoaded] = useState(false)

  async function loadVaga() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?filter[slug][_eq]=${slug}&fields=*.*.*.*`);
    //@ts-ignore
    setVaga(response?.data?.data[0]);
    setIsLoaded(true)
  }

  useEffect(() => {
    if (slug) {
      loadVaga();
    }
  }, [slug]);

  return (
    <>
      <PageTitle excludePrefix>{vaga?.cargo.Cargo}</PageTitle>
      <JobHeader data={vaga} isLoaded={isLoaded} />
    </>
  );
}