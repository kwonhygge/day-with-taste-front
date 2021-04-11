import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { Question } from '../../interfaces';
import Button from '../common/Button';
import Circle from '../common/Circle';
import Label from '../common/Label';
import TitleText from '../common/TitleText';

type Props = {
  item: Question;
};

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  height: 100%;
`;

const UpperContainer = styled.div``;

const HeadCircle = styled(Circle)`
  margin: 0 auto;
`;

const ProgressLabel = styled(Label)`
  margin-top: 48px;
`;

const QuestionText = styled(TitleText)`
  margin-top: 16px;
`;

const ButtonContainer = styled.div``;

const AnswerButton = styled(Button)`
  & + & {
    margin-top: 10px;
  }
`;

const Questionnaire = ({ item }: Props) => (
  <QuestionnaireContainer>
    <UpperContainer>
      <HeadCircle size="small" />
      <ProgressLabel index={item.id} />
      <QuestionText>{item.question}</QuestionText>
    </UpperContainer>
    <ButtonContainer>
      <AnswerButton
        label={item.answerA}
        onClick={() => {
          if (item.id === 11) {
            Router.push('/loading/end');
          } else {
            Router.push(`/questionnaires/${item.id + 1}`);
          }
        }}
      />
      <AnswerButton
        label={item.answerB}
        onClick={() => {
          if (item.id === 11) {
            Router.push('/loading/end');
          } else {
            Router.push(`/questionnaires/${item.id + 1}`);
          }
        }}
      />
    </ButtonContainer>
  </QuestionnaireContainer>
);

export default Questionnaire;
