import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/state';
import { useCallback } from 'react';

interface Props {
    collapsed: boolean;
}

export const Logo = ({ collapsed }: Props) => {
    const logoDesktop = '/logo.svg';
    const dispatch = useDispatch();
    const clearFilters = useCallback(() => {
        dispatch(setFilter({
            tipo: '',
            categoria: '',
            cidade: '',
            texto: ''
        }));
    }, [dispatch]);
    return (
        <Link href='/' onClick={clearFilters}>
            <Box>
                <Image
                    width={[200, 286]}
                    height={[20, 77]}
                    alt="Imóveis Santa Teresa"
                    src={logoDesktop}
                />
            </Box>
        </Link>
    );
};