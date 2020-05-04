import React from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeList } from '../actions/listActions';
import { removeConnectedCards } from '../actions/cardActions';
import { disconnectList } from '../actions/boardActions';
import { Droppable } from 'react-beautiful-dnd';

const List = ({ listItem, boardID }) => {
    const dispatch = useDispatch();
    const connectedCards = listItem && listItem.connectedCards;
    const state = useSelector(state => state);
    const showCards = connectedCards.map(connectedCard => {
        return state.cards.find(card => card.id === connectedCard);
    });

    const deleteList = () => {
        const list = state.lists.find(list => list.id === listItem.id);
        const { connectedCards = [] } = list;

        dispatch(removeList(listItem.id));
        dispatch(removeConnectedCards(connectedCards));
        dispatch(disconnectList({ boardID, listID: listItem.id }));
    }

    return (
        <div className="list">
            <div className="list__header">
                <span className="list__title">{listItem.title}</span>
                <button className="list__button list__button_remove" onClick={deleteList}>X</button>
            </div>

            <Droppable droppableId={listItem.id}>
                {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="list__container">
                        {showCards.map((cardItem, index) =>
                            <Card card={cardItem} listID={listItem.id} key={cardItem.id} index={index} />)}
                        <AddCard listID={listItem.id} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default List;