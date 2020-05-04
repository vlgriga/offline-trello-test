import generateUniqueId from 'generate-unique-id';
import { CONNECT_LIST, DISCONNECT_LIST, ADD_BOARD, REMOVE_BOARD, EDIT_BOARD } from '../actions/types';

const initialState = [
    {
        id: 'board_01',
        title: 'Main board',
        connectedLists: ['list_01', 'list_02']
    },
    {
        id: 'board_02',
        title: 'Second board',
        connectedLists: ['list_01']
    }
]

const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_BOARD: {
            const newBoard = { id: generateUniqueId(), title: action.payload, connectedLists: [] };
            return [...state, newBoard];
        }

        case REMOVE_BOARD: {
            return [...state.filter(board => board.id !== action.payload)];
        }

        case EDIT_BOARD: {
            const stateCopy = [...state];
            const { boardID, boardTitle } = action && action.payload;
            const boardCard = stateCopy.find(boardCard => boardCard.id === boardID);
            boardCard.title = boardTitle;
            return [...stateCopy];
        }

        case CONNECT_LIST: {
            const { boardID, listID } = action && action.payload;
            const board = state.find(boardItem => boardItem.id === boardID);
            const connectedLists = board.connectedLists.concat([listID]);
            return [...state.filter(board => board.id !== boardID),
            { ...board, connectedLists }];
        }

        case DISCONNECT_LIST: {
            const { boardID, listID } = action && action.payload;
            const board = state.find(boardItem => boardItem.id === boardID);
            const connectedLists = board.connectedLists.filter(list => list !== listID);
            return [...state.filter(board => board.id !== boardID),
            { ...board, connectedLists }];
        }

        default:
            return state;
    }
}

export default boardReducer;