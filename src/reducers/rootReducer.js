import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import listReducer from './listReducer';
import cardReducer from './cardReducer';

export const rootReducer = combineReducers({
    boards: boardReducer,
    lists: listReducer,
    cards: cardReducer,
});