import React from 'react';
import styled from 'styled-components';
import SecondaryText from '../common/SecondaryText';

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
  align-items: center;
  margin-bottom: 38px;
  border-bottom: 2px solid #ebebeb;
`;
const Input = styled.input`
  width: 311px;
  height: 40px;
  background: #f5f5f5;
  padding-left: 17px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #454d58;
`;
const GrayButton = styled.button`
  width: 312px;
  height: 50px;
  border-radius: 5px;
  background: #c4c4c4;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 13px;
`;

const InputMusic = () => (
  <Container>
    <UpperContainer>
      <Header>
        <SecondaryText style={{ paddingLeft: 24 }}>앰블럼</SecondaryText>
      </Header>
      <ContentContainer>
        <SecondaryText
          style={{ fontSize: 24, lineHeight: '40px', marginBottom: 100 }}>
          잠결에 들리는 음악소리.{'\n'}
          내가 좋아하는 노래였는데... {'\n'}
          뭐였더라?
        </SecondaryText>
        <Input placeholder={'아티스트 이름이나 노래 제목'} />
      </ContentContainer>
    </UpperContainer>
    <ButtonContainer>
      <GrayButton>곰곰히 생각해보기</GrayButton>
    </ButtonContainer>
  </Container>
);

export default InputMusic;
