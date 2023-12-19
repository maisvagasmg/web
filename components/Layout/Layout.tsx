import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Script from 'next/script';
import WhatsApp from "../WhatsApp/WhatsApp";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex direction='column' h="100%" textColor='gray.700'>
        <Flex h="100%" position='relative'>
          <Flex overflowY='auto' w="full" >
            <Flex flexDir="column" overflowY='auto' w="full">
              <Header />
              <WhatsApp />
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Script dangerouslySetInnerHTML={{
        __html: `
        (function(c,l,a,r,i,t,y){
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "k7j0w3wxgc");
    `}}
      />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R93E579BYE"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-R93E579BYE');
        `}
      </Script>

    </>
  );
}
