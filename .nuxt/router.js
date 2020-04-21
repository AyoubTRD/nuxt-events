import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _adb21fe0 = () => interopDefault(import('..\\pages\\create.vue' /* webpackChunkName: "pages_create" */))
const _5843b9dd = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages_events__id" */))
const _8c4b2f24 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _adb21fe0,
    name: "create"
  }, {
    path: "/events/:id?",
    component: _5843b9dd,
    name: "events-id"
  }, {
    path: "/",
    component: _8c4b2f24,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
