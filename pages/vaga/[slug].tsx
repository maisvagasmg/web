import JobHeader from "../../components/JobHeader/JobHeader";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const { slug } = useRouter().query;
  const [vaga, setVaga] = useState<undefined | any>(undefined);

  async function loadVaga() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/items/Vagas/?filter[slug][_eq]=${slug}&fields=*.*.*.*`);
    //@ts-ignore
    setVaga(response?.data?.data[0]);
  }

  useEffect(() => {
    if (slug) {
      loadVaga();
    }
  }, [slug]);

  return (
    <>
      <PageTitle excludePrefix>{vaga?.cargo.Cargo}</PageTitle>
      <JobHeader data={vaga} />
    </>
  );
}