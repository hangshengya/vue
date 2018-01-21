import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);//自定义vue全局组件时使用vue.use()安装使用组件
import routers from './router.config';
const router = new VueRouter(routers);

import axios from "axios";
Vue.prototype.$http = axios;

import store from './store';

// Add a request interceptor   // http request 拦截器
axios.interceptors.request.use(function (config) {
		store.dispatch("showloading");
		
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
		store.dispatch("hideloading");
		
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });



import loading from './loading'; 
Vue.use(loading);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data:{
  	userName:localStorage.getItem("userName")
  }
})
