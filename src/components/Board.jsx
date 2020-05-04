import React from 'react';
import List from './List';
import AddList from './AddList';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortCard } from '../actions/listActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Board = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { boardID } = useParams();
    const { boards, lists } = state;
    const board = boards.find(boardItem => boardItem.id === boardID) || {};

    if(Object.keys(board).length === 0) {
        return <h1>Cannot find board</h1>
    }

    const { title, connectedLists, id } = board;

    const showList = lists.filter(listItem => connectedLists.indexOf(listItem.id) > -1) || [];


    const onDragEnd = (result) => {
        const { source, draggableId, destination } = result;

        dispatch(sortCard({
            listID: source.droppableId,
            targetListID: destination.droppableId,
            currentKey: source.index,
            targetKey: destination.index,
            cardID: draggableId,
        }));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
                <div className="board__title">{title}</div>
                <div className="board__container">
                    {showList.map(listItem =>
                        <List listItem={listItem} boardID={id} key={listItem.id} />)}
                    <AddList boardID={id} />
                </div>
            </div>
        </DragDropContext>

    )
}

export default Board;
