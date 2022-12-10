import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/reset.css';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  created: function() {
    const api_ip = process.env.VUE_APP_API_SERVER_IP;
    const api_port = process.env.VUE_APP_API_SERVER_PORT;
    this.axios.defaults.baseURL = `http://${api_ip}:${api_port}`;
  }
}).$mount('#app')
