import React from 'react';
import Home from './Home';
import Detail from './Detail';
import Category from '../components/Category';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';

function Pages() {
  return (
    <div>
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cuisine/:country" element={<Cuisine />} />
      </Routes>
    </div>
  );
}

export default Pages;
