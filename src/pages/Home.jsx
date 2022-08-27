import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import RecipeList from '../components/RecipeList';
import { getCuisineRecipe, getVeganRecipe } from '../services/recipe-services';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <PopularRecipeList />
      <Routes>
        <Route
          path="/"
          element={
            <RecipeList recipeService={getVeganRecipe} title="Vegan Picks" />
          }
        />
        <Route
          path="/thai-food"
          element={
            <RecipeList
              recipeService={getCuisineRecipe}
              country="Thai"
              title="Thai Food Recipe"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Home;
