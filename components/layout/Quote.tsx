import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import PrimaryText from '../common/PrimaryText';
import SecondaryText from '../common/SecondaryText';

type QuoteProps = {
  themeColor: 'light' | 'dark';
};

const Container = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitlePrimaryText = styled(PrimaryText)<{ themeColor?: 'light' | 'dark' }>`
  margin: 40px 0px 16px 0px;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme, themeColor }) =>
    themeColor === 'light' ? '#fff' : theme.colors.primaryBlue};
`;
const SmallSecondaryText = styled(SecondaryText)<{
  themeColor?: 'light' | 'dark';
}>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  color: ${({ theme, themeColor }) =>
    themeColor === 'light' ? '#fff' : theme.colors.primaryBlue};
`;

const Quote = (props: QuoteProps) => {
  const { themeColor = 'light' } = props;
  return (
    <Container>
      <ContentContainer>
        <Circle size={'large'} />
        <TitlePrimaryText themeColor={themeColor}>
          다른 사람들이 기대하는 것보다 더 많이,{'\n'}
          그리고 진심으로 기뻐하며 주라
        </TitlePrimaryText>
        <SmallSecondaryText themeColor={themeColor}>
          {'<'}삶을 위한 지침{'>'} 중에서
        </SmallSecondaryText>
      </ContentContainer>
    </Container>
  );
};

export default Quote;
