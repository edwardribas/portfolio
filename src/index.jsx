import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.module.scss';

// Pages
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';

// Components
import Header from './components/Header';
import NotFound from './components/NotFound';

// Router DOM
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>    
    <Header/>
    <Routes>
      <Route path='/' element={<Landing title="Edward | Início"/>}/>
      <Route path='/about' element={<About title="Edward | Sobre"/>}/>
      <Route path='/projects' element={<Projects title="Edward | Projetos"/>}/>
      <Route path='/*' element={<NotFound title="Edward | 404"/>}/>
    </Routes>
  </Router>
);

