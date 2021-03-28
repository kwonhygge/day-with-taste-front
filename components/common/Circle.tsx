import React from 'react';
import styled, { css } from 'styled-components';

export type CircleProps = React.HTMLAttributes<HTMLElement> & {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: 'lightBlue' | 'orange';
  icon?: React.ReactNode;
  onClick?: (event: any) => void;
};

const Circle: React.FC<CircleProps> = ({
  size,
  backgroundColor,
  icon,
  onClick,
}) => {
  return (
    <CircleIcon color={backgroundColor} size={size}>
      <span
        onClick={(event) => onClick && onClick(event)}
        style={{ cursor: 'pointer' }}>
        {icon}
      </span>
    </CircleIcon>
  );
};

const CircleIcon = styled.div<{
  color?: 'lightBlue' | 'orange';
  size?: 'small' | 'medium' | 'large';
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
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
`;

export default Circle;
