import React from 'react';
import styled from 'styled-components';

export type PrimaryTextProps = React.HTMLAttributes<HTMLElement> & {
  color?: 'primary' | 'white';
  children: string | string[];
};

const Container = styled.p<{ color: 'primary' | 'white' }>`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: normal;
  white-space: pre-line;
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.primaryBlue : '#fff'};
`;

const PrimaryText: React.FC<PrimaryTextProps> = (props) => {
  const { color = 'primary', children, className } = props;
  return (
    <Container {...props} className={className} color={color}>
      {children}
    </Container>
  );
};

export default PrimaryText;
