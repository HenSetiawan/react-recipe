import React from 'react';
import PopularRecipeList from '../components/PopularRecipeList';
import RecipeList from '../components/RecipeList';
import { getVeganRecipe } from '../services/recipe-services';
import { useParams } from 'react-router-dom';

function Home() {
  const params = useParams();
  return (
    <div>
      <PopularRecipeList />
      <RecipeList
        title={params.country}
        cuisine={params.country}
        recipeService={getVeganRecipe}
      />
    </div>
  );
}

export default Home;
