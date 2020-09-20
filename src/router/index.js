import Vue from "vue";
import VueRouter from "vue-router";
import Home from './../views/admin/home.vue'
import login from './../views/Login.vue'


Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/Login',
  //   type: 'Login',
  //   component: resolve => {
  //     require(['@/views/Login.vue'], resolve);
  //   }
  // },
  // {
  //   path: "/",
  //   redirect: "H",
  // },
  // {
  //   path: '/Home',
  //   type: 'Home',
  //   component: resolve => {
  //     require(['@/views/admin/home.vue'], resolve);
  //   }
  // },
  // {
  //   path: '/H',
  //   type: 'H',
  //   component: resolve => {
  //     require(['@/views/admin/h.vue'], resolve);
  //   }
  // },
  // {
  //   path: '/',
  //   component: Home,
  //   name: 'Home',
  //   iconCls: 'fa fa-address-card',
  //   leaf: true,//只有一个节点
  //   children: [
  //     {
  //       path: '/index',
  //       component: Home,
  //       name: '首页',
  //       iconCls: 'el-icon-star-on'
  //     }
  //   ]
  // },
  {
    path: '/',
    component: Home,
    name: 'Home',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      {
        path: '/index',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-star-on'
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-s-flag',
    leaf: false,
    children: [
      { path: '/tabs', component: login, name: '导航一.0', iconCls: 'el-icon-star-on' },
      { path: '/rate', component: login, name: '导航一.1', iconCls: 'el-icon-star-on' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      {
        path: '/badge',
        component: login,
        name: 'Badge',
        iconCls: 'el-icon-s-help'
      }
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      {
        path: '/table',
        component: login,
        name: 'Table',
        iconCls: 'el-icon-upload'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  },
  {
    path: '/404',
    hidden: true,
    name: '',
    component: login
  }

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
