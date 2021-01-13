import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";

import BaseBackTitle from "./components/ui/BaseBackTitle.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";
import BaseRecipeDetails from "./components/ui/BaseRecipeDetails.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-back-title", BaseBackTitle);
app.component("base-card", BaseCard);
app.component("base-title", BaseTitle);
app.component("base-recipe-details", BaseRecipeDetails);

app.mount("#app");
