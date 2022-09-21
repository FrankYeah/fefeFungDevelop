<template>
  <div class="register">
    <el-row>
      <NuxtLink to="/about">
        <el-button type="success">關於頁面</el-button>
      </NuxtLink>
      <NuxtLink v-if="isLogin" to="/control">
        <el-button type="primary">前往後台</el-button>
      </NuxtLink>
      <NuxtLink to="/login">
        <el-button type="primary">前往登入</el-button>
      </NuxtLink>
    </el-row>
    <el-row class="register-box">
      <div class="register-head">註冊頁面</div>
      <el-input class="register-input" v-model="account.userName" placeholder="帳號"></el-input>
      <div>(帳號限制：電子信箱)</div>
      <el-input type="password" class="register-input" v-model="account.userPassword" placeholder="密碼"></el-input>
      <div>(密碼限制：長度6~16位碼大小寫英文加數字)</div>
      <div class="register-radio">
        <el-radio v-model="account.userRole" label="ROLE_USER">一般權限</el-radio>
        <el-radio v-model="account.userRole" label="ROLE_ADMIN">管理權限</el-radio>
      </div>
      <div>
        <el-button class="register-btn" @click="register()" type="primary">註冊</el-button>
      </div>
    </el-row>
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

  },
  props: {

  },
  data () {
    return {
      userData: {
        name: '',
        password: '',
        role: ''
      },
      isLogin: false,
      isLoading: false,
      account: {
        userName: '',
        userPassword: '',
        userRole: 'ROLE_USER'
      }
    }
  },
  mounted () {
    myMain();
    myRevoulation();
    //
    this.userData = this.$store.state.auth.user.myInfo
    if(this.userData.role != 'ROLE_ADMIN') {
      this.$router.push('/login')
    }
    if(this.$auth.loggedIn) {
      this.isLogin = true
    }

  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    register() {
      this.isLoading = true
      console.log(this.account)
      // aA123456789@gmail.com
      this.$axios.post(`/auth/register`, this.account)
        .then( res => {
          this.isLoading = false
          this.$message({
            message: '註冊成功！',
            type: 'success'
          })
          this.$router.push('/login')
        })
        .catch(res => {
          console.log(res)
          this.$message.error('註冊錯誤，請稍後再試')
          this.isLoading = false
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
