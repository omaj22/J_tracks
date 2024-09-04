import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';

function App() {
	  return (
		      <Router>
		        <div className="App">
		          <Switch>
		            <Route path="/" exact component={HomePage} />
		            <Route path="/register" component={Register} />
		            <Route path="/login" component={Login} />
		          </Switch>
		        </div>
		      </Router>
		    );
}

export default App;

