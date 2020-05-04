import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCard } from '../actions/cardActions';
import { connectCard } from '../actions/listActions';
import generateUniqueId from 'generate-unique-id';

const AddCard = ({ listID }) => {
    const [isFormOpen, setFormVisible] = useState(false);
    const [title, setText] = useState('');
    const dispatch = useDispatch();

    const openForm = () => { setFormVisible(true); }
    const closeForm = () => { setFormVisible(false); }
    const clearField = () => { setText(''); }

    const addNewCard = () => {
        const id = generateUniqueId();

        dispatch(addCard({ id: id, title: title }));
        dispatch(connectCard({ cardID: id, listID: listID }));
        closeForm();
        clearField();
    }

    const renderButton = () => (
        <button className="list__card-button" onClick={openForm}>
            + Add another card
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
                <button onClick={addNewCard}
                    className="card-form__button card-form__button_green">
                    Add Card
                </button>
                <button className="card-form__button" onClick={closeForm}>Cancel</button>
            </div>);
    }

    return (isFormOpen ? renderForm() : renderButton());
}

export default AddCard;