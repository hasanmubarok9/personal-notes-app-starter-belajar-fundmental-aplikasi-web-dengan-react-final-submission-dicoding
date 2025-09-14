import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>404</h2>
      <p>Halaman tidak ditemukan :-(, </p>
      <p><Link to="/">Kembali ke halaman utama</Link></p>
    </section>
  )
}

export default NotFoundPage;
