import styled from 'styled-components';

export type BackdropProps = React.HTMLAttributes<HTMLElement> & {
  isShowing: boolean;
  onClick?: () => void;
};

const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Backdrop: React.FC<BackdropProps> = ({ isShowing, onClick }) => {
  return isShowing ? <BackdropContainer onClick={onClick} /> : null;
};

export default Backdrop;
