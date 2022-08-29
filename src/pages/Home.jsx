import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import RecipeList from '../components/RecipeList';
import { getVeganRecipe } from '../services/recipe-services';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      {/* <RecipeList recipeService={getVeganRecipe} title="Vegan Picks" /> */}
    </div>
  );
}

export default Home;
