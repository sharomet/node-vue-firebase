import Vue from 'vue';
import Router from './router';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
