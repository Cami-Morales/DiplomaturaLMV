import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './components/layout/pages/HomePage';
import Ejemplo1 from './components/layout/pages/Ejemplo1';
import Ejemplo2 from './components/layout/pages/Ejemplo2';
import Ejemplo3 from './components/layout/pages/Ejemplo3';
import CargaJson from './components/layout/pages/Ejemplo4';
import DatosApi from './components/layout/pages/Ejemplo5';


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
          <Route path='/ejemplo2' element={<Ejemplo2/>}></Route>
          <Route path='/ejemplo3' element={<Ejemplo3/>}></Route>
          <Route path='/ejemplo4' element={<CargaJson/>}></Route>
          <Route path='/ejemplo5' element={<DatosApi/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
