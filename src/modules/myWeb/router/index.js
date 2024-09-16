export default {
    name: 'my-web',
    component: () => import(/* webpackChunkName: "MyWebLayout" */ '@/modules/myWeb/layouts/MyWebLayout.vue'),
    children: [
        {
            path: '',
            name: 'home-my-web',
            component: () => import(/* webpackChunkName: "HomeView" */ '@/modules/myWeb/views/HomeView.vue')
        },
        {
            path: 'know-me',
            name: 'know-me-my-web',
            component: () => import(/* webpackChunkName: "KnowMeView" */ '@/modules/myWeb/views/KnowMeView.vue')
        },
        {
            path: 'service',
            name: 'service-my-web',
            component: () => import(/* webpackChunkName: "ServiceView" */ '@/modules/myWeb/views/ServiceView.vue')
        },
        {
            path: 'portfolio',
            name: 'portfolio-my-web',
            component: () => import(/* webpackChunkName: "PortfolioView" */ '@/modules/myWeb/views/PortfolioView.vue')
        },
        {
            path: 'certificate',
            name: 'certificate-my-web',
            component: () => import(/* webpackChunkName: "CertificateView" */ '@/modules/myWeb/views/CertificateView.vue')
        },
        {
            path: 'contact',
            name: 'contact-my-web',
            component: () => import(/* webpackChunkName: "ContactView" */ '@/modules/myWeb/views/ContactView.vue')
        }
    ]
} 