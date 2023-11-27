import { Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import JobCard from "../components/JobCard/JobCard";

export default function Vagas() {
    return (
        <>
            <Flex w="full" direction="column"  >
                <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                    <Flex direction={'column'} py={4} px={4} justifyContent="center" >
                        <Flex justifyContent={'center'} >
                            <Text fontWeight={'bold'} fontSize='xl' color="blue.700">Todas as vagas (322)
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <JobCard />
            <Footer />
        </>
    );
}
