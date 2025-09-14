import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage /> } />
          <Route path="/register" element={<RegisterPage /> } />
          <Route path="/" element={<HomePage /> } />
          <Route path="/archives" element={<ArchivesPage /> } />
          <Route path="/notes/:id" element={<DetailPage /> } />
          <Route path="/add" element={<AddPage /> } />
          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
