// src/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'normal', // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Later: Send to backend or localStorage
  };

  return (
    <div className="container mt-4">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded shadow">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select name="role" onChange={handleChange} className="form-select">
            <option value="normal">Normal User</option>
            <option value="builder">Builder/Company</option>
            <option value="agent">Agent</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
