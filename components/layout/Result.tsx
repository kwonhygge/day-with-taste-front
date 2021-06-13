import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TitleText from '../common/TitleText';
import {
  FacebookIcon,
  LinkIcon,
  RotateIcon,
  ShareIcon,
  SmallLogoIcon,
  TeamIcon,
  TwitterIcon,
} from '../../public/svg';
import ResultBox from './ResultBox';
import PrimaryText from '../common/PrimaryText';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getRecommendation } from '../../reducers/songReducer';

const Container = styled.main`
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
const CircleContainer = styled.div`
  position: relative;
`;
const IconContainer = styled.div`
  position: absolute;
  top: -288px;
`;
const CopiedText = styled(PrimaryText)`
  position: absolute;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
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
  const router = useRouter();
  const { result, musicId } = router.query;
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (musicId) {
      try {
        dispatch(getRecommendation(musicId as string));
      } catch (e) {
        console.log(e);
      }
    }
  }, [musicId]);

  useEffect(() => {
    if (isCopied) {
      window.setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);


  // useEffect(() => {
  //   createKakaoButton();
  // }, []);

  const shareViaKakao = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.kakaoKey);
      }
      kakao.Link.sendDefault({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        // container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '영혼의 단짝이 보내주는 음악 추천',
          description: '당신과 같은 하루를 보낸 영혼의 단짝은 무슨 음악을 듣고 있을까요?',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: `https://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`,
            webUrl: `http://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`,
          },
        },
        buttons: [
          {
            title: '바로가기',
            link: {
              mobileWebUrl: `https://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`,
              webUrl: `http://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`,
            },
          },
          // {
          //   title: '앱으로 보기',
          //   link: {
          //     mobileWebUrl: window.location.href,
          //     webUrl: window.location.href,
          //   },
          // },
        ],
      });
      setIsExpanded(false);
    }
  };


  return (
    <Container>
      {isCopied && <CopiedText>클립보드에 복사되었습니다!</CopiedText>}
      <UpperContainer>
        <Header>
          <SmallLogoIcon color={'lightBlue'} />
        </Header>
        <ContentContainer>
          <TitleText color={'white'} style={{ marginBottom: 32 }}>
            당신과 똑같은 하루를 보낸 {'\n'} 영혼의 단짝으로부터 온 음악.
          </TitleText>
          <ResultBox />
        </ContentContainer>
      </UpperContainer>
      <ButtonContainer>
        <Link href={'/'}>
          <Circle
            icon={<RotateIcon />}
            clickable={true}
            backgroundColor={'lightBlue'}
            style={{ marginRight: 16 }}
          />
        </Link>
        <Circle
          icon={<TeamIcon />}
          clickable={true}
          backgroundColor={'lightBlue'}
          style={{ marginRight: 16 }}
          onClick={() => router.push('/team')}
        />
        <CircleContainer>
          <Circle
            icon={
              <span
                onClick={() => {
                  setIsExpanded((prevState) => !prevState);
                }}>
                <ShareIcon />
              </span>
            }
            clickable={true}
            backgroundColor={'orange'}
            onClick={() => {
              setIsExpanded((prevState) => !prevState);
            }}
          />
          {isExpanded && (
            <IconContainer>
              <CopyToClipboard
                text={`https://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`}
                onCopy={() => setIsCopied(true)}>
                <Circle
                  icon={<LinkIcon />}
                  clickable={true}
                  backgroundColor={'lightBlue'}
                  style={{ marginBottom: 24 }}
                  onClick={() => setIsExpanded(false)}
                />
              </CopyToClipboard>
              <Link
                href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
                  `https://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`
                )}`}>
                <a target="_blank" rel="noreferrer">
                  <Circle
                    icon={<FacebookIcon />}
                    clickable={true}
                    backgroundColor={'blue'}
                    style={{ marginBottom: 24 }}
                    onClick={() => setIsExpanded(false)}
                  />
                </a>
              </Link>

              <Circle
                id={'kakao-link-btn'}
                icon={<KakaoIcon />}
                clickable={true}
                backgroundColor={'yellow'}
                style={{ marginBottom: 24 }}
                onClick={() => shareViaKakao()}
              />

              <Link
                href={`http://twitter.com/share?url=${encodeURIComponent(
                  `https://day-with-taste.netlify.app/result?result=${result}&musicId=${musicId}`
                )}&text=나와 똑같은 하루를 보낸 단짝으로부터 온 음악은 이거야`}>
                <a target="_blank" rel="noreferrer">
                  <Circle
                    icon={<TwitterIcon />}
                    clickable={true}
                    backgroundColor={'skyBlue'}
                    onClick={() => setIsExpanded(false)}
                  />
                </a>
              </Link>
            </IconContainer>
          )}
        </CircleContainer>
      </ButtonContainer>
    </Container>
  );
};

export default Result;
