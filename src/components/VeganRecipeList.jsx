import React from 'react';
import { useState, useEffect } from 'react';
import { getVeganRecipe } from '../services/recipe-services';
import styled from 'styled-components';

function VeganRecipeList() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const recipeHandler = async () => {
    const recipe = await getVeganRecipe();
    setPopularRecipes(recipe.results);
  };
  useEffect(() => {
    recipeHandler();
  }, []);
  return (
    <div>
      <Title>Vegan Choice</Title>
      <Wraper>
        {popularRecipes.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Gradient />
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </Card>
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

const Card = styled.div`
  width: 21%;
  position: relative;
  margin-top: 10px;
  border-radius: 1.5rem;

  img {
    width: 100%;
    display: block;
    border-radius: 1.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }

  h3 {
    position: absolute;
    z-index: 10;
    color: white;
    bottom: 0%;
    font-weight: 400;
    font-size: 16px;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  border-radius: 1.5rem;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default VeganRecipeList;
