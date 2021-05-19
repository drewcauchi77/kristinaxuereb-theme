import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/views/Home'
import About from '../components/views/About'
import Projects from '../components/views/Projects'
import Contact from '../components/views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router