import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
