<!--
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-18 21:45:19
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-12-06 12:17:24
 * @FilePath: \lae-ui\src\views\auth\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1 v-text="title"></h1>
  <div>
    <button v-if="show" @click="toLogin()" :disabled="buttonDisabled" type="button" class="btn btn-outline-primary">
      前往 莱云
    </button>

    <p v-else>我们正在将你重定向到 莱云...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import store from '../../plugins/store'
import http from '../../api/http'
import router from '../../plugins/router'
import api from '../../config/api'
// import app from '../../config/app'

const origin = api.auth

console.log('auth server: ' + origin)

const token = ref('')
const show = ref(false)
const title = ref('登录ing…')
const buttonDisabled = ref(false)

// const user = store.state.user

console.log('store token:', store.state.token)
console.log('store user:', store.state.user)

const connect = () => {
  buttonDisabled.value = true
  title.value = '正在验证登录...'
  store.commit('updateToken', token.value)
  http
    .get('/users')
    .then((res) => {
      store.commit('updateUser', res.data)

      // app.isLogin = true

      console.log(res.data)

      title.value = '嗨, ' + res.data.name
      buttonDisabled.value = false

      show.value = true
      router.push('/')

      location.href = '/'
    })
    .catch((err) => {
      console.error(err)
      store.commit('updateToken', {
        token: null,
      })
      title.value = '无法验证登录，将在几秒钟后重试。'
      buttonDisabled.value = false
    })
  token.value = ''
}

// read the router query para
const query = router.currentRoute.value.query

if (query.token != null) {
  token.value = query.token
  connect()
} else {
  show.value = false
  setTimeout(toLogin, 1000)
}

function toLogin() {
  // // if build for production, use the production url
  // if (process.env.NODE_ENV === 'production') {
  //   location.href = api.login
  // } else {
  //   location.href = api.login
  // }

  window.location.href =
    origin + '/?callback=' + encodeURIComponent(window.location.href)
}
</script>
