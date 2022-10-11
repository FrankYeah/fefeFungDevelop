<template>
  <div class="control">
     <el-row>
      <NuxtLink to="/about">
        <el-button type="success">關於頁面</el-button>
      </NuxtLink>
      <NuxtLink v-if="userData.role == 'ROLE_ADMIN'" to="/register">
        <el-button type="primary">前往註冊</el-button>
      </NuxtLink>
      <el-button @click="logout()" type="primary">登出</el-button>
      <div class="control-text">當前帳號：{{ userData.name }}</div>
      <div class="control-text">當前權限：{{ userData.role == 'ROLE_ADMIN' ? '管理權限' : '一般權限' }}</div>
    </el-row>
    <!-- 切換 -->
    <el-row class="control-basic">

      <el-radio-group v-model="switchBtn" fill="green">
        <el-radio-button label="auth">管理</el-radio-button>
        <el-radio-button label="home">首頁</el-radio-button>
        <el-radio-button label="bottom">頁尾 / 最新消息</el-radio-button>
        <el-radio-button label="newEvent">最新消息</el-radio-button>
      </el-radio-group>

    </el-row>

    <!-- 管理權限 -->
    <controlAuth v-if="switchBtn == 'auth'" />
    <controlHome v-else-if="switchBtn == 'home'" />
    <controlBottom v-else-if="switchBtn == 'bottom'" />
    <controlNewEvent v-else-if="switchBtn == 'newEvent'" />



    <!--  -->
    <loading v-if="isLoading" />
  </div>
</template>

<script>

import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
export default {
  layout: 'default',
  components: {
    loading: require('~/components/loading.vue').default,
    controlAuth: require('~/components/control-auth.vue').default,
    controlHome: require('~/components/control-home.vue').default,
    controlBottom: require('~/components/control-bottom.vue').default,
    controlNewEvent: require('~/components/control-newEvent.vue').default,

  },
  props: {

  },
  data () {
    return {
      isLoading: false,
      userData: {
        name: '',
        password: '',
        role: ''
      },
      switchBtn: '',
    }
  },
  mounted () {
    myMain();
    myRevoulation();
    this.userData = this.$store.state.auth.user.myInfo

  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    logout() {
      this.$auth.logout()
      setTimeout(()=> {
        location.reload()
      }, 300)
    },
  },
  watch: {

  },
}
</script>

<style lang="scss" scoped>


</style>
