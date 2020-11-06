import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '../node_modules/bulma/css/bulma.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  duration: 1200,
});

new Vue({
  created() {
    AOS.init({
      once: true,
    });
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
