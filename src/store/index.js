import { createStore } from "vuex";

import coffeeModule from "./modules/coffee/index.js";

const store = createStore({
  modules: {
    coffee: coffeeModule,
  },
});

export default store;
