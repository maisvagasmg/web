import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { Sora } from '@next/font/google'
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from '../components/Layout/Layout';
import { theme } from '../components/theme';
import { persistor, store } from "../store/store";
import '../styles/globals.css';

const sora = Sora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

function App({ Component, pageProps }: AppProps) {
  return (<React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <main className={sora.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ChakraProvider>
      </PersistGate>
    </Provider>
    <Analytics />
  </React.StrictMode>

  )
}

export default App;