import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import Register from './user/Register.vue'
import Editor from './views/Editor/index.vue'
import LoginForm from '@/user/LoginForm.vue'

import './registerServiceWorker'

import '@icon-park/vue-next/styles/index.css'
import 'prosemirror-view/style/prosemirror.css'
import 'animate.css'

import '@/assets/styles/prosemirror.scss'
import '@/assets/styles/global.scss'
import '@/assets/styles/antd.scss'
import '@/assets/styles/font.scss'

import Icon from '@/plugins/icon'
import Directive from '@/plugins/directive'

const routes = [
  {
    path: '/login',
    component: LoginForm

  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Editor,
    meta: {
      needLogin: false
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    '/login'
  }
  else {
    next()
  }
})

const app = createApp(App)

app.use(Icon)
app.use(Directive)
app.use(router)
app.use(createPinia())
app.use(VueCookies)

app.mount('#app')
