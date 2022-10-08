<template>
  <div>
    <div class="control-head">頁尾</div>
    <div class="control-table">
        <div class="control-table-row">
          <div class="control-table-head control-table-width-short">顯示/隱藏</div>
          <div class="control-table-head">標題</div>
          <div class="control-table-head control-table-width-long">內容</div>
          <div class="control-table-head control-table-width-short">修改者</div>
          <div class="control-table-head control-table-width-short">修改日</div>
          <div class="control-table-head control-table-width-short">修改</div>
        </div>
        <div v-for="(data, index) in allData"
         :key="index"
        >
          <div class="control-table-row">
            <div class="control-table-head control-table-width-short">
              <el-switch
                v-model="data.states"
                active-color="#13ce66"
                inactive-color="grey">
              </el-switch>
            </div>
            <div class="control-table-head">{{ data.title }}</div>
            <div class="control-table-head control-table-width-long">
              <el-input
                class="control-input"
                v-model="data.content"
                placeholder=""
              ></el-input>
           </div>
            <div class="control-table-head control-table-width-short">{{ data.auth }}</div>
            <div class="control-table-head control-table-width-short">{{ data.postDate }}</div>
            <div class="control-table-head control-table-width-short">
              <el-button @click="editData(data.indexR, data.content)" type="primary">修改</el-button>
            </div>
          </div>
        </div>
        <!-- <input type="file" @change="uploadFile" ref="file"> -->
      <loading v-if="isLoading" />
      </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      file: null,
      allData: null,
      isLoading: false,
    }
  },
  components: {
    loading: require('~/components/loading.vue').default,
  },
  mounted() {
    this.getData()

  },
  methods: {
    getData() {
      this.isLoading = true
      this.$axios.get(`/api/func/content/A04`)
        .then( res => {
          this.allData = res.data.data
          console.log(this.allData)
          this.isLoading = false

        })
        .catch(res => {
          console.log(res)
          this.isLoading = false
        })

    },
    editData(indexR, content) {
      this.isLoading = true
      var bodyFormData = new FormData()
      bodyFormData.append('file', '')
      bodyFormData.append('module', 'A03')
      bodyFormData.append('indexR', indexR)
      bodyFormData.append('content', content)
      bodyFormData.append('url', '')

      this.$axios.post(`/api/func/content`,
      bodyFormData,
      { headers: { "Content-Type": "multipart/form-data" }, }
      )
        .then( res => {
          console.log(res)
          this.isLoading = false

        })
        .catch(res => {
          console.log(res)
          this.isLoading = false
        })

    }
  }
}
</script>

<style lang="scss" scoped>



</style>
