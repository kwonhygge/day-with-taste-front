import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import PrimaryText from '../common/PrimaryText';
import { LogoIcon } from '../../public/svg';
import CountService from '../../services/countService';
import ShareModal from './ShareModal';

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 48px;
`;
const UpperContainer = styled.div`
  padding-top: 30px;
`;
const ContentContainer = styled.div`
  padding-left: 24px;
`;
const ButtonContainer = styled.div`
  padding-left: 24px;
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

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    try {
      CountService.getCounts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Container>
      <UpperContainer>
        <ContentContainer>
          <LogoIcon />
          <HomeTitleText>취향의 하루</HomeTitleText>
          <HomeContentText>
            당신의 취향은 어떤가요? {'\n'}
            하루를 당신의 취향으로 채워보세요. {'\n'}
            나와 똑같은 취향의 사람은 {'\n'}
            어떤 음악을 듣고 있는지 알 수 있답니다.
          </HomeContentText>
        </ContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Button
          label={'친구의 하루 물어보기'}
          style={{ marginBottom: 16 }}
          size={'large'}
          onClick={() => setIsVisible(true)}
        />
        <Link href={'/loading/start-day'}>
          <Button label={'시작하기'} color={'orange'} size={'large'} />
        </Link>
      </ButtonContainer>
      <ShareModal
        handleModalClosed={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </Container>
  );
};
export default Home;
