import { ADD_CARD, REMOVE_CARD, REMOVE_CONNECTED_CARDS } from '../actions/types';


const initialState = [
    {
        id: 'card_01',
        title: "Card 1"
    },
    {
        id: 'card_02',
        title: "Card 2"
    },
    {
        id: 'card_03',
        title: "Card 3"
    },
    {
        id: 'card_04',
        title: "Card 4"
    },
];


const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...state, action.payload];

        case REMOVE_CARD:
            return [...state.filter(cardItem => cardItem.id !== action.payload)];

        case REMOVE_CONNECTED_CARDS:
            return [...state.filter(list => action.payload.indexOf(list.id) === -1)];

        default:
            return state;
    }
}

export default cardReducer;