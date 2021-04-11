import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import Link from 'next/link';
import TitleText from '../common/TitleText';
import { ShareIcon, TeamIcon } from '../../public/svg';
import ResultBox from './ResultBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  height: 100%;
  overflow: scroll;
`;
const UpperContainer = styled.div``;
const ContentContainer = styled.div`
  padding: 0 24px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;
`;
const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Result = () => {
  return (
    <Container>
      <UpperContainer>
        <Header>
          <Circle size={'small'} backgroundColor={'orange'} />
        </Header>
        <ContentContainer>
          <TitleText color={'white'} style={{ marginBottom: 32 }}>
            당신과 똑같은 하루를 보낸 {'\n'} 영혼의 단짝으로부터 온 음악.
          </TitleText>
          <ResultBox />
        </ContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Link href={'/team'}>
          <Circle
            icon={<TeamIcon />}
            clickable={true}
            backgroundColor={'lightBlue'}
            style={{ marginRight: 16 }}
          />
        </Link>
        <Link href={'/'}>
          <Circle
            icon={<ShareIcon />}
            clickable={true}
            backgroundColor={'orange'}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default Result;
