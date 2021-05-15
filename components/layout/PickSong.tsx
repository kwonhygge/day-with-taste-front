import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import PrimaryText from '../common/PrimaryText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Song } from '../../interfaces';
import { PlayCircleIcon } from '../../public/svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background: #f1f6fa;
  border-radius: 30px;
`;
const SongListContainer = styled.div`
  padding-top: 24px;
`;
const SongContainer = styled.ul`
  height: 312px;
  overflow: scroll;
`;
const RowContainer = styled.li<{ isSelected: boolean }>`
  width: 100%;
  cursor: pointer;
  padding: 8px 24px 8px 24px;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ isSelected }) => (isSelected ? '#E4EDF2' : 'none')};
`;
const ThumbnailContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
const PlayCircleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const TitleText = styled(PrimaryText)`
  font-style: normal;
  font-weight: bold;
  padding: 0 24px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
`;
const SongTitleText = styled.h1`
  padding-top: 8px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #0a0d25;
`;
const FooterButton = styled.button`
  width: 100%;
  height: 83px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  display: flex;
  background: #ff844b;
  justify-content: center;
  align-items: center;
  &:disabled {
    color: #abcad7;
    background: #e4edf2;
  }
`;

export const PickSong = () => {
  const { songs } = useSelector((state: RootState) => state.songs);
  console.log(songs);
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('');
  const isSelectedKey = (currentKey: string) => {
    return currentKey === selectedKey;
  };
  const dispatch = useDispatch();

  //TODO: 노래 리스트 받아온 뒤에 원하는 노래를 선택하면 컴포넌트가 리렌더링됩니다ㅠㅠ 선택 후 배경색도.. 왜 안바뀔까요리...
  const SongRow = useCallback(
    (el, index) => {
      return (
        <RowContainer
          id={`${el.title}${index}`}
          key={`${el.title}${index}`}
          isSelected={isSelectedKey(`${el.title}${index}`)}
          onClick={(e) => {
            setSelectedKey((e.currentTarget as Element).id);
          }}>
          <ThumbnailContainer>
            <Link href={el.url}>
              <a target="_blank" rel="noreferrer">
                <PlayCircleContainer>
                  <PlayCircleIcon />
                </PlayCircleContainer>
              </a>
            </Link>
            <img src={el.image} style={{ width: '100%', height: '100%' }} />
          </ThumbnailContainer>
          <SongTitleText style={{ width: 140 }}>{el.title}</SongTitleText>
        </RowContainer>
      );
    },
    [isSelectedKey, setSelectedKey]
  );

  const SongList = useCallback(() => {
    return (
      <SongContainer>
        {songs && songs.map((el: Song, index: number) => SongRow(el, index))}
      </SongContainer>
    );
  }, [songs]);
  return (
    <>
      <Container>
        <SongListContainer>
          <TitleText>내가 생각하는 음악은</TitleText>
          <SongList />
          <FooterButton disabled={isSelectedKey('')}>이 노래야!</FooterButton>
        </SongListContainer>
      </Container>
    </>
  );
};
