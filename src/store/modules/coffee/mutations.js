export default {
  addCoffeeBrew(state, payload) {
    state.latestBrews.push(payload);
  },
  setCoffeeBrews(state, payload) {
    state.latestBrews = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
