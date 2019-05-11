// arquivo principal do vuejs que invoca as extensões
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueCarousel)
Vue.use(BootstrapVue)
window.Vue = Vue;

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')