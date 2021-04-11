import { sagas as songsSagas } from './songReducer';

function* rootSaga() {
  yield songsSagas();
}

export default rootSaga;
