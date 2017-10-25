import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/zh-CN',
    name: 'home'
  },
  {
    path: '/zh-CN',
    name: 'cn'
  },
  {
    path: '/en-US',
    name: 'en'
  },
  { path: '*', redirect: '/' }
]
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

export default router
