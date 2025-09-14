import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/network-data';

function HomePage({ defaultKeyword, kewyrod }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '');

  const filteredNotes = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    if (!k) return notes;
    return notes.filter(note => note.title.toLowerCase().includes(k));
  }, [notes, keyword]);

  useEffect(() => {
    const fetchActiveNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data)
    }
    fetchActiveNotes();
  }, [])

  console.log("nilai filteredNotes: ", filteredNotes);

  function onKeywordChangeHandler(newKeyword) {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  }

  function onAddNewNoteHandler() {
    navigate('/add');
  }

  return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          {
            filteredNotes.length ? (
              <NoteList notes={filteredNotes} />
            ) : (
              <section className="notes-list-empty">
                <p className="notes-list__empty">Tidak ada catatan</p>
              </section>
            )
          }
          <div className="homepage__action">
            <button className="action" type="button" title="Tambah" onClick={onAddNewNoteHandler}>
            <FiPlus />
            </button>
          </div>
        </section>
      </main>
  )
  
}


export default HomePage;
