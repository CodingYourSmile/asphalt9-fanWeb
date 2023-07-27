import React from 'react';
import './App.css';

import { About, AuthorWords, Awards, Findus, Footer, Gallery, Header, Menu, Trailer, Welcome } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <AuthorWords/>
      <Trailer/>
      <Awards/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App