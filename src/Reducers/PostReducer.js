import {FETCH_POSTS} from '../Actions/Types';

const initialState = {
  items:[]
}

let postReducer;

export default postReducer = function(state=initialState, action){
  console.log('reducerAA')
  switch(action.type){
    case 'FETCH_POSTS':
      return {
        ...state,
        items:action.payload
      }
      break;
    default:
      return state;
  }
}
