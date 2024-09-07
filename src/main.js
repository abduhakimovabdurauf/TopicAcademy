import './assets/css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import Vue3Marquee from 'vue3-marquee';
// import 'vue3-marquee/dist/style.css';


createApp(App)
  .provide('i18n',i18n)
  .component('Vue3Marquee', Vue3Marquee)
  .mount('#app');
