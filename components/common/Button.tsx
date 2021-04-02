import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'lightBlue' | 'orange';
  size?: 'large';
  label?: string;
  value?: string;
  onClick?: (event: any) => void;
};

const Button: React.FC<ButtonProps> = ({
  className,
  color,
  label,
  onClick,
  value,
  size,
}) => (
  <StyledButton
    className={className}
    onClick={(event) => onClick && onClick(event)}
    value={value}
    size={size}
    color={color}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button<{
  color?: 'lightBlue' | 'orange';
  size?: 'large';
}>`
  width: 264px;
  height: 72px;

  display: flex;
  align-items: center;
  padding-left: 32px;
  border-radius: 0px 40px 40px 0px;

  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
  font-family: 'Noto Sans CJK KR', sans-serif;
  font-style: normal;
  line-height: 24px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.primaryBlue};
  cursor: pointer;

  ${({ color, size }) => {
    if (color === 'lightBlue')
      return css`
        background-color: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.primaryBlue};
      `;

    if (color === 'orange')
      return css`
        background-color: ${({ theme }) => theme.colors.orange};
        color: #fff;
      `;
    if (size === 'large')
      return css`
        width: 280px;
        padding-left: 48px;
      `;
  }}
`;

export default Button;
