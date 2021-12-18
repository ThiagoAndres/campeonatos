//import logo from './logo.svg';
import './App.css';
import { Registro } from './componentes/Registro';
import { Partidos } from './componentes/Partidos';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;