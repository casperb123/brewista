import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      availableCoffee: [
        {
          id: "1",
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
          id: "2",
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
          id: "3",
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
          id: "4",
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
      availableRecipes: [
        {
          id: "1",
          recipeId: "#aeropress",
          title: "AeroPress",
          beanAmount: "16g",
          waterAmount: "230ml",
          grindSize: "Medium",
          brewTime: "1min",
          steps: [
            "Add ground coffee to inverse aeropress",
            "Start timer",
            "Add 50g of 93c water to aeropress for 10s",
            "Stir five times",
            "Add last 180g of water and stir to mix",
            "After 1 min gently press coffee into cup",
          ],
        },
        {
          id: "2",
          recipeId: "#french",
          title: "French Press",
          beanAmount: "33g",
          waterAmount: "500ml",
          grindSize: "Coarse",
          brewTime: "4min",
          steps: [
            "Add ground coffee to French Press",
            "Start timer and pour water over coffee",
            "Stir with a spoon",
            "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom",
            "Remove big particles and foam still floating on top",
            "Let coffee sit for 30 sec. Then gently press down on handle",
          ],
        },
        {
          id: "3",
          recipeId: "#kalita",
          title: "Kalita Wave",
          beanAmount: "16g",
          waterAmount: "230ml",
          grindSize: "Medium",
          brewTime: "1min",
          steps: [
            "Add ground coffee to French Press",
            "Start timer and pour water over coffee",
            "Stir with a spoon",
            "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom",
            "Remove big particles and foam still floating on top",
            "Let coffee sit for 30 sec. Then gently press down on handle",
          ],
        },
        {
          id: "4",
          recipeId: "#infusion",
          title: "Cold Infusion",
          beanAmount: "40g",
          waterAmount: "200ml",
          grindSize: "Coarse",
          brewTime: "2timer",
          steps: [
            "Add ground coffee to French Press",
            "Start timer and pour water over coffee",
            "Stir with a spoon",
            "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom",
            "Remove big particles and foam still floating on top",
            "Let coffee sit for 30 sec. Then gently press down on handle",
          ],
        },
        {
          id: "5",
          recipeId: "#chemex",
          title: "Chemex",
          beanAmount: "16g",
          waterAmount: "230ml",
          grindSize: "Fine",
          brewTime: "3min",
          steps: [
            "Add ground coffee to French Press",
            "Start timer and pour water over coffee",
            "Stir with a spoon",
            "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom",
            "Remove big particles and foam still floating on top",
            "Let coffee sit for 30 sec. Then gently press down on handle",
          ],
        },
      ],
      latestBrews: [],
    };
  },
  actions,
  getters,
  mutations,
};
