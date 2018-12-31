import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home'
import Login from '~/views/Login'
import Profile from '~/views/Profile'
import TrackDetails from '~/views/TrackDetails'

const isAuthenticated = function () {
  return window.localStorage.access_token
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeRouteEnter (to, from, next) {
      if (isAuthenticated()) {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/track',
    name: 'Track',
    component: TrackDetails
  },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !isAuthenticated()) {
    return next({ name: 'Login' })
  }

  if (to.name === 'Login' && isAuthenticated()) {
    return next({ name: 'Home' })
  }

  return next()
})

export default router
