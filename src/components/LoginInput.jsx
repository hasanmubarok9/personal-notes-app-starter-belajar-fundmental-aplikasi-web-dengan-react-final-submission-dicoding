import React, { useState } from 'react';

function LoginInput({
  login
}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
      <form onSubmit={onSubmitHandler} className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" value={email} id="email" onChange={onEmailChangeHandler} />
        <label htmlFor="email">Password</label>
        <input type="password" placeholder="password" value={password} id="password" onChange={onPasswordChangeHandler} />
        <button type="submit">Login</button>
      </form>
  )
}

export default LoginInput;
