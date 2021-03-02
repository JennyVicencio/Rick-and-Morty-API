import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar, faEye as fasEye, faTrashAlt, faEdit, faPen, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(fasStar, farStar, fasEye, farEye, faTrashAlt, faEdit, faPen, faTasks);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
