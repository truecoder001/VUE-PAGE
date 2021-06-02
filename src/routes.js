import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './views/Posts'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
    },
  ]
})