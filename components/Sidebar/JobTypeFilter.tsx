import { Checkbox, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';

const filterOptions: string[] = [ // Adicione o tipo string
    'Efetivo-CLT',
    'PCD',
    'Aprendiz',
    'Estágio',
    'Temporário',
    'PJ',
];

const FilterOptions = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // Adicione o tipo string

    const handleOptionChange = (option: string) => { // Adicione o tipo string
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((o) => o !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <SimpleGrid columns={2} spacing={4}>
            {filterOptions.map((option: string) => ( // Adicione o tipo string
                <Checkbox
                    key={option}
                    isChecked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                >
                    {option}
                </Checkbox>
            ))}
        </SimpleGrid>
    );
};

export default FilterOptions;