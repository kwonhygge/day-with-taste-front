import Layout from '../../components/Layout';
import Quote from '../../components/layout/Quote';
import { useEffect } from 'react';
import Router from 'next/router';

const StartQuestionPage = () => {
  const moveToNextPage = () => {
    Router.push('/questionnaires/1');
  };
  useEffect(() => {
    window.setTimeout(moveToNextPage, 1000);
  }, []);
  return (
    <Layout>
      <Quote themeColor={'dark'} />
    </Layout>
  );
};

export default StartQuestionPage;
