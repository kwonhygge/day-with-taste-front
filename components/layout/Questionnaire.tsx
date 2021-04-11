import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Question } from '../../interfaces';
import Button from '../common/Button';
import Circle from '../common/Circle';
import Label from '../common/Label';
import TitleText from '../common/TitleText';
import { setResult as setResultAction } from '../../reducers/songReducer';

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

const Questionnaire = ({ item }: Props) => {
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const dispatch = useDispatch();
  let resultArr = [];

  const handleButtonClick = (answer: string) => {
    resultArr = [
      ...result.slice(0, item.id - 1),
      answer === 'A' ? 0 : 1,
      ...result.slice(item.id, result.length),
    ];
    setResult(resultArr);
    if (item.id === 11) {
      dispatch(setResultAction(resultArr.join('')));
      Router.push('/loading/end');
    } else {
      Router.push(`/questionnaires/${item.id + 1}`);
    }
  };

  return (
    <QuestionnaireContainer>
      <UpperContainer>
        <HeadCircle size="small" />
        <ProgressLabel index={item.id} />
        <QuestionText>{item.question}</QuestionText>
      </UpperContainer>
      <ButtonContainer>
        <AnswerButton
          label={item.answerA}
          onClick={() => handleButtonClick('A')}
        />
        <AnswerButton
          label={item.answerB}
          onClick={() => handleButtonClick('B')}
        />
      </ButtonContainer>
    </QuestionnaireContainer>
  );
};

export default Questionnaire;
