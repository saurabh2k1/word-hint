import React from 'react';

import './App.css';
import Div100vh from 'react-div-100vh';
import { Navbar } from './components/navbar/Navbar';
import { Cell } from './components/Grid/Cell';

function App() {
  return (
    <Div100vh>
      <div className='flex h-full flex-col'>
        <Navbar />
        <Cell />
      </div>
    </Div100vh>
  );
}

export default App;
