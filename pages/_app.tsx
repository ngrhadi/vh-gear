import { MantineProvider } from '@mantine/core';
import '../public/styles/global.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      // withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
