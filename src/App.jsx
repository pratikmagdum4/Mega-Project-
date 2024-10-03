import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Signup from './pages/signup/signup'; // Assuming signup page is in signup folder
import Signup2 from './pages/signup/signup';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup2 />} />
      </Routes>
    </Router>
  );
}

export default App;
