import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import Caret from '../../public/svg/Caret';

const Container = styled.main``;
const Header = styled.div`
  display: flex;
  background-color: #fff;
  height: 140px;
`;
const ThumbnailContainer = styled.div`
  width: 140px;
  height: 140px;
  background: #fbfbfb;
`;
const MusicInfoContainer = styled.div`
  padding: 16px;
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
  line-height: 21px;
`;

const ResultBox = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Container>
      <Header>
        <ThumbnailContainer></ThumbnailContainer>
        <MusicInfoContainer>
          <MusicInfoHeaderText style={{ fontWeight: 'bold', marginBottom: 4 }}>
            최정윤
          </MusicInfoHeaderText>
          <MusicInfoHeaderText style={{ fontWeight: 'normal' }}>
            Dance with me bady
          </MusicInfoHeaderText>
        </MusicInfoContainer>
      </Header>
      <Footer onClick={() => setIsCollapsed(!isCollapsed)}>
        <FooterTitleContainer>
          <FooterTitleText>내 하루의 취향</FooterTitleText>
          {isCollapsed ? <Caret isUp={false} /> : <Caret isUp={true} />}
        </FooterTitleContainer>
        {!isCollapsed && (
          <FooterContentContainer>
            <FooterContentText>
              고양이가 잠을 깨우고, 만화가 잠 못 이루게 하는. 스포일러는
              스쳐서도 안되는 방해꾼이며 달빛을 받으면 생기로워지는. 맨투맨의
              편안함이, 무채색의 시크함이 더 끌리는. 혹한의 냉기가 더 견딜 만한.
              샤워의 개운함을 참을 수 없는 하루
            </FooterContentText>
          </FooterContentContainer>
        )}
      </Footer>
    </Container>
  );
};

export default ResultBox;
