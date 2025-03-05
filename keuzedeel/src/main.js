import { createApp } from "vue";

import App from "./App.vue";
import FoodItem from "./components/FoodItem.vue";
import Header from "./components/Header.vue";
import Quote from "./components/Quote.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
app.component("header-comp", Header);
app.component("quote", Quote);
app.component("footer-comp", Footer);
app.component("food-item", FoodItem);
app.mount("#app");
