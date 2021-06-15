import { combineReducers } from 'redux';
import songs, { SongsState } from './songReducer';

export interface RootState {
  songs: SongsState;
}

const rootReducer = combineReducers({
  songs,
});

export default rootReducer;
