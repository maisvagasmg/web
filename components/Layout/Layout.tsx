import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import JobCard from "../JobCard/JobCard";
import SearchBar from "../Searchbar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Hero />
      <Flex>
        <Sidebar />
        <Flex flexDirection="column">
          <SearchBar />
          <JobCard />
          {children}
        </Flex>
      </Flex>
    </>
  );
}
