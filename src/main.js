// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'
import VueWechatTitle from 'vue-wechat-title';
import 'babel-polyfill'; 

Vue.use(VueWechatTitle)
router.beforeEach((to, from, next) => {
    /*路由发生改变修改页面的title */
    if(to.meta.title) {
    	console.log(to.meta.title);
      document.title = to.meta.title
    }
    next();
})
Vue.use(MetaInfo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})