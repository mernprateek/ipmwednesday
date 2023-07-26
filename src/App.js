import React, { useState } from 'react';
import { BrowserRouter , Route, Link, Navigate , Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Home from "./Home";
import About from './About';
import Team from "./Team";
import Page from "./Page";
import './App.css';
import Header from './Header';
import Footer from './Footer';



const App = () => { 
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/page" element={<Page/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Logout " element={<Logout  />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
