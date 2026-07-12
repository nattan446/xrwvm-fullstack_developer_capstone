import React, { useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering user');
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
