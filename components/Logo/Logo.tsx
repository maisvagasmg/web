import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
    collapsed: boolean;
}

export const Logo = () => {
    const logoDesktop = '/logo.svg';
    return (
        <Link href='/'>
            <Box>
                <Image
                    src={logoDesktop}
                />
            </Box>
        </Link>
    );
};