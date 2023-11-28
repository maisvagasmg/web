import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import JobCard from "../components/JobCard/JobCard";

export default function Vagas() {
    return (
        <>
            <Flex w="full" direction="column"  >
                <Flex direction="column" bg="gray.50" py={4} borderBottomLeftRadius={24} borderBottomRightRadius={24} borderWidth={1} borderColor="gray.200">
                    <Flex direction={'column'} py={4} px={4} justifyContent="center" >
                        <Flex justifyContent={'center'} gap={4} direction={'column'}>
                            <Text fontWeight={'bold'} fontSize='xl' textAlign={'center'} color="blue.700">Vagas (1269)
                            </Text>
                            <Text fontSize={['sm', 'sm', 'md']} textAlign={'center'} color="gray.500">Confira todas as vagas disponiveis no site. As melhores oportunidades estão aqui.
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
