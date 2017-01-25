// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue 			from 'vue'
import Home 		from './components/Home'
import TimeEntries 	from './components/TimeEntries'
import LogTime 		from './components/LogTime'
import App 			from './App'

import VueRouter 	from 'vue-router'
import VueResource 	from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/time-entries', component: TimeEntries,
			children: [
				{
					path: 'log-time',
					component: LogTime
				}
			]
		}
	] 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  router: router,
  template: '<App/>',
  components: { App }
})
