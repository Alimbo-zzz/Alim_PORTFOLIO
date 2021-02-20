import "../styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import $axios from './requests.js';
import SimpleVueValidation from 'simple-vue-validator';



Vue.use(SimpleVueValidation);

store.$axios = $axios;



new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});


