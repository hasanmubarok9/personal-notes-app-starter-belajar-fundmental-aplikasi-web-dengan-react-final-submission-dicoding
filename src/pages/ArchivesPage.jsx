import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/network-data';

function ArchivesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '');
  const { locale } = useContext(LocaleContext);

  const filteredNotes = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    if (!k) return notes;
    return notes.filter(note => note.title.toLowerCase().includes(k));
  }, [notes, keyword]);

  useEffect(() => {
    const fetchArchiveNotes = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }
    fetchArchiveNotes();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  return (
      <main>
        <section className="archives-page">
          <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes' }</h2>
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
        </section>
      </main>
  )
}

export default ArchivesPage;
