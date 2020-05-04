import { ADD_LIST, REMOVE_LIST, CONNECT_CARD, DISCONNECT_CARD, SORT_CARD, REMOVE_CONNECTED_LISTS } from '../actions/types';

const initialState = [
    {
        id: 'list_01',
        title: 'Last Episode',
        connectedCards: ['card_01', 'card_02', 'card_03']
    },
    {
        id: 'list_02',
        title: 'Second Episode',
        connectedCards: ['card_04']
    }
]



const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_LIST:
            const { id, title } = action && action.payload;

            const newList = {
                id: id,
                title: title,
                connectedCards: [],
            }
            return [...state, newList];


        case REMOVE_LIST:
            return [...state.filter(listItem => listItem.id !== action.payload)];


        case SORT_CARD: {
            const stateCopy = [...state];
            const { listID, targetListID, currentKey, targetKey } = action && action.payload;

            const baseList = stateCopy.find(list => list.id === listID);
            const card = baseList.connectedCards.splice(currentKey, 1);

            if (targetListID === listID) {
                baseList.connectedCards.splice(targetKey, 0, ...card);
            } else {
                const targetList = stateCopy.find(list => list.id === targetListID);
                targetList.connectedCards.splice(targetKey, 0, ...card);
            }

            return [...stateCopy];
        }


        case CONNECT_CARD: {
            const stateCopy = [...state];
            const { cardID, listID } = action && action.payload;
            const list = stateCopy.find(listItem => listItem.id === listID);
            list.connectedCards.push(cardID);

            return [...stateCopy];
        }

        case DISCONNECT_CARD: {
            const stateCopy = [...state];
            const { cardID, listID } = action && action.payload;
            const list = stateCopy.find(listItem => listItem.id === listID);
            list.connectedCards = list.connectedCards.filter(card => card !== cardID);
            return [...stateCopy];
        }

        case REMOVE_CONNECTED_LISTS: {
            const connectedLists = action && action.payload;
            return [...state.filter(listItem => connectedLists.indexOf(listItem.id) === -1)];
        }

        default:
            return state;
    }
}

export default listReducer;