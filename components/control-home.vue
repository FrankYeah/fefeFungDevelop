<template>
  <div>
    <div class="control-head">首頁</div>

    <div class="control-head">輪播四張圖片</div>
    <div v-for="(n, index) in 4" :key="allData[index].indexR"
      class="control-table-row"
    >
      <div class="control-table-head control-table-width-short">
        <el-switch
          v-model="allData[index].states"
          active-color="#13ce66"
          inactive-color="grey"
          :active-value="0"
          :inactive-value="1"
        >
        </el-switch>
      </div>
      <div class="control-table-head control-table-col">
        <input class="control-table-short-img" type="file" @change="uploadFile($event, index)" id="file" ref="myFiles">
        <br>
        <img class="control-table-short-img" :src="allData[index].image" alt="image">
      </div>
      <div class="control-table-head control-table-width-short">{{ allData[index].auth }}</div>
      <div class="control-table-head control-table-width-short">{{ allData[index].postDate }}</div>
      <div class="control-table-head control-table-width-short">
        <el-button @click="editData(index)" type="primary">修改</el-button>
      </div>
    </div>

    <div class="control-head">鳳飛飛故事館圖文</div>
    <div v-for="(n, index) in 3" :key="allData[index + 5].indexR"
      class="control-table-row"
    >
      <div class="control-table-head control-table-width-short">
        <el-switch
          v-model="allData[index + 5].states"
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
          v-model="allData[index + 5].title"
          placeholder=""
        ></el-input>
      </div>
      <div class="control-table-head control-table-col">
        <input class="control-table-short-img" type="file" @change="uploadFile($event, index + 5)" id="file" ref="myFiles">
        <br>
        <img class="control-table-short-img" :src="allData[index + 5].image" alt="image">
      </div>
      <div class="control-table-head">
        <el-input type="textarea"
          :autosize="{ minRows: 2, maxRows: 7}"
          class="control-input"
          v-model="allData[index + 5].url"
          placeholder=""
        ></el-input>
      </div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 5].auth }}</div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 5].postDate }}</div>
      <div class="control-table-head control-table-width-short">
        <el-button @click="editData(index + 5)" type="primary">修改</el-button>
      </div>
    </div>



    <div class="control-head">願景與使命圖片</div>

    <div v-for="(n, index) in 4" :key="allData[index + 9].indexR"
      class="control-table-row"
    >
      <div class="control-table-head control-table-width-short">
        <el-switch
          v-model="allData[index + 9].states"
          active-color="#13ce66"
          inactive-color="grey"
          :active-value="0"
          :inactive-value="1"
        >
        </el-switch>
      </div>
      <div class="control-table-head control-table-col">
        <input class="control-table-short-img" type="file" @change="uploadFile($event, index + 9)" id="file" ref="myFiles">
        <br>
        <img class="control-table-short-img" :src="allData[index + 9].image" alt="image">
      </div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 9].auth }}</div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 9].postDate }}</div>
      <div class="control-table-head control-table-width-short">
        <el-button @click="editData(index + 9)" type="primary">修改</el-button>
      </div>
    </div>

    <!-- <div class="control-head">台灣一代歌后內文</div> -->

    <div class="control-head">飛飛踩點圖文</div>

    <div v-for="(n, index) in 4" :key="allData[index + 17].indexR"
      class="control-table-row"
    >
      <div class="control-table-head control-table-width-short">
        <el-switch
          v-model="allData[index + 17].states"
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
          v-model="allData[index + 17].title"
          placeholder=""
        ></el-input>
      </div>
      <div class="control-table-head">
        <el-input type="textarea"
          :autosize="{ minRows: 2, maxRows: 7}"
          class="control-input"
          v-model="allData[index + 17].content"
          placeholder=""
        ></el-input>
      </div>
      <div class="control-table-head control-table-col">
        <input class="control-table-short-img" type="file" @change="uploadFile($event, index + 17)" id="file" ref="myFiles">
        <br>
        <img class="control-table-short-img" :src="allData[index + 17].image" alt="image">
      </div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 17].auth }}</div>
      <div class="control-table-head control-table-width-short">{{ allData[index + 17].postDate }}</div>
      <div class="control-table-head control-table-width-short">
        <el-button @click="editData(index + 17)" type="primary">修改</el-button>
      </div>
    </div>


    <!-- <div class="control-head">調整首頁</div>
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
              <input class="control-table-short-img" type="file" @change="uploadFile($event, index)" id="file" ref="myFiles">
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
        </div> -->
        <!-- <input type="file" @change="uploadFile" ref="file"> -->

      <!-- </div> -->
      <loading v-if="isLoading" />
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      file: null,
      allData: [
        {
          category: null,
          auth: null,
          content: null,
          image: null,
          indexR: null,
          module: null,
          postDate: null,
          states: null,
          title: null,
          url: null
        }
      ],
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
  created() {
    for(let i = 0; i < 22; i++) {
      this.allData.push({
        category: null,
        auth: null,
        content: null,
        image: null,
        indexR: null,
        module: null,
        postDate: null,
        states: 0,
        title: null,
        url: null
      })
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.isLoading = true
      this.$axios.get(`/api/func/content/module/A02`)
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
    uploadFile(event, index) {
      this.allData[index].file = event.target.files[0]
    },
    editData(index) {
      this.isLoading = true
      var bodyFormData = new FormData()

      if(this.allData[index].file != null) {
        bodyFormData.append('file', this.allData[index].file)
      }

      if(this.allData[index].title != null) {
        bodyFormData.append('title', this.allData[index].title)
      }

      if(this.allData[index].url != null) {
        bodyFormData.append('url', this.allData[index].url)
      }

      if(this.allData[index].content != null) {
        bodyFormData.append('content', this.allData[index].content)
      }

      bodyFormData.append('states', this.allData[index].states)
      bodyFormData.append('module', this.allData[index].module)
      bodyFormData.append('indexR', this.allData[index].indexR)
      bodyFormData.append('category', this.allData[index].category)

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
  }
}
</script>

<style lang="scss" scoped>



</style>
