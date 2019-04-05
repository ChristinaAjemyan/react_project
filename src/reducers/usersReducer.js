import {FETCH_USER, SELECT_USER} from '../actions/types';

const initialState = {
    items: [],
    user: {},
    userId: 0
};

export default function(state=initialState, action){
    switch (action.type) {
        case FETCH_USER:
         return {
            ...state,
            user: action.payload 
         }
        case SELECT_USER:
         return {
            ...state,
            userId: action.payload
         }   
        default:
         return state;
    }


}