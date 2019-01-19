/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';
import mainSaga from './mainSaga';

export function* rootSagas() {
    yield all([mainSaga()]);
}
