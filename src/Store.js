import { createStore, applyMiddleware } from 'redux';

//const store = createStore(()=> [],{},applyMiddleware())
//import {createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/Reducer'
//import {persistStore} from 'redux-persist'

const initialSate = {};
const middleWare = [thunk];
const store = createStore(rootReducer, initialSate, applyMiddleware(...middleWare));
//const store = createStore(rootReducer, initialSate);
//const persistor =  persistStore(store, {storage: AsyncStorage})

export default store;
