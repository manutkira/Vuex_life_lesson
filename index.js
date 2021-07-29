import { createApp } from "@vue/runtime-dom";
import App from "./app.vue";
import VuexApp from "./app.vue";
import { store } from "./store";

const app = createApp(VuexApp);
app.use(store);
app.mount("#app");
