import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import EmployeeList from './pages/employeeList/EmployeeList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/list" element={<EmployeeList />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
