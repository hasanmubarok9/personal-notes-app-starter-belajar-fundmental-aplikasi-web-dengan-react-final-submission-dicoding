import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiDownload, FiUpload, FiTrash } from 'react-icons/fi';
import { showFormattedDate } from '../utils';
import { archiveNote, getNote, unarchiveNote, deleteNote } from '../utils/network-data';

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
    }
    fetchNote();
  }, []);

  function onClickActionHandler() {
    if (note.archived) {
      unarchiveNote(id)
    } else {
      archiveNote(id);
    }
    navigate('/');
  }

  function onDeleteNoteHandler() {
    deleteNote(id);
    navigate('/');
  }

  if (note === undefined) {
    return <p>Note not found</p>
  }
  if (note === null) {
    return (
      <p>Loading...</p>
    )
  }

  const {title, body, createdAt, archived} = note;
  const formattedCreatedAt = showFormattedDate(createdAt);

  return (
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p>{formattedCreatedAt}</p>
        <div className="detail-page__body">
          {body}
        </div>
        <div className="detail-page__action">
          <button className="action" type="button" title={archived ? "Aktifkan" : "Arsipkan"} onClick={onClickActionHandler}>
            {
              archived ? (
                <FiUpload />
              ) : (
                <FiDownload />
              )
            }
          </button>
          <button className="action" type="button" title="Hapus" onClick={onDeleteNoteHandler}>
            <FiTrash />
          </button>
        </div>
      </section>
  );
}

export default DetailPage;
