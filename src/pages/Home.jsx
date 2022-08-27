import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import VeganRecipeList from '../components/VeganRecipeList';
import ThaiRecipeList from '../components/ThaiRecipeList';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      <Routes>
        <Route path="/" element={<VeganRecipeList />} />
        <Route path="/thai-food" element={<ThaiRecipeList />} />
      </Routes>
    </div>
  );
}

export default Home;
