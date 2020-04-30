import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// import mylayout from '@/components/mylayout';
// import postchild from '@/components/postchild';
// import file from '@/components/file';
// import dblist from '@/components/dblist';
// import dbselect from '@/components/dbselect';
// import httpserver from '@/components/httpserver';
// import socketserver from '@/components/socketserver';
// import websocketserver from '@/components/websocketserver';
// import webservice from '@/components/webservice';
// import javascript from '@/components/javascript';
// import encryptutil from '@/components/encryptutil';
// import monitor from '@/components/monitor';
// import out from '@/components/out';


Vue.use(Router)
Vue.use(ViewUI);


const mylayout = ()=>import("@/components/mylayout")
const intergration = ()=>import("@/components/intergration")
const intergrationSend = ()=>import("@/components/intergrationSend")
const postchild = ()=>import("@/components/postchild")
const file = ()=>import("@/components/file")
const encryptutil = ()=>import("@/components/encryptutil")


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mylayout',
      component: mylayout,
      redirect: '/encryptutil',
      children: [
        {
          path: '/postchild',
          name: 'postchild',
          component: postchild
        },
        {
          path: '/filelist',
          name: 'filelist',
          component: file,
        },
        {
          path: '/encryptutil',
          name: 'encryptutil',
          component: encryptutil,
        },
        {
          path: '/receive',
          name: 'receive',
          component: intergration,
        },
        {
          path: '/send',
          name: 'send',
          component: intergrationSend,
        },
      ]
    }
  ]
})
