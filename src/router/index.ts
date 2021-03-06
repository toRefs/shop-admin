import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/home/index.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
