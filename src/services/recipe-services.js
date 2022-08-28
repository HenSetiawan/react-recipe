const apiKey = process.env.REACT_APP_API_KEY;

const getPopularRecipe = async () => {
  const popularRecipe = localStorage.getItem('popular');
  if (popularRecipe) {
    return JSON.parse(popularRecipe);
  } else {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
      );
      const data = await response.json();
      console.log(data);
      localStorage.setItem('popular', JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getCuisineRecipe = async (country) => {
  const thaiRecipe = localStorage.getItem(country);
  if (thaiRecipe) {
    return JSON.parse(thaiRecipe);
  } else {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${country}&apiKey=${apiKey}&number=20`
      );
      const data = await response.json();
      console.log(data);
      localStorage.setItem(country, JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getVeganRecipe = async () => {
  const veganRecipe = localStorage.getItem('vegetarian');
  if (veganRecipe) {
    return JSON.parse(veganRecipe);
  } else {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegan&apiKey=${apiKey}&number=20`
      );
      const data = await response.json();
      console.log(data);
      localStorage.setItem('vegetarian', JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export { getPopularRecipe, getVeganRecipe, getCuisineRecipe };
