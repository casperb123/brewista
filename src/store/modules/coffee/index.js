import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      availableCoffee: [
        {
          id: 1,
          title: "Calahute Alto",
          subTitle: "Nordhavn Coffee",
          description:
            "Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminiscent of tart fruit",
          process: "Washed",
          roastProfile: "Medium",
          varieties: ["Castilo", "Caturra"],
          country: "Guatemala",
        },
        {
          id: 2,
          title: "Beza",
          subTitle: "Impact Roasters",
          description:
            "Strong, rich taste combined with a deep spicy, citrus and floral aroma",
          process: "Sun dried",
          roastProfile: "Medium",
          varieties: ["Castilo", "Caturra"],
          country: "Ethiopia",
        },
        {
          id: 3,
          title: "Vista Hermosa",
          subTitle: "Coffee Collective",
          description:
            "Clean and balaned coffee with an elegant acidity. Aromas of pecan nuts, nougat and orange blossom",
          process: "Washed",
          roastProfile: "Medium",
          varieties: ["Caturra", "Pache"],
          country: "Guatemala",
        },
        {
          id: 4,
          title: "Takesi Geisha",
          subTitle: "Coffee Collective",
          description:
            "Super intense and complex aroma. Clean honey-sweet with a delicate acidity. Lychee, jasmine and bergamot",
          process: "Washed",
          roastProfile: "Medium",
          varieties: ["Geisha"],
          country: "Bolivia",
        },
      ],
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
