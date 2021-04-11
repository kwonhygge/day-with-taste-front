import { combineReducers } from 'redux';
import testReducer from './testReducer';
import songReducer from './songReducer';

const rootReducer = combineReducers({
  testReducer,
  songReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
