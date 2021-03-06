import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addBoard } from '../actions/boardActions';

const AddBoard = () => {
    const [isFormOpen, setFormVisible] = useState(false);
    const [title, setText] = useState('');
    const dispatch = useDispatch();

    const openForm = () => { setFormVisible(true); }
    const closeForm = () => { setFormVisible(false); }
    const clearField = () => { setText(''); }

    const addNewList = () => {
        dispatch(addBoard(title));

        closeForm();
        clearField();
    }

    const renderButton = () => (
        <button className="boards__item boards__button" onClick={openForm}>
            + Add another list
        </button>
    )

    const handleFormChange = (e) => {
        setText(e.target.value);
    }

    const renderForm = () => {
        return (
            <div className="card-form">
                <div className="card-form__details">
                    <textarea value={title} onChange={handleFormChange} />
                </div>
                <button onClick={addNewList}
                    className="card-form__button card-form__button_green">
                    Add List
                </button>
                <button className="card-form__button" onClick={closeForm}>Cancel</button>
            </div>);
    }

    return (isFormOpen ? renderForm() : renderButton());
}

export default AddBoard;