import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(hooks);
Vue.use(VueCompositionAPI);

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
