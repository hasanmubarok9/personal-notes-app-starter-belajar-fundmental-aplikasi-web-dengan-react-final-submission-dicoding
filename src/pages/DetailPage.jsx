import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiDownload, FiUpload, FiTrash } from 'react-icons/fi';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import { archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';

function DetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <DetailPage id={id} navigate={navigate}/>
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    }

    this.onClickActionHandler = this.onClickActionHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onClickActionHandler() {
    if (this.state.note.archived) {
      unarchiveNote(this.props.id);
    } else {
      archiveNote(this.props.id);
    }
    this.props.navigate('/');
  }

  onDeleteNoteHandler() {
    deleteNote(this.props.id);
    this.props.navigate('/');
  }

  render() {
    const {
      id,
      title,
      body,
      createdAt,
      archived
    } = this.state.note;
    const formattedCreatedAt = showFormattedDate(createdAt);
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p>{formattedCreatedAt}</p>
        <div className="detail-page__body">
          {body}
        </div>
        <div className="detail-page__action">
          <button className="action" type="button" title={archived ? "Aktifkan" : "Arsipkan"} onClick={this.onClickActionHandler}>
            {
              archived ? (
                <FiUpload />
              ) : (
                <FiDownload />
              )
            }
          </button>
          <button className="action" type="button" title="Hapus" onClick={this.onDeleteNoteHandler}>
            <FiTrash />
          </button>
        </div>
      </section>
    )
  }
}

export default DetailPageWrapper;
