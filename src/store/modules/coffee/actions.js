export default {
  async addCoffeeBrew(context, data) {
    const brewData = {
      coffeeId: data.coffeeId,
      recipeId: data.recipeId,
    };

    const response = await fetch(
      "https://brewista-107dd-default-rtdb.firebaseio.com/brews.json",
      {
        method: "POST",
        body: JSON.stringify(brewData),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Saving the coffee brew failed!");
    }

    context.commit("addCoffeeBrew", {
      ...brewData,
      id: responseData.name,
    });
  },
  async loadCoffeeBrews(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    console.log("LOADING");
    const response = await fetch(
      "https://brewista-107dd-default-rtdb.firebaseio.com/brews.json"
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || "Getting the saved coffee brews failed!"
      );
    }

    const coffeeBrews = [];

    for (const key in responseData) {
      const coffeeBrew = {
        id: key,
        coffeeId: responseData[key].coffeeId,
        recipeId: responseData[key].recipeId,
      };

      // const coffeeBrew = {
      //   id: key,
      //   recipeId: responseData[key].recipeId,
      //   title: responseData[key].title,
      //   subTitle: responseData[key].subTitle,
      //   beanAmount: responseData[key].beanAmount,
      //   waterAmount: responseData[key].waterAmount,
      //   grindSize: responseData[key].grindSize,
      //   brewTime: responseData[key].brewTime,
      // };
      coffeeBrews.push(coffeeBrew);
    }

    context.commit("setCoffeeBrews", coffeeBrews);
    context.commit("setFetchTimestamp");
  },
};
