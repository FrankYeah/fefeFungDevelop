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
      <el-switch
        v-if="userData.role == 'ROLE_ADMIN'"
        v-model="switchBtn.auth"
        active-text="管理權限"
        active-color="#13ce66"
        inactive-color="grey">
      </el-switch>

    </el-row>

    <!-- 管理權限 -->
    <div v-if="switchBtn.auth">
      <div class="control-head">管理權限</div>
      <div class="control-table">
        <div class="control-table-row">
          <div class="control-table-head">帳號</div>
          <div class="control-table-head">密碼</div>
          <div class="control-table-head">權限</div>
          <div class="control-table-head">修改</div>
        </div>
        <div v-for="(user, index) in allUsers"
         :key="index"
        >
          <div class="control-table-row">
            <div class="control-table-head">{{ user.name }}</div>
            <div class="control-table-head">
              <div v-if="user.role == 'ROLE_ADMIN' && user.name != userData.name"></div>
              <el-input v-else class="control-input" v-model="user.password" placeholder="密碼"></el-input>
            </div>
            <div class="control-table-head">{{ user.role == 'ROLE_ADMIN' ? '管理權限' : '一般權限' }}</div>
            <div class="control-table-head">
              <div v-if="user.role == 'ROLE_ADMIN' && user.name != userData.name"></div>
              <el-button v-else @click="editUser(index)" type="primary">修改</el-button>
            </div>
          </div>
        </div>
      </div>


    </div>
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
      switchBtn: {
        auth: false
      },
      // 管理權限
      allUsers: [
        { name: '', password: '', role: '' }
      ]
    }
  },
  mounted () {
    myMain();
    myRevoulation();
    //
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
    findAllUser() {
      this.isLoading = true
      this.$axios.get(`/user/findAllUsers`)
        .then( res => {
          console.log(res)
          this.allUsers = res.data.allUsers
          for(let i = 0; i < this.allUsers.length; i++) {
            this.allUsers[i].password = ''
          }
          function sortArray(a, b) {
            if (a.role < b.role) {
                return 1;
            }
            if (a.role > b.role) {
                return -1;
            }
            return 0;
        }
          this.allUsers = this.allUsers.sort(sortArray)
          this.isLoading = false
        })
        .catch(res => {
          console.log(res)
          this.$message.error('取得使用者失敗，請稍後再試')
          this.isLoading = false
        })
    },
    editUser(index) {
      this.isLoading = true
      // aA123456789@gmail.com
      this.$axios.put(`/auth/update`, {
        userName: this.allUsers[index].name,
        userPassword: this.allUsers[index].password,
        userRole: this.allUsers[index].role
      })
        .then( res => {
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
          console.log(res)
          this.isLoading = false
        })
        .catch(res => {
          console.log(res)
          this.$message.error('修改失敗，請稍後再試')
          this.isLoading = false
        })
    }
  },
  watch: {
  'switchBtn.auth': {
      handler: function(auth) {
        if(auth == true) {
          this.findAllUser()
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>

.control {
  padding: 30px;

  &-basic {
    margin: 20px 0px 0px;
  }

  &-box {
    margin: 50px 0px 0px;
    width: 300px;
  }

  &-input {
    margin: 8px 0px;
    width: 150px;
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

  &-text {
    margin: 8px 0px 0px;
    color: black;
  }

  &-table {

    &-row {
      display: flex;
    }

    &-head {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      padding: 10px;
      border: 0.5px solid black;
      color: black;
    }
  }
}
</style>
