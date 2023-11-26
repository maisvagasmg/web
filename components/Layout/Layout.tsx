import { Flex, Heading } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Hero } from "../Hero/Hero";
import JobCard from "../JobCard/JobCard";
import JobInfo from "../JobInfo/JobInfo";
import JobHeader from "../JobHeader/JobHeader";
import Company from "../Company/Company";
import Companies from "../Companies/Companies";
import Positions from "../Positions/Positions";


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex direction='column' h="100%" textColor='gray.700'>
        <Flex h="100%" position='relative'>
          <Flex overflowY='auto' w="full" >
            <Flex flexDir="column" overflowY='auto' w="full">
              <Header />
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
