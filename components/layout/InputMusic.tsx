import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import TitleText from '../common/TitleText';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../reducers/songReducer';
import { PickSong } from './PickSong';
import { SmallLogoIcon } from '../../public/svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 48px;
`;
const UpperContainer = styled.div``;
const ContentContainer = styled.div`
  margin-left: 24px;
`;
const ButtonContainer = styled.div`
  margin-left: 24px;
`;
const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
const Input = styled.input`
  width: 311px;
  height: 40px;
  padding-left: 17px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #427d96;
  background: #ffffff;
  border-radius: 30px;
`;

const InputMusic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await dispatch(getSongs(keyword));
      setIsVisible(true);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <Container>
      <UpperContainer>
        <Header>
          <SmallLogoIcon color={'orange'} />
        </Header>
        <ContentContainer>
          <TitleText style={{ marginBottom: 108 }}>
            잠결에 들리는 음악소리.{'\n'}
            내가 좋아하는 노래였는데... {'\n'}
            뭐였더라?
          </TitleText>
          <Input
            placeholder={'아티스트 이름이나 노래 제목'}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </ContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Button
          onClick={() => handleClick()}
          label={'곰곰이 생각해보기'}
          color={'orange'}>
          곰곰히 생각해보기
        </Button>
        <Modal
          isVisible={isVisible}
          width={312}
          handleModalClosed={() => setIsVisible(false)}>
          <PickSong />
        </Modal>
      </ButtonContainer>
    </Container>
  );
};
export default InputMusic;
