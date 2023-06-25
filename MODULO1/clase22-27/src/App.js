import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './components/layout/pages/HomePage';
import Ejemplo1 from './components/layout/pages/Ejemplo1';

function App() {
  return (
    <div className="App">
      {/*<Header></Header> */}
      <Header />
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
