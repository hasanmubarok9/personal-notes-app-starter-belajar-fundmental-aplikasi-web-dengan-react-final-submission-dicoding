import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <div className="input-register">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword"/>
        <button type="button">Register</button>
      </div>
      <p>Sudah punya akun? <Link to="/login">Login di sini</Link></p>
    </section>
  )
}

export default RegisterPage;
