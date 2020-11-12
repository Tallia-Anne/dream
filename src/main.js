import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from "axios";
import Vueaxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.prototype.$apiurl = "http://146.59.225.190:3000";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Installer BootstrapVue
Vue.use(BootstrapVue);
// Installer éventuellement le plugin des composants d'icônes BootstrapVue
Vue.use(IconsPlugin);

Vue.use(Vueaxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')