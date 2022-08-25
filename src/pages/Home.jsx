import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import RecipeList from '../components/RecipeList';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      <RecipeList />
    </div>
  );
}

export default Home;
