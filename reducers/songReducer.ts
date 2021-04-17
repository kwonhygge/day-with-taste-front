import { Songs } from '../interfaces';
import { AxiosError } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import SongService from '../services/songService';
import { AnyAction } from 'redux';
import CountService from '../services/countService';

export interface SongsState {
  songs: Songs | null;
  music: string | null;
  result: string | null;
  inputSong: string | null;
  outputSong: Object | null;
  loading: boolean;
  error: Error | null;
}

const initialState: SongsState = {
  songs: null,
  music: null,
  result: null,
  inputSong: null,
  outputSong: null,
  loading: false,
  error: null,
};

const GET_VISIT = 'GET_VISIT' as const;
const GET_VISIT_REQUEST = 'GET_VISIT_REQUEST' as const;
const GET_VISIT_SUCCESS = 'GET_VISIT_SUCCESS' as const;
const GET_VISIT_ERROR = 'GET_VISIT_ERROR' as const;
const GET_SONGS = 'GET_SONGS' as const;
const GET_SONGS_REQUEST = 'GET_SONGS_REQUEST' as const;
const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS' as const;
const GET_SONGS_ERROR = 'GET_SONGS_ERROR' as const;
const POST_RESULT = 'POST_RESULT' as const;
const POST_RESULT_REQUEST = 'POST_RESULT_REQUEST' as const;
const POST_RESULT_SUCCESS = 'POST_RESULT_SUCCESS' as const;
const POST_RESULT_ERROR = 'POST_RESULT_ERROR' as const;
const SET_RESULT = 'SET_RESULT' as const;
const SET_MUSIC = 'SET_MUSIC' as const;

export const getVisits = () => ({
  type: GET_VISIT,
});
export const getVisitsRequest = () => ({ type: GET_VISIT_REQUEST });
export const getVisitsSuccess = () => ({ type: GET_VISIT_SUCCESS });
export const getVisitsError = (e: AxiosError) => ({
  type: GET_VISIT_ERROR,
  payload: e,
});
export const getSongs = (keyword: string) => ({
  type: GET_SONGS,
  payload: { keyword },
});
export const getSongsRequest = () => ({ type: GET_SONGS_REQUEST });
export const getSongsSuccess = (songs: Songs) => ({
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
export const postResultSuccess = (outputSong: Object) => ({
  type: POST_RESULT_SUCCESS,
  payload: outputSong,
});
export const postResultError = (e: AxiosError) => ({
  type: POST_RESULT_ERROR,
  payload: e,
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
  | ReturnType<typeof getVisits>
  | ReturnType<typeof getVisitsRequest>
  | ReturnType<typeof getVisitsSuccess>
  | ReturnType<typeof getVisitsError>
  | ReturnType<typeof getSongsRequest>
  | ReturnType<typeof getSongsSuccess>
  | ReturnType<typeof getSongsError>
  | ReturnType<typeof postResultRequest>
  | ReturnType<typeof postResultSuccess>
  | ReturnType<typeof postResultError>
  | ReturnType<typeof setResult>
  | ReturnType<typeof setMusic>;

const songReducer = (
  state: SongsState = initialState,
  action: SongsAction
): SongsState => {
  switch (action.type) {
    case GET_VISIT:
      return { ...state, loading: true, error: null };
    case GET_VISIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_VISIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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
        outputSong: state.outputSong,
        error: null,
      };
    case POST_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        outputSong: action.payload,
        error: null,
      };
    case POST_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        outputSong: null,
        error: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case SET_MUSIC:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;

interface GetSagaAction extends AnyAction {
  payload: {
    keyword: string;
  };
}

function* getCounts() {
  try {
    yield put({ type: GET_VISIT_REQUEST });
    yield call(CountService.getCounts);
  } catch (e) {
    yield put({
      type: GET_VISIT_ERROR,
      payload: e,
    });
  } finally {
    yield put({
      type: GET_VISIT_SUCCESS,
    });
  }
}

function* getSongsSaga(action: GetSagaAction) {
  try {
    yield put({ type: GET_SONGS_REQUEST });
    const songs: Songs = yield call(
      SongService.getSongs,
      action.payload.keyword
    );
    yield put({
      type: GET_SONGS_SUCCESS,
      payload: songs,
    });
  } catch (e) {
    yield put({
      type: GET_SONGS_ERROR,
      payload: e,
    });
  }
}

interface PostSagaAction extends AnyAction {
  payload: {
    music: string;
    result: string;
  };
}

function* postResultSaga(action: PostSagaAction) {
  try {
    yield put({ type: POST_RESULT_REQUEST });
    const outputSong: Object = yield call(
      SongService.postResult,
      action.payload.music,
      action.payload.result
    );
    console.log(outputSong);
    yield put({
      type: POST_RESULT_SUCCESS,
      payload: outputSong,
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
  yield takeEvery(GET_VISIT, getCounts);
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(POST_RESULT, postResultSaga);
}
