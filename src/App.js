import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/News' element={<News />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;