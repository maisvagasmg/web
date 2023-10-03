import { Heading } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Hero } from "../Hero/Hero";
import JobCard from "../JobCard/JobCard";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Hero />
      <Heading size="lg" color="gray.600" textAlign={"center"} py={8}>🌟 Vagas recentes</Heading>
      <JobCard />
      <Footer />

    </>
  );
}
