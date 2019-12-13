import React from 'react';
import './App.css';
import NavBar from './home/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './home/main/main';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
