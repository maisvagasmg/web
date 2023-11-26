'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface PageTitleProps {
  children?: String;
  excludePrefix?: boolean;
}

export const PageTitle = ({ children, excludePrefix = false }: PageTitleProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) {
    return null;
  }
  const title = excludePrefix ? children : `${children} - Mais Vagas ES`;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}