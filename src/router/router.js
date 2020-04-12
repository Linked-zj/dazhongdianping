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

// 加载订单相关的组件
const Order = () => import('../views/order/Order.vue');
const MyAddress = () => import('../views/order/children/MyAddress.vue');
const AddAddress = () => import('../views/order/children/children/AddAddress.vue');
const EditAddress = () => import('../views/order/children/children/EditAddress.vue');

// 注册登录
const Login = () => import('../views/login/Login.vue');

// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// Mine的子组件 用户中心
const UserCenter = () => import('../views/mine/Children/UserCenter.vue');
// 修改用户昵称
const ChangeNickName = () => import('../views/mine/Children/ChangeNickName.vue');
// 优惠券
const CouponList = () => import('../views/mine/Children/CouponList.vue')
// 绿卡会员
const MyVip = () => import('../views/mine/Children/MyVip.vue')
// 会员支付
const VipPay = () => import('../views/mine/Children/MyVipChildren/VipPay.vue')
// 我的订单
const MyOrder = () => import('../views/mine/Children/MyOrder');
// 订单商品详情页
const OrderGoodsList = () => import('../views/order/children/OrderGoodsList')
// 商品详情页
const GoodsDetail = () => import('../components/goodsDetail/GoodsDetail.vue');
// 语言切换
const SwitchLanguage = () => import('../views/mine/Children/SwitchLanguage.vue');

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
                // meta: {
                //     keepAlive: true
                // }
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
                // 商品详情
                path: '/goodsDetail',
                name: 'goodsDetail',
                component: GoodsDetail
            },{
                // 地图
                path: 'map',
                name: 'map',
                component: Map
            }]
        },
        {
            // 商店
            path: 'shop',
            name: 'shop',
            component: Shop
        },
        {
            // 订单
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                // 我的地址
                path: 'myAddress',
                name: 'myAddress',
                component: MyAddress,
                meta: {
                    requireAuth: true
                },
                children: [{
                    // 添加地址
                    path: 'addAddress',
                    name: 'addAddress',
                    component: AddAddress,
                }, {
                    // 编辑地址
                    path: 'editAddress',
                    name: 'editAddress',
                    component: EditAddress
                }]
            }, {
                path: 'orderGoodsList',
                name: 'orderGoodsList',
                component: OrderGoodsList
            }]
        },
        {
            // 登录
            path: '/Login',
            name: 'login',
            component: Login
        }
    ],
    mode: 'history'
})

export default router