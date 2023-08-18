import { createApp } from 'vue/dist/vue.esm-bundler'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'


import App from './App.vue'

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = document.body.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');

const app = createApp(App);
app.use(router).mount('#app');
app.config.globalProperties.isDarkTheme = initialTheme === 'dark';



