import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRecipeInformationById } from '../services/recipe-services';
import styled from 'styled-components';

function Detail() {
  const [recipeInformation, setRecipeInformation] = useState({});
  const params = useParams();

  const recipeInformationHandler = async () => {
    const recipe = await getRecipeInformationById(params.id);
    setRecipeInformation(recipe);
  };

  useEffect(() => {
    recipeInformationHandler();
  }, []);
  return (
    <div>
      <Wraper>
        <Picture>
          <img src={recipeInformation.image} alt={recipeInformation.title} />
        </Picture>
        <Instructions>
          <h3>{recipeInformation.title}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: recipeInformation.summary }}
          ></p>
        </Instructions>
      </Wraper>
    </div>
  );
}

const Wraper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

const Picture = styled.div`
  margin-top: 25px;
  width: 45%;
  img {
    border-radius: 20px;
    width: 100%;
  }
`;

const Instructions = styled.div`
  width: 45%;
  margin-top: 10px;
`;

export default Detail;
