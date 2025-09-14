import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <section className="login-page">
      <h2>Login to use app, please.</h2>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="email">Password</label>
        <input type="password" id="password" />
        <button type="button">Login</button>
      </div>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </section>
  )
}

export default LoginPage;

