import React, { useState } from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import Link from 'next/link';
import TitleText from '../common/TitleText';
import {
  FacebookIcon,
  KakaoIcon,
  LinkIcon,
  ShareIcon,
  SmallLogoIcon,
  TeamIcon,
  TwitterIcon,
} from '../../public/svg';
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
const CircleContainer = styled.div`
  position: relative;
`;
const IconContainer = styled.div`
  position: absolute;
  top: -384px;
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Container>
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
        <Link href={'/team'}>
          <Circle
            icon={<TeamIcon />}
            clickable={true}
            backgroundColor={'lightBlue'}
            style={{ marginRight: 16 }}
          />
        </Link>

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
              <Link
                  href={`http://twitter.com/share?url=${encodeURIComponent(
                      'www.naver.com'
                  )}&text=나의 취향의 하루 공유하기`}>
                <a target="_blank" rel="noreferrer">
              <Circle
                icon={<LinkIcon />}
                clickable={true}
                backgroundColor={'lightBlue'}
                style={{ marginBottom: 24 }}
              />
                </a>
              </Link>
              <Link
                  href={`http://www.facebok.com/sharer.php?u=${encodeURIComponent(
                      'www.naver.com'
                  )}`}>
                <a target="_blank" rel="noreferrer">
              <Circle
                icon={<FacebookIcon />}
                clickable={true}
                backgroundColor={'blue'}
                style={{ marginBottom: 24 }}
              />
                </a>
                </Link>
              <Circle
                icon={<KakaoIcon />}
                clickable={true}
                backgroundColor={'yellow'}
                style={{ marginBottom: 24 }}
              />
              <Circle
                icon={<TwitterIcon />}
                clickable={true}
                backgroundColor={'skyBlue'}
              />
            </IconContainer>
          )}
        </CircleContainer>
      </ButtonContainer>
    </Container>
  );
};

export default Result;
