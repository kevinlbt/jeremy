import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.css';
import Home from './pages/Home';
import Realisation from './pages/Realisation';
import Youtube from './pages/youtube';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Mentions from './pages/Mentions'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/realisation' Component={Realisation}/>
        <Route path='/youtube' Component={Youtube}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/mentions' Component={Mentions} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
