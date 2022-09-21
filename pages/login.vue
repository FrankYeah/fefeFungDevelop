<template>
  <div class="register">
    <el-row>
      <NuxtLink to="/about">
        <el-button type="success">關於頁面</el-button>
      </NuxtLink>
    </el-row>
    <el-row class="register-box">
      <div class="register-head">登入頁面</div>
      <el-input class="register-input" v-model="account.userName" placeholder="帳號"></el-input>
      <div>(帳號限制：電子信箱)</div>
      <el-input type="password" class="register-input" v-model="account.userPassword" placeholder="密碼"></el-input>
      <div>(密碼限制：長度6~16位碼大小寫英文加數字)</div>
      <div>
        <el-button class="register-btn" @click="login()" type="primary">登入</el-button>
      </div>
    </el-row>
    <loading v-if="isLoading" />

  </div>
</template>

<script>

import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
export default {
  auth: false,
  layout: 'default',
  components: {
    loading: require('~/components/loading.vue').default,

  },
  props: {

  },
  data () {
    return {
      isLoading: false,
      account: {
        userName: '',
        userPassword: '',
      }
    }
  },
  mounted () {
    myMain();
    myRevoulation();

    if(this.$auth.loggedIn) {
      this.$router.push('/control')
    }

  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    login() {
      this.isLoading = true
      var bodyFormData = new FormData()
      bodyFormData.append('userName', this.account.userName)
      bodyFormData.append('userPassword', this.account.userPassword)
      // aA123456789@gmail.com
      this.$auth.loginWith('local', { data: bodyFormData })
      .then(res => {
        this.isLoading = false
        if(res.data.states == 403) {
          this.$message({
            message: '登入失敗！請重新輸入帳號密碼',
            type: 'error'
          })
        } else {
          this.$message({
            message: '登入成功！',
            type: 'success'
          })
          this.$router.push('/control')
        }
      })
      .catch((err) => {
        this.isLoading = false
        this.$message({
          message: '登入失敗！請重新輸入帳號密碼',
          type: 'error'
        })
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.register {
  padding: 30px;

  &-box {
    margin: 50px 0px 0px;
    width: 300px;
  }

  &-input {
    margin: 8px 0px;
  }

  &-radio {
    margin: 10px 0px;
  }

  &-btn {
    margin: 20px 0px;
  }

  &-head {
    font-size: 24px;
    margin: 20px 0px 10px;
    color: black;
  }
}
</style>
