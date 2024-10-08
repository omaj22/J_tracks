import React, { useState } from 'react';

function Register() {
	  const [username, setUsername] = useState('');
	  const [password, setPassword] = useState('');

	  const handleSubmit = async (e) => {
		      e.preventDefault();

		      const response = await fetch('/register', {
			            method: 'POST',
			            headers: {
					            'Content-Type': 'application/json',
					          },
			            body: JSON.stringify({ username, password }),
			          });

		      const data = await response.json();
		      if (response.ok) {
			            alert('Registration successful');
			          } else {
					        alert(data.error);
					      }
		    };

	  return (
		      <div>
		        <h2>Register</h2>
		        <form onSubmit={handleSubmit}>
		          <input
		            type="text"
		            placeholder="Username"
		            value={username}
		            onChange={(e) => setUsername(e.target.value)}
		            required
		          />
		          <input
		            type="password"
		            placeholder="Password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            required
		          />
		          <button type="submit">Register</button>
		        </form>
		      </div>
		    );
}

export default Register;

