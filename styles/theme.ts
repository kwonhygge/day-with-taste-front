import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  // colors: {
  //     black: '#1e1f1d',
  //     yellow: '#edb83c',
  //     orange: '#eb7952',
  //     gray: '#6e6e6e',
  //     gray_background: '#f5f5f5',
  // },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  // 미디어 쿼리 정의
};
