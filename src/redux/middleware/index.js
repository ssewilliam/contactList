import { all } from "redux-saga/effects";
import { watchFetchContact } from "./contactSaga";
export default function* rootSagas() {
  yield all([
    watchFetchContact()
  ])
}
