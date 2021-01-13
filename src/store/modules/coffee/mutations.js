export default {
  addCoffeeBrew(state, payload) {
    state.latestBrews.unshift(payload);
  },
  setCoffeeBrews(state, payload) {
    state.latestBrews = payload.reverse();
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
