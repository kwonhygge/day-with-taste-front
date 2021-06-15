import React from 'react';
import styled from 'styled-components';

export type SecondaryTextProps = React.HTMLAttributes<HTMLElement> & {
  children: string | string[];
};

const Container = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  white-space: pre-line;
`;

const SecondaryText: React.FC<SecondaryTextProps> = (props) => {
  const { children, className } = props;
  return (
    <Container {...props} className={className}>
      {children}
    </Container>
  );
};

export default SecondaryText;
