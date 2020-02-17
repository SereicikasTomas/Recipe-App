import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = "" };

export const clearResults = () => { elements.searchResList.innerHTML = "" };

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
        title.split(" ").reduce((acc, cur) => {
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur;
        }, 0);

        return `${newTitle.join(" ")} ...`;
    }
    return title;
};

const renderRecipe = recipe => {
    const { recipe_id, image_url, title, publisher } = recipe;
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe_id}">
                <figure class="results__fig">
                    <img src="${image_url}" alt="${title}">
                </figure>
                <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(title)}</h4>
                <p class="results__author">${publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};