import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import Caret from '../../public/svg/Caret';
import { PlayCircleIcon } from '../../public/svg';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import LoadingSpinner from '../common/LoadingSpinner';
import { useRouter } from 'next/router';
import { answers } from '../../utils/answer';
const Container = styled.main``;
const LoadingContainer = styled.div`
  background-color: #fff;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MusicContainer = styled.div`
  background-color: #fff;
  min-height: 140px;
  display: flex;
  align-items: center;
`;
const ThumbnailContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 24px;
`;
const PlayCircleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const MusicInfoContainer = styled.div`
  margin: 16px;
  width: 168px;
`;
const MusicInfoHeaderText = styled(PrimaryText)`
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  color: #0a0d25;
`;
const Footer = styled.footer`
  cursor: pointer;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0px 0px 40px 40px;
  margin-bottom: 108px;
`;
const FooterTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FooterTitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;
const FooterContentContainer = styled.div``;
const FooterContentText = styled(PrimaryText)`
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
`;

const ResultBox = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { loading } = useSelector((state: RootState) => state.songs);
  const recommendation = useSelector(
    (state: RootState) => state.songs.recommendation
  );
  const router = useRouter();
  const { result } = router.query;

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <MusicContainer>
          <ThumbnailContainer>
            <Link
              href={`http://www.youtube.com/watch?v=${recommendation?.data?.music}`}>
              <a target="_blank" rel="noreferrer">
                <PlayCircleContainer>
                  <PlayCircleIcon />
                </PlayCircleContainer>
              </a>
            </Link>

            <img
              src={recommendation?.data?.image ?? ''}
              style={{ width: '100%', height: '100%' }}
            />
          </ThumbnailContainer>
          <MusicInfoContainer>
            <MusicInfoHeaderText
              style={{ fontWeight: 'bold', marginBottom: 4 }}>
              {recommendation?.data?.title ?? ''}
            </MusicInfoHeaderText>
          </MusicInfoContainer>
        </MusicContainer>
      )}

      <Footer onClick={() => setIsCollapsed(!isCollapsed)}>
        <FooterTitleContainer>
          <FooterTitleText>내 하루의 취향</FooterTitleText>
          {isCollapsed ? <Caret isUp={false} /> : <Caret isUp={true} />}
        </FooterTitleContainer>
        {!isCollapsed && (
          <FooterContentContainer>
            {result &&
              answers.map((answer, index) => (
                <FooterContentText>
                  {answer[Number((result as string).charAt(index))]}
                </FooterContentText>
              ))}
          </FooterContentContainer>
        )}
      </Footer>
    </Container>
  );
};

export default ResultBox;
