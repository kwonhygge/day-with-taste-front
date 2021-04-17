import React from 'react';
import styled, { css } from 'styled-components';
import Circle from '../common/Circle';
import PrimaryText from '../common/PrimaryText';
import SecondaryText from '../common/SecondaryText';

type QuoteProps = {
  themeColor?: 'light' | 'dark';
};

const Container = styled.main`
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
  ${({ themeColor }) => {
    if (themeColor === 'light')
      return css`
        color: #fff;
      `;
    if (themeColor === 'dark')
      return css`
        color: ${({ theme }) => theme.colors.primaryBlue};
      `;
  }}
`;
const SmallSecondaryText = styled(SecondaryText)<{
  themeColor?: 'light' | 'dark';
}>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  ${({ themeColor }) => {
    if (themeColor === 'light')
      return css`
        color: #fff;
      `;
    if (themeColor === 'dark')
      return css`
        color: ${({ theme }) => theme.colors.primaryBlue};
      `;
  }}
`;

const StartDay = (props: QuoteProps) => {
  const { themeColor = 'light' } = props;
  return (
    <Container>
      <ContentContainer>
        <Circle size={'large'} />
        <TitlePrimaryText themeColor={themeColor}>
          당신의 하루가 시작되는 중...
        </TitlePrimaryText>
      </ContentContainer>
    </Container>
  );
};

export default StartDay;
