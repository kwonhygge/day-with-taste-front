import Layout from '../../components/Layout';
import { useEffect } from 'react';
import Router from 'next/router';
import StartDay from '../../components/layout/StartDay';

const StartDayPage = () => {
  const moveToNextPage = () => {
    Router.push('/input-music');
  };
  useEffect(() => {
    window.setTimeout(moveToNextPage, 1000);
  }, []);
  return (
    <Layout>
      <StartDay themeColor={'dark'} />
    </Layout>
  );
};

export default StartDayPage;
