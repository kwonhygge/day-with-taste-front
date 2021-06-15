import React from 'react';
import styled, { css } from 'styled-components';

export type CircleProps = React.HTMLAttributes<HTMLElement> & {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: 'lightBlue' | 'orange' | 'blue' | 'yellow' | 'skyBlue';
  icon?: React.ReactNode;
  clickable?: boolean;
  noShadow?: boolean;
  onClick?: (event: any) => void;
};

const CircleIcon = styled.div<{
  backgroundColor?: 'lightBlue' | 'orange' | 'blue' | 'yellow' | 'skyBlue';
  size?: 'small' | 'medium' | 'large';
  clickable?: boolean;
  noShadow: boolean;
}>`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ noShadow }) =>
    noShadow
      ? ''
      : '0px 2px 8px rgba(10, 13, 37, 0.2), 0px 6px 16px rgba(10, 13, 37, 0.2)'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor !== undefined
      ? theme.colors[backgroundColor]
      : theme.colors.orange};
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
  border-radius: 50%;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')};
`;

const Circle: React.FC<CircleProps> = (props) => {
  const {
    size,
    backgroundColor,
    icon,
    clickable,
    onClick,
    noShadow = false,
  } = props;
  return (
    <CircleIcon
      backgroundColor={backgroundColor}
      size={size}
      clickable={clickable}
      noShadow={noShadow}
      {...props}>
      <span onClick={(event) => onClick && onClick(event)}>{icon}</span>
    </CircleIcon>
  );
};

export default Circle;
