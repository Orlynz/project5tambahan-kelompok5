import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import peduli from "@/components/peduli.vue"
import motorr from "@/components/motorr.vue"
import calculate from "@/components/calculate.vue"

Vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/motorr",
            name: 'motorr',
            component: motorr
        },
        {
            path: "/peduli",
            name: 'peduli',
            component: peduli
        },
        {
            path: "/calculate",
            name: 'calculate',
            component: calculate
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;
