import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import peduli from "@/components/peduli.vue"
import motorr from "@/components/motorr.vue"
import calculate from "@/components/calculate.vue"
import login from "@/components/login.vue"
import motor from "@/components/motor.vue"
import admin from "@/components/admin.vue"
import care from "@/components/care.vue"

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
        {
            path: "/login",
            name: 'login',
            component: login
        },
        {
            path: "/motor",
            name: 'motor',
            component: motor
        },
        {
            path: "/admin",
            name: 'admin',
            component: admin
        },
        {
            path: "/care",
            name: 'care',
            component: care
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;
