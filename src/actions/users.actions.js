import {FETCH_USER, SELECT_USER} from './types';
import RequestService from '../requests'

const requestService = new RequestService()

export const fetchUser=(id)=> dispatch=>{
    requestService.getUserById(id)
        .then(res=>{
            dispatch({
                type: FETCH_USER,
                payload: res.data[0]
            })
        })
}
export const selectUser=(id)=> dispatch=>{
    dispatch({
        type: SELECT_USER,
        payload: id
    })
}
