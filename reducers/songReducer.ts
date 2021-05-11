import {
  RandomMusicResponseType,
  Result,
  Song,
  SongsResponseType,
} from '../interfaces';
import { AxiosError } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import SongService from '../services/songService';
import { AnyAction } from 'redux';

export interface SongsState {
  songs: Song[] | null;
  music: string | null;
  result: string | null;
  randomMusic: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: SongsState = {
  songs: null,
  music: null,
  result: null,
  randomMusic: null,
  loading: false,
  error: null,
};

const GET_SONGS = 'GET_SONGS' as const;
const GET_SONGS_REQUEST = 'GET_SONGS_REQUEST' as const;
const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS' as const;
const GET_SONGS_ERROR = 'GET_SONGS_ERROR' as const;
const POST_RESULT = 'POST_RESULT' as const;
const POST_RESULT_REQUEST = 'POST_RESULT_REQUEST' as const;
const POST_RESULT_SUCCESS = 'POST_RESULT_SUCCESS' as const;
const POST_RESULT_ERROR = 'POST_RESULT_ERROR' as const;
const GET_RECOMMENDATION = 'GET_RECOMMENDATION' as const;
const SET_MUSIC = 'SET_MUSIC' as const;
const SET_RESULT = 'SET_RESULT' as const;

export const getSongs = (keyword: string) => ({
  type: GET_SONGS,
  payload: { keyword },
});
export const getSongsRequest = () => ({ type: GET_SONGS_REQUEST });
export const getSongsSuccess = (songs: Song[]) => ({
  type: GET_SONGS_SUCCESS,
  payload: songs,
});
export const getSongsError = (e: AxiosError) => ({
  type: GET_SONGS_ERROR,
  payload: e,
});
export const postResult = (music: string, result: string) => ({
  type: POST_RESULT,
  payload: { music, result },
});
export const postResultRequest = () => ({
  type: POST_RESULT_REQUEST,
});
export const postResultSuccess = (randomMusic: string) => ({
  type: POST_RESULT_SUCCESS,
  payload: randomMusic,
});
export const postResultError = (e: AxiosError) => ({
  type: POST_RESULT_ERROR,
  payload: e,
});
export const getRecommendation = (randomMusic: string) => ({
  type: GET_RECOMMENDATION,
  payload: { randomMusic },
});
export const setMusic = (music: string) => ({
  type: SET_MUSIC,
  payload: music,
});
export const setResult = (result: string) => ({
  type: SET_RESULT,
  payload: result,
});

type SongsAction =
  | ReturnType<typeof getSongsRequest>
  | ReturnType<typeof getSongsSuccess>
  | ReturnType<typeof getSongsError>
  | ReturnType<typeof postResultRequest>
  | ReturnType<typeof postResultSuccess>
  | ReturnType<typeof postResultError>
  | ReturnType<typeof setMusic>
  | ReturnType<typeof setResult>;

const songReducer = (
  state: SongsState = initialState,
  action: SongsAction
): SongsState => {
  switch (action.type) {
    case GET_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
        songs: state.songs,
        error: null,
      };
    case GET_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: action.payload,
        error: null,
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        songs: null,
        error: action.payload,
      };
    case POST_RESULT_REQUEST:
      return {
        ...state,
        loading: true,
        randomMusic: state.randomMusic,
        error: null,
      };
    case POST_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        randomMusic: action.payload,
        error: null,
      };
    case POST_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        randomMusic: null,
        error: action.payload,
      };
    case SET_MUSIC:
      return {
        ...state,
        music: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;

interface GetSongsSagaAction extends AnyAction {
  payload: {
    keyword: string;
  };
}

function* getSongsSaga(action: GetSongsSagaAction) {
  try {
    yield put({ type: GET_SONGS_REQUEST });
    const songsResponse: SongsResponseType = yield call(
      SongService.getSongs,
      action.payload.keyword
    );
    yield put({
      type: GET_SONGS_SUCCESS,
      payload: songsResponse.data,
    });
  } catch (e) {
    yield put({
      type: GET_SONGS_ERROR,
      payload: e,
    });
  }
}

interface PostResultSagaAction extends AnyAction {
  payload: {
    music: string;
    result: string;
  };
}

function* postResultSaga(action: PostResultSagaAction) {
  try {
    yield put({ type: POST_RESULT_REQUEST });
    const randomMusicResponse: RandomMusicResponseType = yield call(
      SongService.postResult,
      { music: action.payload.music, result: action.payload.result }
    );
    yield put({
      type: POST_RESULT_SUCCESS,
      payload: randomMusicResponse.data.randomMusic,
    });
  } catch (e) {
    yield put({
      type: POST_RESULT_ERROR,
      payload: e,
    });
  }
}

// [project] saga 함수를 실행하는 액션과 액션 생성 함수를 작성했다.
export function* sagas() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(POST_RESULT, postResultSaga);
}
