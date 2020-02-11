import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
    const { recipe_id, image_url, tittle, publisher } = recipe;
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe_id}">
                <figure class="results__fig">
                    <img src="${image_url}" alt="${tittle}">
                </figure>
                <div class="results__data">
                <h4 class="results__name">${tittle}</h4>
                <p class="results__author">${publisher}</p>
                </div>
            </a>
        </li>
    `;
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};