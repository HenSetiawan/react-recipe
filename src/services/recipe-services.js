const apiKey = process.env.REACT_APP_API_KEY;

const getPopularRecipe = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export { getPopularRecipe };
