import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LayoutInnerContainer = styled.div`
  width: 360px;
  height: 640px;
  background-color: #f1f6fa;
`;

const Layout = ({ children }: Props) => (
  <LayoutContainer>
    <LayoutInnerContainer>
      <Head>
        <title>취향의 하루</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </LayoutInnerContainer>
  </LayoutContainer>
);

export default Layout;
