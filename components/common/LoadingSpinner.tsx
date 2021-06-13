import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  margin: auto;
  border: 4px solid #427d96;
  border-top-color: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s 0s infinite linear;
`;

const LoadingSpinner = () => <Loader />;

export default LoadingSpinner;
