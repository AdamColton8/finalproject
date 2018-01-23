import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const User = Vue.component('test-component', require('./application/component.vue').default);
const Login = Vue.component('test-component', require('./application/login.vue').default);
const Contacts = Vue.component('test-component', require('./application/contacts.vue').default);
const Dashboard = Vue.component('test-component', require('./application/dashboard.vue').default);
const Home = Vue.component('test-component', require('./application/home.vue').default);
const News = Vue.component('test-component', require('./application/news.vue').default);
const PageNotFound = Vue.component('test-component', require('./application/404.vue').default);




const router = new VueRouter({
    routes: [
        // динамические сегменты начинаются с двоеточия
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Contacts',
            path: '/contacts',
            component: Contacts
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: Dashboard
        },
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'News',
            path: '/news',
            component: News
        },
        {
            name: '404',
            path: '/*',
            component: PageNotFound
        },
    ]
});


new Vue({
    el: '#v-app',
    router,
});
