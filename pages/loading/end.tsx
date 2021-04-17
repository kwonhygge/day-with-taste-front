import Layout from '../../components/Layout';
import Quote from '../../components/layout/Quote';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SongsState, postResult } from '../../reducers/songReducer';

const EndLoadingPage = () => {
  const music = useSelector((state: SongsState) => state.songReducer.music);
  const result = useSelector((state: SongsState) => state.songReducer.result);
  const dispatch = useDispatch();
  const moveToNextPage = () => {
    Router.push('/result');
  };
  useEffect(() => {
    try {
      dispatch(postResult('vjaQAUrfoZ0', '00001000011'));
    } catch (e) {
      console.log(e);
    } finally {
      window.setTimeout(moveToNextPage, 3000);
    }
  }, []);

  return (
    <Layout color={'blue'}>
      <Quote themeColor={'light'} />
    </Layout>
  );
};

export default EndLoadingPage;
