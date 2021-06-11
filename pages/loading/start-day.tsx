import Layout from '../../components/Layout';
import { useEffect } from 'react';
import Router from 'next/router';
import StartDay from '../../components/layout/StartDay';
import Quote from '../../components/layout/Quote';

const StartDayPage = () => {
  const moveToNextPage = () => {
    Router.push('/input-music');
  };
  useEffect(() => {
    window.setTimeout(moveToNextPage, 1500);
  }, []);
  return (
    <Layout>
      <Quote themeColor={'dark'} contents={'당신의 하루가 시작되는 중...'} />
    </Layout>
  );
};

export default StartDayPage;
