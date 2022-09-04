import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRecipeInformationById } from '../services/recipe-services';

function Detail() {
  const [recipeInformation, setRecipeInformation] = useState({});
  const params = useParams();

  const recipeInformationHandler = async () => {
    const recipe = await getRecipeInformationById(params.id);
    setRecipeInformation(recipe);
    console.log(recipeInformation);
  };

  useEffect(() => {
    recipeInformationHandler();
  }, []);
  return <div>Detail {params.id}</div>;
}

export default Detail;
