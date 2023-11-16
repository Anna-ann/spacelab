import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';
import App from './App.vue';
import i18n from './i18n';

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = document.body.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');

const app = createApp(App);
app.use(router).use(i18n);
app.config.globalProperties.isDarkTheme = initialTheme === 'dark';
app.mount('#app');
