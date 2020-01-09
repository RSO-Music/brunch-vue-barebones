import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import List from '../views/List'
import NotFoundComponent from '../views/NotFoundComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/list',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
