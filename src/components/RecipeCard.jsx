import React from 'react';
import styled from 'styled-components';

function RecipeCard(props) {
  return (
    <Card>
      <Gradient />
      {props.children}
    </Card>
  );
}

const Gradient = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  border-radius: 1.5rem;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
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

export default RecipeCard;
