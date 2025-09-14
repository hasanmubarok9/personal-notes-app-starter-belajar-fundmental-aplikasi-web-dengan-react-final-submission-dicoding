import React, { useState } from 'react';

function RegisterInput({
  register
}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChangeHandler = (event) => {
    setState(event.target.value);
  }

  const onEmailChangeHandler = (event) => {
    setState(event.target.value);
  }

  const onPasswordChangeHandler = (event) => {
    setState(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  }

  return (
      <form onSubmit={onSubmitHandler} className="input-register">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="name" id="name" onChange={onNameChangeHandler} />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="email" onChange={onEmailChangeHandler}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" id="password" onChange={onPasswordChangeHandler}/>
        <button type="submit">Register</button>
      </form>
  )
}

export default RegisterInput;
