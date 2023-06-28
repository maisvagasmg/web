import { Box, Button, Flex, Icon, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  const handleSearch = () => {
    // Lógica para lidar com a pesquisa
  };

  return (
    <Box bg="white" py={4} px={8} borderRadius="4" borderColor="gray.100">
      <Flex gap="4" justifyContent="space-between" alignItems="center">
        <InputGroup minW="70%">
          <InputLeftElement pointerEvents='none'>
            <Icon as={AiOutlineSearch} color='gray.300' />
          </InputLeftElement>
          <Input type='search' placeholder='Nome da vaga ou cargo' />
        </InputGroup>
        <Select placeholder="Cidade" minW="50%">
          <option value="cidade1">Cidade 1</option>
          <option value="cidade2">Cidade 2</option>
          <option value="cidade3">Cidade 3</option>
          {/* Adicione mais opções de cidades conforme necessário */}
        </Select>
        <Button variant="outline" minW="190px" colorScheme="blue" onClick={handleSearch}>
          Encontrar vagas
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchBar;
