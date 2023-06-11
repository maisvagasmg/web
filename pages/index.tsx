import { Box, Flex } from "@chakra-ui/react";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default function Index() {
  return (
    <>
      <PageTitle excludePrefix>Imóveis Santa Teresa</PageTitle>
      <Box>
        <Flex direction='column' w='full' align='center' py={[4, 8, 10]}>
        </Flex>
      </Box>
    </>
  );
}
