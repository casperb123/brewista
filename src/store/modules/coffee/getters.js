export default {
  coffee(state) {
    return state.availableCoffee;
  },
  recipes(state) {
    return state.availableRecipes;
  },
  nonFavoriteRecipes(_, getters) {
    return getters.recipes.filter((r) => !r.favorite);
  },
  favoriteRecipes(state, getters) {
    return state.availableRecipes.filter((r) => r.favorite);
  },
  hasFavoriteRecipes(_, getters) {
    return getters.favoriteRecipes && getters.favoriteRecipes.length > 0;
  },
  latestBrews(state) {
    return state.latestBrews;
  },
  hasBrews(state) {
    return state.latestBrews && state.latestBrews.length > 0;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  },
};
