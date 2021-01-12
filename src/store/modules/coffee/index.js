import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      latestBrews: [
        {
          id: "c1",
          recipe: "infusion",
          title: "Beza",
          subTitle: "Impact Roasters",
          beanAmount: "40g",
          waterAmount: "500ml",
          grindType: "Coarse",
          brewTime: "12 timer",
        },
      ],
    };
  },
  actions,
  getters,
  mutations,
};
