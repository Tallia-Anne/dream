import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from "axios";
import Vueaxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.prototype.$apiurl = "https://afro-dream.fr:3000/";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Installer BootstrapVue
Vue.use(BootstrapVue);
// Installer éventuellement le plugin des composants d'icônes BootstrapVue
Vue.use(IconsPlugin);

Vue.use(Vueaxios, axios);
Vue.config.productionTip = false

/* render :  function ( createElement ) {
  return  createElement (App);
}La render()fonction est un élément central de Vue.
 */
new Vue({
    router,
    // h un alias createElement
    render: h => h(App)
        // “mount” signifie le moment où votre composant est inséré dans le DOM.
        // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID 
}).$mount('#app')