export default {
  coffee(state) {
    return state.availableCoffee;
  },
  recipes(state) {
    return state.availableRecipes;
  },
  latestBrews(state) {
    return state.latestBrews;
  },
  hasBrews(state) {
    return state.latestBrews && state.latestBrews.length > 0;
  },
};
