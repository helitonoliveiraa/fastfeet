import { all, takeLatest, call, put } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.email === 'admin@fastfeet.com') {
    console.tron.error('Usuário não é um adim');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/delivery');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
