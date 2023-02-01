import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  AppShell,
  Container,
  Grid,
  Header,
  Navbar,
  ScrollArea,
} from '@mantine/core';
import { Navigation } from './Navigation';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        href="https://vaulthunters.gg/assets/vh-logo-sm.3382d4ce.png"
      />
    </Head>
    <main>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/hero-bg.62542c9a.png"
          fill
          style={{ objectFit: 'cover' }}
          alt="hero"
        />
      </div>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 200 }} height={'100%'} p="xs" bg="transparent">
            <Navbar.Section
              mt="xs"
              mb="xs"
              display="flex"
              sx={{
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h1>GEAR</h1>
              <Image
                src="/assets/vh-logo-lg.png"
                width={150}
                height={100}
                alt="logo"
              />
            </Navbar.Section>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
              <Navigation />
            </Navbar.Section>
          </Navbar>
        }
      >
        {children}
      </AppShell>
    </main>
  </>
);

export default Layout
