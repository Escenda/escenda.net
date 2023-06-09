import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './root-reducer.js';

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;