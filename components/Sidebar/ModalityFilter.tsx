import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';

const filterOptions = [
    'Presencial',
    'Home office (Remoto)',
    'Híbrido',
];

const ModalityFilter = () => {
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

export default ModalityFilter;