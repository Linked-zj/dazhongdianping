import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'

// 懒加载二级组件
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Eat = () => import('../views/eat/Eat.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')
const Shop = () => import('../views/shop/Shop.vue')

//地图
const Map = () => import('../views/home/components/map/Map.vue')

// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



Vue.use(Router)

const router = new Router({

    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            // 是否数据缓存
            meta: {
                keepAlive: true
            },
        }, {
            // 根页面
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [{
                path: '/dashboard',
                redirect: '/dashboard/home',
                // 是否数据缓存
                meta: {
                    keepAlive: true
                },
            }, {
                // 主页
                path: 'home',
                name: 'home',
                component: Home,
                // 是否需要数据缓存
                meta: {
                    keepAlive: true
                }
            }, {
                // 分类
                path: 'category',
                name: 'category',
                component: Category,
                meta: {
                    keepAlive: true
                }
            }, {
                // 吃什么
                path: 'eat',
                name: 'eat',
                component: Eat,
                meta: {
                    keepAlive: true
                }
            }, {
                // 购物车
                path: 'cart',
                name: 'cart',
                component: Cart,
                meta: {
                    keepAlive: true
                }
            }, {
                // 我的
                path: 'mine',
                name: 'mine',
                component: Mine
            }, {
                // 地图
                path: 'map',
                name: 'map',
                component: Map
            }, {
                // 商店
                path: 'shop',
                name: 'shop',
                component: Shop
            }]
        }
    ],
    mode: 'history'
})

export default router