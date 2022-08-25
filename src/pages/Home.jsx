import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import VeganRecipeList from '../components/VeganRecipeList';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      <Routes>
        <Route path="/" element={<VeganRecipeList />} />
      </Routes>
    </div>
  );
}

export default Home;
