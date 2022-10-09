<template>
  <div>
    <div class="control-head">最新消息</div>

    <div class="control-head">新增最新消息</div>
    <div class="control-table">
        <div class="control-table-row">
          <div class="control-table-head">內容</div>
          <div class="control-table-head">圖片</div>
          <div class="control-table-head">外部連結</div>
          <div class="control-table-head">更新日期</div>
          <div class="control-table-head control-table-width-short">修改</div>
        </div>
        <div>
          <div class="control-table-row">
            <div class="control-table-head">
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
                class="control-input"
                v-model="add.title"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head control-table-col">
              <input class="control-table-short-img" type="file" @change="uploadFile" id="filess" ref="myFiless">
            </div>
            <div class="control-table-head">
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
                class="control-input"
                v-model="add.url"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head">
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
                class="control-input"
                v-model="add.content"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head control-table-width-short">
              <el-button @click="addData(index)" type="primary">新增</el-button>
            </div>
          </div>
        </div>
    </div>


    <div class="control-head">調整最新消息</div>
    <div class="control-table">
        <div class="control-table-row">
          <div class="control-table-head control-table-width-short">顯示/隱藏</div>
          <div class="control-table-head">內容</div>
          <div class="control-table-head">圖片</div>
          <div class="control-table-head">外部連結</div>
          <div class="control-table-head">更新日期</div>
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
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
                class="control-input"
                v-model="data.title"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head control-table-col">
              <input class="control-table-short-img" type="file" @change="uploadFile" id="file" ref="myFiles">
              <br>
              <img class="control-table-short-img" :src="data.image" alt="image">
            </div>
            <div class="control-table-head">
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
                class="control-input"
                v-model="data.url"
                placeholder=""
              ></el-input>
            </div>
            <div class="control-table-head">
              <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 7}"
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
      add: {
        title: '',
        url: '',
        content: ''
      }
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
      this.$axios.get(`/api/func/content/module/A04`)
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
      bodyFormData.append('file', this.file)
      bodyFormData.append('states', this.allData[index].states)
      bodyFormData.append('module', this.allData[index].module)
      bodyFormData.append('title', this.allData[index].title)
      bodyFormData.append('url', this.allData[index].url)
      bodyFormData.append('content', this.allData[index].content)
      bodyFormData.append('indexR', this.allData[index].indexR)
      bodyFormData.append('category', 'footer')

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
    },
    addData(index) {
      this.isLoading = true
      var bodyFormData = new FormData()
      bodyFormData.append('file', this.file)
      bodyFormData.append('module', 'A04')
      bodyFormData.append('title', this.add.title)
      bodyFormData.append('url', this.add.url)
      bodyFormData.append('content', this.add.content)
      bodyFormData.append('category', 'footer')

      this.$axios.post(`/api/func/content`,
      bodyFormData,
      { headers: { "Content-Type": "multipart/form-data" }, }
      )
        .then( res => {
          this.add = {
            title: '',
            url: '',
            content: ''
          }
          this.file = null
          this.$refs.myFiless.value = null
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
