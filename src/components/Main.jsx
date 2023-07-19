import React from 'react';
import HomePage from './HomePage.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Main = function ({ name, handleRegister, handleLogin }) {


  return (
    <main className="main">
      {name === 'main' ? <HomePage /> :
        name === 'signup' ? <Register name={name} handleRegister={handleRegister} /> :
          <Login name={name} handleLogin={handleLogin} />
      }
    </main>
  );
};

export default Main;