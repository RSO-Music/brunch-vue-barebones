import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import List from '../views/List'
import NotFoundComponent from '../views/NotFoundComponent'
import Stream from "../views/Stream";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/hello/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/song/:songHash',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/upload/',
      name: 'Upload',
      component: Upload
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
