import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import Link from 'next/link';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import PrimaryText from '../common/PrimaryText';

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
  padding-left: 24px;
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
const HomeContentText = styled(PrimaryText)`
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;

const Home = () => (
  <Container>
    <UpperContainer>
      <Header>
        <Circle size={'small'} backgroundColor={'orange'} />
      </Header>
      <ContentContainer>
        <HomeTitleText>취향의 하루</HomeTitleText>
        <HomeContentText>
          내 영혼의 단짝과 {'\n'} 음악을 나누세요.
        </HomeContentText>
      </ContentContainer>
    </UpperContainer>
    <ButtonContainer>
      <Button
        label={'친구의 하루 물어보기'}
        style={{ marginBottom: 16 }}
        size={'large'}
      />
      <Link href={'/input-music'}>
        <Button label={'시작하기'} color={'orange'} size={'large'} />
      </Link>
    </ButtonContainer>
  </Container>
);

export default Home;
