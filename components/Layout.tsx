import React, { HTMLAttributes, ReactNode } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';

type Props = {
  color?: 'white' | 'blue';
  children?: ReactNode;
};

type LayoutProps = Props & HTMLAttributes<HTMLDivElement>;

const LayoutContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  ${({ backgroundColor, theme }) => {
    if (backgroundColor === 'white')
      return css`
        background-color: #fff;
      `;
    if (backgroundColor === 'blue')
      return css`
        background-color: ${theme.colors.primaryBlue};
      `;
    return css`
      background-color: #f1f6fa;
    `;
  }}
`;

const LayoutInnerContainer = styled.div<{ backgroundColor?: string }>`
  width: 360px;
  height: 95%;
  ${({ backgroundColor, theme }) => {
    if (backgroundColor === 'white')
      return css`
        background-color: #fff;
      `;
    if (backgroundColor === 'blue')
      return css`
        background-color: ${theme.colors.primaryBlue};
      `;
    return css`
      background-color: #f1f6fa;
    `;
  }}
`;

const Layout = (props: LayoutProps) => {
  const { children, color } = props;

  return (
    <LayoutContainer backgroundColor={color}>
      <LayoutInnerContainer backgroundColor={color} {...props}>
        <Head>
          <title>취향의 하루</title>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {children}
      </LayoutInnerContainer>
    </LayoutContainer>
  );
};

export default Layout;
