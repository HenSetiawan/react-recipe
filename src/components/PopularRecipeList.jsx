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
              <SplideSlide>
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
  margin: 4rem 0rem;
`;

const Card = styled.div`
  height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  text-align: text-center;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    display:block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    z-index: 10;
    bottom: 0%;
    color: white;
    text-align: text-center;
    width: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    heigth: 40%;
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
