<template>
  <div>
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
      <loading v-if="isLoading" />
    </div>
</template>

<script>
export default {
  props: {

  },
  components: {
    loading: require('~/components/loading.vue').default,
  },
  data() {
    return {
      isLoading: false,
      userData: {
        name: '',
        password: '',
        role: ''
      },
      allUsers: [
        { name: '', password: '', role: '' }
      ],
    }
  },
  mounted() {
    this.findAllUser()
    this.userData = this.$store.state.auth.user.myInfo
  },
  methods: {
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
  }
}
</script>

<style lang="scss" scoped>



</style>
