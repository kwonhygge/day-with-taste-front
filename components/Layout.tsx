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
  height: 100%;
  @media only screen and (min-height: 812px) {
    height: 100vh;
  }

  ${({ backgroundColor }) => {
    if (backgroundColor === 'blue')
      return css`
        background-image: url('/img/BackgroundNight.jpg');
        background-position: center;
        background-size: cover;
      `;
    return css`
      background-image: url('/img/BackgroundDay.jpg');
      background-position: center;
      background-size: cover;
    `;
  }}
`;

const LayoutInnerContainer = styled.div<{ backgroundColor?: string }>`
  height: 812px;
  width: 360px;

  @media only screen and (max-height: 812px) {
    height: 100vh;
  }
  @media only screen and (max-height: 480px) {
    height: 100%;
  }
  @media only screen and (max-width: 414px) {
    width: 100vw;
  }

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
