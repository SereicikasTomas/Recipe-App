import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

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

  if (query) {
    // 2. New search object and add too state
    state.search = new Search(query);

    // 3. Prepare Ui for the result
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4. Search for recipes
    await state.search.getRecipes();

    // 5. Render results on the UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
})
