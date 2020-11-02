import Vue from 'vue'
import VueRouter from 'vue-router'
// import Element from 'element-ui'
import app from './app'

// Vue.use(Element);
Vue.use(VueRouter);

new Vue({ // eslint-disable-line
    render: createElement => createElement(app)
}).$mount('#app');