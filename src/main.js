// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import VueYoutube from "vue-youtube";
import VueFacebookPage from "vue-facebook-page";
import _ from "lodash";
import { firestorePlugin } from "vuefire";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Modal } from "@/components";
import moment from "moment";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Vuesax from 'vuesax';
import VueCoreVideoPlayer from 'vue-core-video-player';

Vue.config.productionTip = false;

import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  });

  Vue.use(VueCoreVideoPlayer)

Vue.use(MaterialKit);

Vue.use(VueYoutube);

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
Vue.use(VueFacebookPage, 219660669313598);

Vue.use(firestorePlugin);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component(Modal);

Vue.use(VueMaterial);

Vue.filter("formatDate", function (value) {
  if (!value) return "";
  return moment(value.toString()).format("DD/MM/YYYY hh:mm");
});

const NavbarStore = {
  showNavbar: false,
};

Vue.mixin({
  data() {
    return {
      NavbarStore,
    };
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
