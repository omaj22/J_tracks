import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
	  return (
		      <div>
		        <h1>Welcome to J_tracks</h1>
		        <p><Link to="/register">Register</Link> | <Link to="/login">Login</Link></p>
		      </div>
		    );
}

export default HomePage;

