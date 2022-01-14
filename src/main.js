import Vue from 'vue'
import App from './App.vue'
import './plugins/elements'
import './assets/styles/style.scss'

Vue.config.productionTip = false

Vue.component('AppPopUp', () => import('./components/common/AppPopUp.vue'))
Vue.component('AppButton', () => import('./components/common/AppButton.vue'))

new Vue({
	render: h => h(App),
}).$mount('#app')

