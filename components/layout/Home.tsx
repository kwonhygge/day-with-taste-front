import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import PrimaryText from '../common/PrimaryText';
import { LogoIcon } from '../../public/svg';
import {
  getRecommendation,
  getSongs,
  postResult,
} from '../../reducers/songReducer';
import { useDispatch } from 'react-redux';
import CountService from '../../services/countService';

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
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
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      CountService.getCounts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  // const getSongsDispatch = async () => {
  //   console.log('called');
  //   dispatch(getSongs('조유리'));
  // };

  // const postResultDispatch = async () => {
  //   console.log('called');
  //   dispatch(
  //     postResult({
  //       result: '11100011100',
  //       url:
  //         'https://www.last.fm/music/%EA%B0%80%EC%9D%B8/_/%ED%94%BC%EC%96%B4%EB%82%98',
  //       title: '피어나',
  //       artist: '가인',
  //       image:
  //         'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
  //     })
  //   );
  // };

  // const getRecommendationDispatch = async () => {
  //   console.log('called');
  //   dispatch(getRecommendation('14knqqkogj'));
  // };

  return (
    <Container>
      <UpperContainer>
        <ContentContainer>
          <LogoIcon />
          <HomeTitleText>취향의 하루</HomeTitleText>
          <HomeContentText>
            내 영혼의 단짝과 {'\n'} 음악을 나누세요.
          </HomeContentText>
        </ContentContainer>
      </UpperContainer>
      <ButtonContainer>
        {/* <button onClick={() => getSongsDispatch()}>hey!!</button>
        <button onClick={() => postResultDispatch()}>hey!!!</button>
        <button onClick={() => getRecommendationDispatch()}>hey!!!!</button> */}
        <Button
          label={'친구의 하루 물어보기'}
          style={{ marginBottom: 16 }}
          size={'large'}
        />
        <Link href={'/loading/start-day'}>
          <Button label={'시작하기'} color={'orange'} size={'large'} />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
export default Home;
