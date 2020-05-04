import { ADD_CARD, REMOVE_CARD, REMOVE_CONNECTED_CARDS } from './types';

export function addCard(newCard) {
    return dispatch => {
        dispatch({
            type: ADD_CARD,
            payload: newCard,
        });
    }
}

export function removeCard(cardID) {
    return dispatch => {
        dispatch({
            type: REMOVE_CARD,
            payload: cardID,
        });
    }
}

export function removeConnectedCards(connectedCards) {
    return dispatch => {
        dispatch({
            type: REMOVE_CONNECTED_CARDS,
            payload: connectedCards,
        })
    }
}