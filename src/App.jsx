import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headers from './Headers';
import Socialmedia from './Socialmedia';
import Cards from './cards';
import Carousel from './Carousel';
import UploadPage from './UploadPage';
import ArticleDetails from './ArticleDetails';

function App() {
  return (
    <Router>
      <div className="main">
        <Headers />
        <Routes>
          <Route path="/" element={<>
            <Cards />
            <Carousel />
          </>} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
        <Socialmedia />
      </div>
    </Router>
  );
}

export default App;
