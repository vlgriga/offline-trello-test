import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { removeBoard, editBoard } from '../actions/boardActions';
import { removeConnectedLists } from '../actions/listActions';
import { removeConnectedCards } from '../actions/cardActions';

const BoardsCard = ({ board }) => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.lists);
    const [isEditMode, setEditMode] = useState(false);
    const [boardTitle, setBoardTitle] = useState('');

    const editBoardTitle = () => {
        if (boardTitle) {
            dispatch(editBoard({ boardID: board.id, boardTitle: boardTitle }));
        }
        setEditMode(false);
        setBoardTitle('');
    }

    const deleteBoard = (boardID) => {
        const connectedLists = board.connectedLists || [];
        const connectedCards = [];
        const connectedListsObjects = lists.filter(listItem => connectedLists.indexOf(listItem.id) !== -1) || [];
        connectedListsObjects.map(listItem => listItem.connectedCards)
            .map(cardArray => connectedCards.push(...cardArray));

        dispatch(removeBoard(boardID));
        dispatch(removeConnectedLists(connectedLists));
        dispatch(removeConnectedCards(connectedCards));
    }

    const boardTitleHandler = (e) => {
        setBoardTitle(e.target.value);
    }

    const renderTitle = (board) => (
        <>
            <Link className="boards__title truncate" to={board.id}>
                {board.title}
            </Link>
            <div className="boards__actions">
                <button onClick={() => setEditMode(true)}>edit</button>
                <button onClick={() => deleteBoard(board.id)}>remove</button>
            </div>
        </>
    )

    const renderEditForm = () => (
        <>
            <input value={boardTitle} onChange={boardTitleHandler} />
            <div className="boards__actions">
                <button onClick={editBoardTitle}>Submit</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
        </>
    )

    return (
        <div className="boards__item">
            {isEditMode
                ? renderEditForm()
                : renderTitle(board)
            }
        </div>
    )
}

export default BoardsCard;