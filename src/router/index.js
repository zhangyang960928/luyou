import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '主页面登录'
    }
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '主页面'
        }
      },
      {
        path: '/xian',
        name: 'Xian',
        component: () => import('../views/xian/Xian.vue'),
        meta: {
          title: '详情页'
        }
      },
    ]
  },
  {
    path: '*',
    component: () => import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('vue-user')
  document.title = to.meta.title
  if (to.path === '/login') {
    next()
  } else (
    user ? next : next('/login')
  )
})

export default router
