import { CONNECT_LIST, ADD_BOARD, DISCONNECT_LIST, REMOVE_BOARD, EDIT_BOARD, REMOVE_CONNECTED_LISTS } from './types';


export function addBoard(payload) {
    return dispatch => {
        dispatch({
            type: ADD_BOARD,
            payload: payload,
        })
    }
}

export function removeBoard(payload) {
    return dispatch => {
        dispatch({
            type: REMOVE_BOARD,
            payload: payload,
        })
    }
}


export function editBoard(payload) {
    return dispatch => {
        dispatch({
            type: EDIT_BOARD,
            payload: payload,
        })
    }
}


export function connectList(payload) {
    return dispatch => {
        dispatch({
            type: CONNECT_LIST,
            payload: payload,
        })
    }
}

export function disconnectList(payload) {
    return dispatch => {
        dispatch({
            type: DISCONNECT_LIST,
            payload: payload,
        })
    }
}





