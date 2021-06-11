import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import {
  CloseIcon,
  FacebookIcon,
  LinkIcon,
  TwitterIcon,
} from '../../public/svg';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import Circle from '../common/Circle';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
const Container = styled.main`
  width: 100%;
  height: 100%;
  background: #f1f6fa;
  border-radius: 30px;
`;
const IconListContainer = styled.div`
  padding: 24px 0 12px 0;
`;
const TitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: bold;
  padding: 0 24px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
`;
const IconText = styled(PrimaryText)`
  font-style: normal;
  font-weight: normal;
  padding: 0 24px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
`;
const CloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 15px;
`;
const CopiedText = styled(PrimaryText)`
  position: absolute;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  white-space: nowrap;
`;
const IconsContainer = styled.ul`
  padding-left: 24px;
`;
const IconContainer = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const PickSongContainer = styled.div`
  position: relative;
`;
const ShareModal = (props: {
  handleModalClosed: () => void;
  isVisible: boolean;
}) => {
  const { handleModalClosed, isVisible } = props;
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) {
      window.setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <>
      <Modal
        isVisible={isVisible}
        width={312}
        handleModalClosed={handleModalClosed}>
        <PickSongContainer>
          <CloseIconContainer onClick={handleModalClosed}>
            <CloseIcon />
          </CloseIconContainer>
          <Container>
            {isCopied && <CopiedText>클립보드에 복사되었습니다!</CopiedText>}
            <IconListContainer>
              <TitleText>친구에게 어떻게 물어볼까요?</TitleText>
              <IconsContainer>
                <CopyToClipboard
                  text={`https://day-with-taste.netlify.app`}
                  onCopy={() => setIsCopied(true)}>
                  <IconContainer>
                    <Circle
                      icon={<LinkIcon />}
                      clickable={true}
                      backgroundColor={'lightBlue'}
                      style={{ marginBottom: 24 }}
                      noShadow
                    />
                    <IconText>URL 링크를 보내기</IconText>
                  </IconContainer>
                </CopyToClipboard>

                <Link
                  href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
                    `https://day-with-taste.netlify.app`
                  )}`}>
                  <a target="_blank" rel="noreferrer">
                    <IconContainer>
                      <Circle
                        icon={<FacebookIcon />}
                        clickable={true}
                        backgroundColor={'blue'}
                        style={{ marginBottom: 24 }}
                        noShadow
                      />
                      <IconText>페이스북으로 물어보기</IconText>
                    </IconContainer>
                  </a>
                </Link>

                <IconContainer>
                  <Link
                    href={`http://twitter.com/share?url=${encodeURIComponent(
                      `https://day-with-taste.netlify.app`
                    )}&text=당신과 같은 하루를 보낸 영혼의 단짝으로부터 온 음악`}>
                    <a target="_blank" rel="noreferrer">
                      <IconContainer>
                        <Circle
                          icon={<TwitterIcon />}
                          clickable={true}
                          backgroundColor={'skyBlue'}
                          style={{ marginBottom: 24 }}
                          noShadow
                        />
                        <IconText>트위터로 물어보기</IconText>
                      </IconContainer>
                    </a>
                  </Link>
                </IconContainer>
              </IconsContainer>
            </IconListContainer>
          </Container>
        </PickSongContainer>
      </Modal>
    </>
  );
};
export default ShareModal;
