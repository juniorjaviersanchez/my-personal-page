export default {
    name: 'finance',
    component: () => import(/* webpackChunkName: "FinanceLayout" */ '@/modules/finance/layouts/FinanceLayout.vue'),
    children: [
        {
            path: '',
            name: 'home-finance',
            component: () => import(/* webpackChunkName: "HomeView" */ '@/modules/finance/views/HomeView.vue')
        },
        {
            path: 'manage-money',
            name: 'manage-money-finance',
            component: () => import(/* webpackChunkName: "ManageMoneyView" */ '@/modules/finance/views/ManageMoneyView.vue')
        },
        {
            path: 'manage-buy',
            name: 'manage-buy-finance',
            component: () => import(/* webpackChunkName: "ManageBuyView" */ '@/modules/finance/views/ManageBuyView.vue')
        },
    ]
} 