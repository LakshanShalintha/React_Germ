import React, { useState } from 'react';
import './Sign_Log.css';

function LogIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
    setShowPopup(true);  // Show the popup message
  };

  return (
    <div className="background">
      <div className="container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username Or Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {showPopup && (
          <div className="popup">
            <p>Thank you!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogIn;
