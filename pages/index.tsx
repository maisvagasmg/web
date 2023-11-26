import { Heading } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import JobCard from "../components/JobCard/JobCard";

export default function Index() {
  return (
    <>
      <Hero />
      <Heading size="lg" color="gray.600" textAlign={"center"} py={8}>🌟 Vagas recentes</Heading>
      <JobCard />
      <Footer />
    </>
  );
}
