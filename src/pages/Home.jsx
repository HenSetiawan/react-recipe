import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import RecipeList from '../components/RecipeList';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      <RecipeList />
      <Routes>
        <Route path="/" element={RecipeList} />
      </Routes>
    </div>
  );
}

export default Home;
