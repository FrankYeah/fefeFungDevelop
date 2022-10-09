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
                inactive-color="grey"
                :active-value="0"
                :inactive-value="1"
              >
              </el-switch>
            </div>
            <div class="control-table-head">
              <el-input
                class="control-input"
                v-model="data.title"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head control-table-width-long control-table-col">
              <input v-if="index == 0" type="file" @change="uploadFile" id="file" ref="myFiles">
              <br>
              <img v-if="index == 0" class="control-table-img" :src="data.image" alt="image">
              <el-input v-else type="textarea"
                :autosize="{ minRows: 6, maxRows: 10}"
                class="control-input"
                v-model="data.content"
                placeholder=""
              ></el-input>
           </div>
            <div class="control-table-head control-table-width-short">{{ data.auth }}</div>
            <div class="control-table-head control-table-width-short">{{ data.postDate }}</div>
            <div class="control-table-head control-table-width-short">
              <el-button @click="editData(index)" type="primary">修改</el-button>
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
      this.$axios.get(`/api/func/content/module/A03`)
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
    uploadFile(event) {
      // console.log(this.$refs.file[0])
      this.file = event.target.files[0]
      console.log(event.target.files[0])
    },
    editData(index) {
      this.isLoading = true
      var bodyFormData = new FormData()
      if(this.allData[index].indexR == 22 && this.file != null) {
        bodyFormData.append('file', this.file)
      } else {
        bodyFormData.append('file', '')
      }
      bodyFormData.append('states', this.allData[index].states)
      bodyFormData.append('module', this.allData[index].module)
      bodyFormData.append('title', this.allData[index].title)
      bodyFormData.append('indexR', this.allData[index].indexR)
      bodyFormData.append('category', 'footer')
      bodyFormData.append('content', this.allData[index].content)

      this.$axios.put(`/api/func/content`,
      bodyFormData,
      { headers: { "Content-Type": "multipart/form-data" }, }
      )
        .then( res => {
          console.log(res)
          this.getData()
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
