import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';
import ToggleLocale from './components/ToggleLocale';
import ToggleTheme from './components/ToggleTheme';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState('light');
  const [locale, setLocale] = useState('id');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }
    fetchUserLogged();

  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  const toggleLocale = () => {
    setLocale((prevLocale) => prevLocale === 'id' ? 'en' : 'id');
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{
        theme,
        toggleTheme
      }}>
        <LocaleProvider value={{
          locale,
          toggleLocale
        }}>
          <div className="app-container">
            <header>
              <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
            <Navigation />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />}/>
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider value={{
      theme,
      toggleTheme
    }}>
      <LocaleProvider value={{
        locale,
        toggleLocale
      }}>
        <div className="app-container">
          <header>
            <h1><Link to="/">{ locale === 'id' ? 'Aplikasi Catatan' : 'Notes App' }</Link></h1>
            <Navigation />
            <ToggleLocale />
            <ToggleTheme />
            <button className="button-logout" onClick={onLogout}><FiLogOut /> {authedUser.name}</button>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage /> } />
              <Route path="/archives" element={<ArchivesPage /> } />
              <Route path="/notes/:id" element={<DetailPage /> } />
              <Route path="/add" element={<AddPage /> } />
              <Route path="*" element={<NotFoundPage /> } />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
