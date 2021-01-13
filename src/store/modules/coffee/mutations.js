export default {
  addCoffeeBrew(state, payload) {
    state.latestBrews.push(payload);
  },
  setCoffeeBrews(state, payload) {
    state.latestBrews = payload;
  },
};
