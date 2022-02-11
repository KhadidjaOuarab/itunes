import React from 'react'
import './App.css'
import Spec1 from './Pages/Spec1.jsx'
import { Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Spec1 />} />
       
      </Routes>
    </div>
  );
}

export default App