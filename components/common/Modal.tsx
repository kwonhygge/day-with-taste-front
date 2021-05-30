import React from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';

export type ModalProps = {
  isVisible?: boolean;
  handleModalClosed?: () => void;
  width?: number;
  children?: React.ReactElement;
};

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 150;
`;
const ModalContainer = styled.div<{ width: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => `${width}px`};
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f1f6fa;
  z-index: 150;
  border-radius: 30px;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 5000;
`;

const Modal: React.FC<ModalProps> = ({
  isVisible,
  handleModalClosed,
  width = 300,
  children,
}) => {
  return isVisible ? (
    <Container>
      <Backdrop isShowing={isVisible} onClick={handleModalClosed} />
      <ModalContainer width={width}>
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </Container>
  ) : null;
};

export default Modal;
