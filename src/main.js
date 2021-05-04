import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Vue from "vue";
import App from "./App.vue";
// UI
import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";
import BaseForum from "./components/UI/BaseForum";
// import "./components/UI/my-theme/index.less";
import router from "./router";
import store from "./store";

Vue.component("BaseCard", BaseCard);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseForum", BaseForum);
Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.config.productionTip = false;
axios.defaults.baseURL = "https://dogsnack-be64d.firebaseio.com/";
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
