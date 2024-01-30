import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/common/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/common/Registration/RegistrationPage';
import RegistrationHandler from './pages/common/Registration/RegistrationHandler';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/registration' element={<RegistrationHandler/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
