import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { custom: App },
  template: `<div class="text-center">
  <h1 class="bg-primary text-white p-3">
  This is the main.js file
  </h1>
  <custom />
  </div>`,
});
