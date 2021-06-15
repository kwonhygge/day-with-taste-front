import Layout from '../../components/Layout';
import { useEffect } from 'react';
import Router from 'next/router';
import StartDay from '../../components/layout/StartDay';

const StartQuestionPage = () => {
  const moveToNextPage = () => {
    Router.push('/questionnaires/1');
  };
  useEffect(() => {
    window.setTimeout(moveToNextPage, 1500);
  }, []);
  return (
    <Layout>
      <StartDay themeColor={'dark'} />
    </Layout>
  );
};

export default StartQuestionPage;
