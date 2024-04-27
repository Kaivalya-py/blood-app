import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.js';

function HomePage() {
  return (
    <div>
      <Header />
      <Main sections={data}/>
    </div>
  );
}

export default HomePage;
