import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
