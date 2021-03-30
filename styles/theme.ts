import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  //  기본 타이틀 사이즈
  titleSize: calcRem(24),

  // 크기별 분류
  xSmall: calcRem(13),
  small: calcRem(14),
  base: calcRem(16),
  large: calcRem(18),
  xLarge: calcRem(32),
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
