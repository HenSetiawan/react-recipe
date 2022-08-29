import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList';


function Cuisine() {
  const params = useParams();
  return (
    <div>
      <RecipeList title={params.country} cuisine={params.country} />
    </div>
  );
}

export default Cuisine;
