import { createApp } from "vue";

import App from "./App.vue";
import Header from "./components/Header.vue";
import Quote from "./components/Quote.vue";

const app = createApp(App);
app.component("header-comp", Header);
app.component("quote", Quote);
app.mount("#app");
