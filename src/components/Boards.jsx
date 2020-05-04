import React from 'react';
import { useSelector } from 'react-redux';
import AddBoard from './AddBoard';
import BoardsCard from './BoardCard';

const Boards = () => {
    const boardsList = useSelector(state => state.boards);

    return (
        <div className="boards__list">
            {boardsList.map(boardCard =>
                <BoardsCard board={boardCard} key={boardCard.id} />
            )}
            <AddBoard />
        </div>
    )
}

export default Boards;