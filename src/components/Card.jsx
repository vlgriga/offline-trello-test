import React from 'react';
import { removeCard } from '../actions/cardActions';
import { disconnectCard } from '../actions/listActions';
import { useDispatch } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, listID, index }) => {
    const dispatch = useDispatch()

    const deleteCard = () => {
        dispatch(removeCard(card.id));
        dispatch(disconnectCard({ listID, cardID: card.id }));
    }

    return (
        <Draggable draggableId={String(card.id)} index={index}>
            {provided => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="list__card">
                    <span className="card__title">{card.title}</span>
                    <button onClick={deleteCard} className="card__button card__button_remove">X</button>
                </div>
            )}
        </Draggable>);
}

export default Card;
