import React, { HTMLAttributes, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

type Props = {
  color?: 'white' | 'blue';
  children?: ReactNode;
};

type LayoutProps = Props & HTMLAttributes<HTMLDivElement>;

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  //TODO: Loading을 페이지마다 전역적으로 적용할 수 있는 방법이 있을까요? 어렵습니다..
  const { loading } = useSelector((state: RootState) => state.songs);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <LayoutContainer>
      <LayoutInnerContainer backgroundColor={color} {...props}>
        <Head>
          <title>취향의 하루</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {loading && (
          <div style={{ position: 'fixed', zIndex: 5000, left: '50%' }}>
            Loading
          </div>
        )}
        {children}
      </LayoutInnerContainer>
    </LayoutContainer>
  );
};

export default Layout;
