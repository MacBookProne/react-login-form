import React from 'react';
import './App.css';
import Navigation from './Layout/Header/Navigation';
import LoginForm from './loginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components and styling

function App() {
  return (
     // A div with a class of "App" to style the whole app
    <div className="App">
      <Navigation />
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
// Exporting the App component