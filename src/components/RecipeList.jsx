import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function RecipeList(props) {
  const [foodRecipes, setFoodRecipes] = useState([]);
  const recipeHandler = async () => {
    const recipe = await props.recipeService(props.country);
    setFoodRecipes(recipe.results);
  };
  useEffect(() => {
    recipeHandler();
  }, [foodRecipes]);
  return (
    <div>
      <Title>{props.title}</Title>
      <Wraper>
        {foodRecipes.map((recipe) => {
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

export default RecipeList;
