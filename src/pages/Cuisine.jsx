import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import { getCuisineRecipe } from '../services/recipe-services';

function Cuisine() {
  const params = useParams();
  return (
    <div>
      <RecipeList
        title={params.country}
        cuisine={params.country}
        recipeService={getCuisineRecipe}
      />
    </div>
  );
}

export default Cuisine;
