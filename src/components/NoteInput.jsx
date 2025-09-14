import React from 'react';
import { FiCheck } from 'react-icons/fi';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  };

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML 
      }
    });
  }

  onSubmitEventHandler() {
    this.props.addNote(this.state);

    // reset editor
    if (this.bodyRef.current) this.bodyRef.current.innerHTML = '';
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const {
      title,
      body
    } = this.state;

    return (
      <>
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={this.onTitleChangeEventHandler}/>
          <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah ...." contentEditable onInput={this.onBodyChangeEventHandler} />
        </div>
        <div className="add-new-page__action">
          <button className="action" type="button" title="Simpan" onClick={this.onSubmitEventHandler}>
            <FiCheck />
          </button>
        </div>
      </>
    )
  }
}

export default NoteInput;
