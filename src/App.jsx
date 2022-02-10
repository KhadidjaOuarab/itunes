import React from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import Spec1 from './Pages/Spec1.jsx'
import { Routes, Route, Link } from "react-router-dom";

function App() {
const dispatch = useDispatch();


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Spec1 />} />
       
      </Routes>
    </div>
  );
}

export default App