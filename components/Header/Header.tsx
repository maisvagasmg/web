import {
  Box, Button, Collapse, Flex, Hide, Icon, IconButton, Link,
  Popover, PopoverContent, PopoverTrigger, Show, Stack, Text, useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import {
  HiChevronDown as ChevronDownIcon,
  HiChevronRight as ChevronRightIcon,
  HiX as CloseIcon,
  HiMenu as HamburgerIcon
} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/state';
import { HeaderFilter } from '../HeaderFilter/HeaderFilter';
import { Logo } from '../Logo/Logo';


const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Quero Comprar',
    href: '/#Comprar',
  },
  {
    label: 'Quero Alugar',
    href: '/#Alugar',
  },
  {
    label: 'Quero Vender',
    href: '/contato',
  },
];

export function Header({ cidades }: any) {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch()

  const handleFilter = (tipo: any) => {
    let page = tipo.replace('/#', '')

    if (['Comprar', 'Alugar'].includes(page)) {
      dispatch(setFilter({
        tipo: page, categoria: '', cidade: '', texto: ''
      }))
    }
  }

  return (
    <Flex direction='column'
      align='center'
      borderBottom={1}
      borderStyle={'solid'}
      borderColor='gray.600'
      bg='gray.700'
      px={[2, 2, 0]}
    >
      <Flex
        minH='60px'
        maxW='6xl'
        w='full'
        gap='4'
        justify='center'
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            color='gray.700'
            bg='orange.200'
            icon={
              isOpen ? <Icon as={CloseIcon} w={3} h={3} /> : <Icon as={HamburgerIcon} w={5} h={5} />
            }
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          w='full'
          align='center'
          justify={{ base: 'center', md: 'space-between' }}>
          <Logo collapsed={false} />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav handleFilter={handleFilter} />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Show above='md'>
              <Button
                as={'a'} 
                fontWeight={600}
                leftIcon={<BsWhatsapp />}
                colorScheme='whatsapp'
                target='_blank'
                href={'https://api.whatsapp.com/send?phone=5527998430059'}> Entrar em contato
              </Button>
            </Show>
            <Hide above='md'>
              <IconButton
                size={'md'}
                as='a'
                aria-label='Falar com consultor'
                fontWeight={600}
                icon={<BsWhatsapp />}
                colorScheme='whatsapp'
                target='_blank'
                href={'https://api.whatsapp.com/send?phone=5527998430059'}>
              </IconButton>
            </Hide>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav cidades={cidades}/>
      </Collapse>
    </Flex>
  );
}

const DesktopNav = ({ handleFilter }: any) => {
  const linkColor = 'orange.50';
  const linkHoverColor = 'orange.200';
  const popoverContentBgColor = 'orange.50';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                onClick={() => { handleFilter(navItem.href) }}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, handleFilter }: NavItem) => {
  return (
    <Link
      as={NextLink}
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'pink.50' }} >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link >
  );
};

const MobileNav = ({cidades}:any) => {
  return (<>
    <Flex direction='column' gap={2} align='center'
      color='orange.50'
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Flex>
    <Show below='md'><HeaderFilter cidades={cidades} direction='column' /></Show>
  </>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex textAlign='center' justify='center' gap={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color='orange.200'>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor='gray.200'
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link as={NextLink} key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  filter?: string;
  handleFilter?:any
}
