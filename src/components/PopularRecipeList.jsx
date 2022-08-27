import React from 'react';
import { useState, useEffect } from 'react';
import { getPopularRecipe } from '../services/recipe-services';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function PopularRecipeList() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const popularRecipeHandler = async () => {
    const recipe = await getPopularRecipe();
    setPopularRecipes(recipe.recipes);
  };
  useEffect(() => {
    popularRecipeHandler();
  }, []);
  return (
    <div>
      <Wraper>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '2rem',
          }}
        >
          {popularRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wraper>
    </div>
  );
}

const Wraper = styled.section`
  margin:5rem auto;
  width: 80%;
  font-family: 'Montserrat', sans-serif;
`;

const Card = styled.div`
  height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 1.5rem;
  text-align:center;

  img {
    border-radius: 1.5rem;
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    z-index: 10;
    bottom: 0%;
    color: white;
    font-weight: 400;
    font-size:16px;
    left: 0;
    width: 100%;
    text-align:center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default PopularRecipeList;
