import { put, takeLatest, call } from "redux-saga/effects";
import { getContactSuccess, getContactFailure } from "../actions/contactActions";

import contactAPI from '../api/contactAPI';
import { FETCH_CONTACT } from "../constants";

export function* fetchContact() {
  try {
    const { data } = yield call(contactAPI.getContactList);
    yield put(getContactSuccess(data));
  } catch (e) {
    const error =
      (e.response && e.response.data.error) ||
      "Possible Network error, Please reload!";
    yield put(getContactFailure({ error }));
  }
}

export function* watchFetchContact() {
  yield takeLatest(FETCH_CONTACT, fetchContact);
}
