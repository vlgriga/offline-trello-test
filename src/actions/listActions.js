import { ADD_LIST, CONNECT_CARD, REMOVE_LIST, DISCONNECT_CARD, SORT_CARD, REMOVE_CONNECTED_LISTS } from './types';

export function addList(payload) {
    return dispatch => {
        dispatch({
            type: ADD_LIST,
            payload: payload
        })
    }
}

export function removeList(listID) {
    return dispatch => {
        dispatch({
            type: REMOVE_LIST,
            payload: listID,
        })
    }
}


export function sortCard(payload) {
    return dispatch => {
        dispatch({
            type: SORT_CARD,
            payload: payload,
        })
    }
}

export function connectCard(payload) {
    return dispatch => {
        dispatch({
            type: CONNECT_CARD,
            payload: payload,
        })
    }
}

export function disconnectCard(payload) {
    return dispatch => {
        dispatch({
            type: DISCONNECT_CARD,
            payload: payload,
        })
    }
}

export function removeConnectedLists(payload) {
    return dispatch => {
        dispatch({
            type: REMOVE_CONNECTED_LISTS,
            payload: payload,
        })
    }
}