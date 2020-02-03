import axios from "axios";

const getRecipes = async query => {
  try {
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/search?&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    console.warn(error);
  }
};

getRecipes("tomato");
