import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctor from './page/doctor';
import Biling from './component/bilingpage';
import CounterVisit from './component/countervisit';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/biling-page" element={<Biling/>} />
          <Route path="/counter-vist" element={<CounterVisit/>} />
          <Route path="/biling-page" element={<Biling/>} />
        </Routes>
      </Router>
    </div>
  );
}
