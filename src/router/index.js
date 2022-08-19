import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        meta: {
            title: "仿-掘金首页",
        },
        component: () =>
            import ("@/views/Home.vue"),
    },
    {
        path: "/article/post/:id",
        name: "Article",
        meta: {
            title: "文章详情",
        },
        component: () =>
            import ("@/views/Article.vue"),
    },
    {
        path: "/side",
        name: "Side",
        meta: {
            title: "侧边栏",
        },
        component: () =>
            import ("@/views/Side.vue"),
    },
    {
        path: "/404",
        name: "404",
        meta: {
            title: "找不到页面",
        },
        component: () =>
            import ("@/views/404.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log(router.hasRoute);
    if (router.hasRoute(to.name)) {
        document.title = to.meta.title;
        next();
    } else {
        next("/404");
    }
});

export default router;