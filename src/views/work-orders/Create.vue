<template>
  <v-app id="inspire">
    <!--appbar-->
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MirrorEdge Frp 控制面板</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover rail permanent>
      <List />
    </v-navigation-drawer>
    <!--appbarend-->
    <v-main>
      <v-container>

        <template v-for="n in 1" :key="n">
          <h4>您遇到了什么问题？</h4>
          <div class="mt-3"></div>
          <div v-show="workOrder.host_id == null" class="cursor-pointer">
            <h5>请选择您遇到问题的服务</h5>

            <div class="list-group mt-3" v-for="host in hosts">
              <div class="list-group-item list-group-item-action shadow-sm rounded" @click="chooseHost(host.id)">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ host.name }}</h5>
                  <small>{{ new Date(host.created_at).toLocaleString() }}</small>
                </div>
                <p class="mb-1">
                  <span v-if="host.status == 'running'">
                    <span class="text-success"><i class="bi bi-check-circle"></i> &nbsp;运行中</span>
                  </span>
                  <span v-else-if="host.status == 'pending'">
                    <span class="text-success"><i class="bi bi-clock-history"></i> &nbsp;等待中</span>
                  </span>
                  <span v-else-if="host.status == 'suspended'">
                    <span class="text-danger">
                      <i class="bi bi-x-circle"></i>
                      &nbsp;已暂停
                    </span>
                  </span>
                  <span v-else>
                    <span class="text-danger">
                      <i class="bi bi-x-circle"></i>
                      &nbsp;已停止
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div v-show="workOrder.host_id">
            <h5>嗯，接下来请简要描述一下。</h5>

            <form class="form-floating mt-3">
              <input type="text" class="form-control" id="floatingInputValue" v-model="workOrder.title"
                placeholder="简要描述一下问题" />
              <label for="floatingInputValue">简要描述一下问题</label>
            </form>

            <div class="mt-3">
              <v-md-editor v-model="workOrder.content" height="500px" placeholder="请说明您遇到的问题的具体情况，必要时可以告知我们对应服务的密码。">
              </v-md-editor>
            </div>

            <v-btn color="primary" class="mt-3 btn btn-outline-primary" @click="submitWorkOrder()">
              提交工单
            </v-btn>
          </div>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import List from '../../components/list.vue'
import { ref } from 'vue'

import http from '../../api/http'
import router from '../../plugins/router'

import hljs from 'highlight.js'
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

VMdEditor.use(githubTheme, {
  Hljs: hljs,
})

const workOrder = ref({
  title: null,
  content: '',
  host_id: null,
})

const hosts = ref([])

http.get('/hosts').then((res) => {
  hosts.value = res.data
})

function chooseHost(host_id) {
  workOrder.value.host_id = host_id
}

function submitWorkOrder() {
  http.post('/work-orders', workOrder.value).then((res) => {
    router.push({
      name: 'work-orders.show',
      params: {
        id: res.data.id,
      },
    })
  })
}
</script>
<script>
export default {
  data: () => ({ drawer: 111 }),
}
</script>