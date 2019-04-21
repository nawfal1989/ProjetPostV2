import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './Reducers/Reducer'
const initialSate = {};
const middleWare = [thunk];
const store = createStore(rootReducer, initialSate, applyMiddleware(...middleWare));


export default store;
