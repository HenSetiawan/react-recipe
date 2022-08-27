import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getVeganRecipe } from '../services/recipe-services';

function ThaiRecipeList() {
  const [ThaiFoodRecipes, setThaiFoodRecipes] = useState([]);
  const recipeHandler = async () => {
    const recipe = await getVeganRecipe();
    setThaiFoodRecipes(recipe.results);
  };
  useEffect(() => {
    recipeHandler();
  }, []);
  return (
    <div>
      <Title>Thai Food</Title>
      <Wraper>
        {ThaiFoodRecipes.map((recipe) => {
          return (
            <RecipeCard key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </RecipeCard>
          );
        })}
      </Wraper>
    </div>
  );
}

const Wraper = styled.section`
  margin: 2rem auto;
  width: 80%;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

export default ThaiRecipeList;
