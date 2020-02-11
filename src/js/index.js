import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";

/**
 * Global state of the object
 * - Search object
 * - Current reciipe object
 * - Shoping list object
 * - Liked recipes object
 */
const state = {};

const controlSearch = async () => {
  // 1. Ger query from thee view
  const query = searchView.getInput();
  console.log(query);

  if(query) {
    // 2. New search object and add too state
    state.search = new Search(query);

    // 3. Prepare Ui for the result

    // 4. Search for recipes
    await state.search.getRecipes();

    // 5. Render results on the UI
    console.log(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
