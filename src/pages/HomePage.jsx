import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

function HomePageWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return  <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} navigate={navigate} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || ''
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      }
    })

    this.props.keywordChange(keyword);
  }

  onAddNewNoteHandler() {
    this.props.navigate('/add');
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    });

    return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
          {
            notes.length ? (
              <NoteList notes={notes} />
            ) : (
              <section className="notes-list-empty">
                <p className="notes-list__empty">Tidak ada catatan</p>
              </section>
            )
          }
          <div className="homepage__action">
            <button className="action" type="button" title="Tambah" onClick={this.onAddNewNoteHandler}>
            <FiPlus />
            </button>
          </div>
        </section>
      </main>
    )
  }
}

export default HomePageWrapper;
