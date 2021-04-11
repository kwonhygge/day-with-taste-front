import { DefaultTheme } from 'styled-components';

const fontSizes = {
  //  기본 타이틀 사이즈
  titleSize: '24px',

  // 크기별 분류
  xSmall: '12px',
  small: '14px',
  base: '16px',
  large: '18px',
  xLarge: '32px',
};

const colors = {
  primaryBlue: '#427D96',
  lightBlue: '#E4EDF2',
  orange: '#FF844B',
  gray: '#C4C4C4',
  lightGray: '#F5F5F5',
};

//TODO margin & padding도 설정

export const theme: DefaultTheme = {
  fontSizes,
  colors,
};

export const media = {
  // 미디어 쿼리 정의
};
