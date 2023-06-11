import {
  Flex, Skeleton
} from "@chakra-ui/react";
import { ItemDescription } from "../../components/ItemDescription/ItemDescription";
import { ItemInfo } from "../../components/ItemInfo/ItemInfo"; 
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { ErrorPage } from "../ErrorPage";
import { Gallery } from "../Gallery/Gallery";
import { NotFound } from "../NotFound";
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../../components/Map/Map"), { ssr: false })

interface Props {
  loading: boolean
  error: boolean
  imovel: any
}

export const PageContent = ({ loading, error, imovel }: Props) => {
  if (loading) {
    return (
      <Flex gap='4' w='full' direction={{ base: 'column-reverse', md: 'row' }}>
        <Flex gap='4' direction='column' w={{ base: 'full', md: '350px' }}>
          <Skeleton mt='2' rounded='md' h='80' />
          <Skeleton mt='2' rounded='md' h='40' />
        </Flex>
        <Flex w='full' direction='column' gap='4'>
          <Skeleton w='full' rounded='md' h='400px' />
          <Skeleton w='full' rounded='md' h='100px' />
        </Flex>
      </Flex>
    );
  }
  if (error) {
    return <ErrorPage />;
  }
  if (!imovel) {
    return <NotFound />;
  }
  return (
    <Flex direction='column' gap='4'>
      <Flex gap='4' w='full' direction={{ base: 'column-reverse', md: 'row' }}>
        <Flex direction='column' gap='4' w={{ base: 'full', md: '350px' }}>
          <ItemInfo content={imovel} loading={loading} />
          <UserInfo loading={loading} />
        </Flex>
        <Flex direction='column' w='full' gap='4'>
          <Gallery imagens={imovel?.imagens} />
          {imovel.endereco ? (
            <Map loading={loading} address={imovel.endereco} />
          ) : (
            <ItemDescription descricao={imovel?.descricao} />
          )}
        </Flex>
      </Flex>
      {imovel.endereco && (
        <ItemDescription descricao={imovel?.descricao} />
      )}
    </Flex>
  );
};
