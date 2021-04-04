import { combineReducers } from 'redux';
import testReducer from './testReducer';
import songs from './songReducer';

const rootReducer = combineReducers({
  testReducer,
  songs,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
