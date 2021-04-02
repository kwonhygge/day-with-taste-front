import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import Link from 'next/link';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import PrimaryText from '../common/PrimaryText';
import { ShareIcon, UsersIcon } from '../../public/svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
`;
const UpperContainer = styled.div``;
const ContentContainer = styled.div`
  padding-left: 24px;
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
const HomeTitleText = styled(TitleText)`
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  font-weight: bold;
  margin-bottom: 15px;
`;

const Result = () => (
  <Container>
    <UpperContainer>
      <Header>
        <Circle size={'small'} backgroundColor={'orange'} />
      </Header>
      <ContentContainer>
        <TitleText color={'white'} style={{ marginBottom: 32 }}>
          당신과 똑같은 하루를 보낸 {'\n'} 영혼의 단짝으로부터 온 음악.
        </TitleText>
        <PrimaryText>내 영혼의 단짝과 {'\n'} 음악을 나누세요.</PrimaryText>
      </ContentContainer>
    </UpperContainer>
    <ButtonContainer>
      <Link href={'/'}>
        <Circle
          icon={<UsersIcon />}
          backgroundColor={'lightBlue'}
          style={{ marginRight: 16 }}
        />
      </Link>
      <Link href={'/'}>
        <Circle icon={<ShareIcon />} backgroundColor={'orange'} />
      </Link>
    </ButtonContainer>
  </Container>
);

export default Result;
