import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";

import BackTitle from "./components/ui/BackTitle.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("back-title", BackTitle);
app.component("base-card", BaseCard);

app.mount("#app");
