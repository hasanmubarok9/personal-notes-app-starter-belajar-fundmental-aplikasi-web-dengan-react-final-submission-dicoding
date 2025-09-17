import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  } 

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.innerHTML);
  }

  const onSubmitEventHandler = () => {
    addNote({
      title,
      body
    });

    setTitle('');
    setBody('');
  }

  return (
      <>
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={onTitleChangeEventHandler}/>
          <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah ...." contentEditable onInput={onBodyChangeEventHandler} />
        </div>
        <div className="add-new-page__action">
          <button className="action" type="button" title="Simpan" onClick={onSubmitEventHandler}>
            <FiCheck />
          </button>
        </div>
      </>
  )

}

export default NoteInput;
