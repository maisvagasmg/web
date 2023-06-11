import { Button, Flex, Input, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { HiAdjustments } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { getFilter, setFilter } from "../../store/state"
import { useRouter } from "next/router"


export const HeaderFilter = ({ direction = 'row', cidades }: any) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const router = useRouter();
  const [tipo, setTipo] = useState(router?.query?.tipo);
  const [categoria, setCategoria] = useState('');
  const [cidade, setCidade] = useState('');
  const [texto, setTexto] = useState('');
  const handleFilter = (e: any) => {
    e?.preventDefault();
    dispatch(setFilter({
      tipo, categoria, cidade, texto
    }));
    router.push('/');
  };
  useEffect(() => {
    if (filter) {
      setTipo(tipo || filter.tipo);
      setCategoria(filter.categoria);
      setCidade(filter.cidade);
      setTexto(filter.texto);
    }
  }, [filter]);
  return (
    <Flex bg='gray.700' justify='center'>
      <form onSubmit={handleFilter}>
        <Flex maxW='6xl' w={['xs', 'sm', 'full']} gap='4' p='3' direction={direction}>
          <Select bg='gray.600' value={tipo} onChange={(e) => setTipo(e?.target?.value)} variant='solid' color='white'>
            <option value=''>Qualquer Tipo</option>
            <option value='Comprar'>Comprar</option>
            <option value='Alugar'>Alugar</option>
          </Select>
          <Select bg='gray.600' value={categoria} onChange={(e) => setCategoria(e?.target?.value)} variant='solid' color='white'>
            <option value=''>Todas Categorias</option>
            <option value='Apartamento'>Apartamento</option>
            <option value='Casa'>Casa</option>
            <option value='Chácara'>Chácara</option>
            <option value='Fazenda'>Fazenda</option>
            <option value='Lote'>Lote</option>
            <option value='Sítio'>Sítio</option>
            <option value='Terreno'>Terreno</option>
            <option value='Outro'>Outro</option>
          </Select>
          <Select bg='gray.600' value={cidade} onChange={(e) => setCidade(e?.target?.value)} variant='solid' color='white'>
            <option value=''>Todas Cidades</option>
            {cidades?.map((cidade: any) => (
              <option key={cidade?.id} value={cidade?.id}>
                {cidade?.name}
              </option>
            ))}
          </Select>
          <Input
            bg='gray.600'
            variant='solid'
            value={texto}
            onChange={(e) => setTexto(e?.target?.value)}
            color='white'
            placeholder='Procurar por...'
          ></Input>
          <Button
            type='submit'
            w={['full', 'full', '96']}
            bg='orange.200'
            leftIcon={<HiAdjustments />}
          >
            Filtrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};