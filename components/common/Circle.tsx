import React from 'react';
import styled, { css } from 'styled-components';

export type CircleProps = React.HTMLAttributes<HTMLElement> & {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: 'lightBlue' | 'orange';
  icon?: React.ReactNode;
  clickable?: boolean;
  onClick?: (event: any) => void;
};

const Circle: React.FC<CircleProps> = (props) => {
  const { size, backgroundColor, icon, clickable, onClick } = props;
  return (
    <CircleIcon
      backgroundColor={backgroundColor}
      size={size}
      clickable={clickable}
      {...props}>
      <span onClick={(event) => onClick && onClick(event)}>{icon}</span>
    </CircleIcon>
  );
};

const CircleIcon = styled.div<{
  backgroundColor?: 'lightBlue' | 'orange';
  size?: 'small' | 'medium' | 'large';
  clickable?: boolean;
}>`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  ${({ size }) => {
    if (size === 'small')
      return css`
        width: 32px;
        height: 32px;
      `;
    if (size === 'medium')
      return css`
        width: 72px;
        height: 72px;
      `;
    if (size === 'large')
      return css`
        width: 110px;
        height: 110px;
      `;
  }}
  ${({ theme, backgroundColor }) => {
    if (backgroundColor === 'lightBlue')
      return css`
        background-color: ${theme.colors.lightBlue};
      `;
    if (backgroundColor === 'orange')
      return css`
        background-color: ${theme.colors.orange};
      `;
  }}
  border-radius: 50%;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')};
`;

export default Circle;
