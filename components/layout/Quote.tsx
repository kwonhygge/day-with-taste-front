import React from 'react';
import styled from 'styled-components';
import Circle from '../common/Circle';
import PrimaryText from '../common/PrimaryText';
import SecondaryText from '../common/SecondaryText';

type QuoteProps = {
  themeColor: 'light' | 'dark';
  contents: string;
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
  const { themeColor = 'light', contents } = props;
  return (
    <Container>
      <ContentContainer>
        <Circle size={'large'} />
        <TitlePrimaryText themeColor={themeColor}>{contents}</TitlePrimaryText>
      </ContentContainer>
    </Container>
  );
};

export default Quote;
