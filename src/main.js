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

import VueYoutube from 'vue-youtube'
import VueFacebookPage from 'vue-facebook-page'
import _ from 'lodash'
import { firestorePlugin } from 'vuefire'
import VueVideoPlayer from 'vue-video-player'

Vue.config.productionTip = false; 

Vue.use(MaterialKit); 

Vue.use(VueYoutube)

// The plugin is loaded here.
// You have to pass your FB app Id as a second parameter
Vue.use(VueFacebookPage, 219660669313598)

Vue.use(firestorePlugin)

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

const NavbarStore =  {
showNavbar:false
}; 

Vue.mixin( {
data() {
return {
NavbarStore
    }; 
}
}); 

new Vue( {
router, 
render:h => h(App)
}).$mount("#app"); 
