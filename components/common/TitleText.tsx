import React from 'react';
import styled from 'styled-components';

export type TitleTextProps = React.HTMLAttributes<HTMLElement> & {
  color?: 'primary' | 'white';
  children: string;
};

const Container = styled.div<{ color: 'primary' | 'white' }>`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  white-space: pre-line;
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.primaryBlue : '#fff'};
`;

const TitleText: React.FC<TitleTextProps> = ({
  className,
  color = 'primary',
  children,
}) => {
  return (
    <Container className={className} color={color}>
      {children}
    </Container>
  );
};

export default TitleText;
