import {
  RandomMusicResponseType,
  RecommendationResponseType,
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
  result: Result | null;
  randomMusic: RandomMusicResponseType | null;
  loading: boolean;
  recommendation: RecommendationResponseType | null;
  error: Error | null;
}
const initialState: SongsState = {
  songs: null,
  result: null,
  randomMusic: null,
  recommendation: null,
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
const SET_RESULT_REQUEST = 'SET_RESULT_REQUEST' as const;
const SET_RESULT = 'SET_RESULT' as const;
const SET_SONGS_REQUEST = 'SET_SONGS_REQUEST' as const;
const SET_SONGS = 'SET_SONGS' as const;
const GET_RECOMMENDATION = 'GET_RECOMMENDATION' as const;
const GET_RECOMMENDATION_REQUEST = 'GET_RECOMMENDATION_REQUEST' as const;
const GET_RECOMMENDATION_SUCCESS = 'GET_RECOMMENDATION_SUCCESS' as const;
const GET_RECOMMENDATION_ERROR = 'GET_RECOMMENDATION_ERROR' as const;
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
export const setResultRequest = (result: Result) => {
  return {
    type: SET_RESULT_REQUEST,
    payload: result,
  };
};
export const setResult = (result: Result) => {
  return {
    type: SET_RESULT,
    payload: result,
  };
};
export const setSongs = (songs: Song[]) => {
  return {
    type: SET_SONGS,
    payload: songs,
  };
};
export const postResult = (result: Result) => ({
  type: POST_RESULT,
  payload: { result },
});
export const postResultRequest = () => ({
  type: POST_RESULT_REQUEST,
});
export const postResultSuccess = (randomMusic: RandomMusicResponseType) => ({
  type: POST_RESULT_SUCCESS,
  payload: randomMusic,
});
export const postResultError = (e: AxiosError) => ({
  type: POST_RESULT_ERROR,
  payload: e,
});
export const getRecommendation = (randomMusicId: string) => ({
  type: GET_RECOMMENDATION,
  payload: { randomMusicId },
});
export const getRecommendationRequest = () => ({
  type: GET_RECOMMENDATION_REQUEST,
});
export const getRecommendationSuccess = (
  recommendation: RecommendationResponseType
) => ({
  type: GET_RECOMMENDATION_SUCCESS,
  payload: recommendation,
});
export const getRecommendationError = (e: AxiosError) => ({
  type: GET_RECOMMENDATION_ERROR,
  payload: e,
});
type SongsAction =
  | ReturnType<typeof getSongsRequest>
  | ReturnType<typeof getSongsSuccess>
  | ReturnType<typeof getSongsError>
  | ReturnType<typeof postResultRequest>
  | ReturnType<typeof postResultSuccess>
  | ReturnType<typeof postResultError>
  | ReturnType<typeof setResultRequest>
  | ReturnType<typeof getRecommendationRequest>
  | ReturnType<typeof getRecommendationSuccess>
  | ReturnType<typeof getRecommendationError>
  | ReturnType<typeof setResult>
  | ReturnType<typeof setSongs>;
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
    case GET_RECOMMENDATION_REQUEST:
      return {
        ...state,
        loading: true,
        recommendation: state.recommendation,
        error: null,
      };
    case GET_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        loading: false,
        recommendation: action.payload,
        error: null,
      };
    case GET_RECOMMENDATION_ERROR:
      return {
        ...state,
        loading: false,
        songs: null,
        error: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
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
interface SetResultSagaAction extends AnyAction {
  payload: {
    result: Result;
  };
}
function* setResultSaga(action: SetResultSagaAction) {
  try {
    yield put({ type: SET_RESULT, payload: action.payload });
  } catch (e) {
    console.log(e);
  }
}
interface SetSongsSagaAction extends AnyAction {
  payload: {
    songs: Song[];
  };
}
function* setSongsSaga(action: SetSongsSagaAction) {
  try {
    yield put({ type: SET_SONGS, payload: action.payload });
  } catch (e) {
    console.log(e);
  }
}
interface PostResultSagaAction extends AnyAction {
  payload: {
    result: Result;
  };
}
function* postResultSaga(action: PostResultSagaAction) {
  try {
    yield put({ type: POST_RESULT_REQUEST });
    const randomMusicResponse: RandomMusicResponseType = yield call(
      SongService.postResult,
      action.payload.result
    );
    yield put({
      type: POST_RESULT_SUCCESS,
      payload: randomMusicResponse,
    });
  } catch (e) {
    yield put({
      type: POST_RESULT_ERROR,
      payload: e,
    });
  }
}
interface GetRecommendationSagaAction extends AnyAction {
  payload: {
    randomMusicId: string;
  };
}

function* getRecommendationSaga(action: GetRecommendationSagaAction) {
  try {
    yield put({ type: GET_RECOMMENDATION_REQUEST });
    const recommendation: RecommendationResponseType = yield call(
      SongService.getRecommendation,
      action.payload.randomMusicId
    );
    yield put({
      type: GET_RECOMMENDATION_SUCCESS,
      payload: recommendation,
    });
  } catch (e) {
    yield put({
      type: GET_RECOMMENDATION_ERROR,
      payload: e,
    });
  }
}
// [project] saga 함수를 실행하는 액션과 액션 생성 함수를 작성했다.
export function* sagas() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(POST_RESULT, postResultSaga);
  yield takeEvery(SET_RESULT_REQUEST, setResultSaga);
  yield takeEvery(SET_SONGS_REQUEST, setSongsSaga);
  yield takeEvery(GET_RECOMMENDATION, getRecommendationSaga);
}
