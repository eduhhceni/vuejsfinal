import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// Rotas de navegação
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import ("./views/About.vue")
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import ("./views/Cart.vue")
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () =>
                import ("./views/Checkout.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import ("./views/Contact.vue")
        },
        {
            path: "/detalhes/:Pid",
            name: "detalhes",
            component: () =>
                import ("./views/Detalhes.vue")
        },
        {
            path: "/shop",
            name: "shop",
            component: () =>
                import ("./views/Shop.vue")
        },
        {
            path: "/thankyou",
            name: "thankyou",
            component: () =>
                import ("./views/ThankYou.vue")
        },
        {
            path: "/listaprodutos",
            name: "listaprodutos",
            component: () =>
                import ("./views/ListaProdutos.vue")
        },
        {
            path: '*',
            component: () =>
                import ("./views/404.vue")
        }
    ],
    scrollBehavior() {
        // retorna ao topo da página
        return { x: 0, y: 0 };
    }
});