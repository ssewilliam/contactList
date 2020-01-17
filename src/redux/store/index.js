import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../middleware";
import rootReducers from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;
