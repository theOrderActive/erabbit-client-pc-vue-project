import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')
const Goods = () => import('@/views/goods/index')
const Login = () => import('@/views/login/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory },
      { path: '/product/:id', component: Goods },
      { path: '/login', component: Login }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
