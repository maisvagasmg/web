import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';

const filterOptions = [
    'Hoje',
    'Ontem',
    'Últimos 3 dias',
    'Últimos 7 dias',
    'Últimos 14 dias',
];

const PostPeriodFilter = () => {
    const [selectedOption, setSelectedOption] = useState(filterOptions[0]); // Estado para armazenar a opção selecionada

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // Adicione o tipo ChangeEvent<HTMLSelectElement>
        setSelectedOption(event.target.value); // Atualiza o estado com a opção selecionada
    };

    return (
        <Select value={selectedOption} onChange={handleOptionChange}>
            {filterOptions.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </Select>
    );
};

export default PostPeriodFilter;