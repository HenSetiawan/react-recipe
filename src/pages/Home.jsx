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
        <Route
          path="/italian-food"
          element={
            <RecipeList
              recipeService={getCuisineRecipe}
              country="Italian"
              title="Italian Food Recipe"
            />
          }
        />

        <Route
          path="/korean-food"
          element={
            <RecipeList
              recipeService={getCuisineRecipe}
              country="Korean"
              title="Korean Food Recipe"
            />
          }
        />
        <Route
          path="/american-food"
          element={
            <RecipeList
              recipeService={getCuisineRecipe}
              country="American"
              title="American Food Recipe"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Home;
