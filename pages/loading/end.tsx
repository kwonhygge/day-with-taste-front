import Layout from '../../components/Layout';
import Quote from '../../components/layout/Quote';
import Router from 'next/router';
import { useEffect } from 'react';

const EndLoadingPage = () => {
  const moveToNextPage = () => {
    Router.push('/result');
  };
  useEffect(() => {
    window.setTimeout(moveToNextPage, 1500);
  }, []);

  return (
    <Layout color={'blue'}>
      <Quote themeColor={'light'} />
    </Layout>
  );
};

export default EndLoadingPage;
