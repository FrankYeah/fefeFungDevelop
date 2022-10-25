<template>
  <div class="template-color-1 template-font-1">
    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
      <div class="page-load-inner">
        <div class="preloader-wrap">
          <div class="wrap-2">
            <div class="">
              <img src="/img/ajax-loader.gif" alt="Brook Preloader" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End PReloader -->

    <!-- Wrapper -->
    <div id="wrapper" class="wrapper">
    <headerBar></headerBar>

      <div
        class="
          breadcaump-area
          pt--100
          pt_lg--90
          pt_md--90
          pt_sm--10
          pb--20
          breadcaump-title-bar
          sm_d-none
        "
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcaump-inner">
                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/"><span>首頁</span></NuxtLink></li>
                    <li class="current">參觀資訊</li>
                  </ul>
                </div>
                <h1 class="mt--20">參觀資訊</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Breadcaump Area -->

      <!-- Page Conttent -->
      <main class="page-content">
        <!-- Start Career Area -->
        <div class="brook-career-area pb--70 pt_md--70 pt_sm--100">
          <div class="container">
            <div
              class="thumbnail mb--60 sm_d-none thumbnail-click"
              style="cursor: pointer"
            >
              <img class="w-100" :src="allData[0].image" alt="參觀資訊" />
            </div>
            <div class="row">
              <!-- Start Single Career -->
              <div class="col-12">
                <div class="career mb--30">
                  <div class="inner">
                    <div class="content">
                      <h5 class="heading heading-h5 head-gray-bg">開放時間</h5>
                      <div class="desc mt--25">
                        <p v-html="allData[1].content"></p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">館舍位置</h5>
                      <div class="desc mt--25">
                        <p v-html="allData[2].content"></p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">{{ allData[3].title }}</h5>
                      <div class="desc mt--25">
                        <p style="white-space: pre-line;" v-html="allData[3].content"></p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">{{ allData[4].title }}</h5>
                      <div class="desc mt--25">
                        <p style="white-space: pre-line;" v-html="allData[4].content"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Career -->
            </div>
          </div>
        </div>
        <!-- End Career Area -->
      </main>
      <!--// Page Conttent -->

      <div id="PopImg" class="thumbnail mb--60 sm_d-none">
        <div class="overlay"></div>
        <div class="thumbnail-img">
          <img class="w-100" src="/img/map-new.png" alt="參觀資訊" />
        </div>
        <div class="close-img">×</div>
      </div>
      <loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
import custom from "@/static/js/custom.js";

export default {
  auth: false,
  layout: "default",
  components: {
    loading: require('~/components/loading.vue').default,
  },
  props: {},
  data() {
    return {
      isLoading: false,
      allData: []
    };
  },
  created() {
    for(let i = 0; i < 30; i++) {
      this.allData.push({
        auth: null,
        category: null,
        content: null,
        image: null,
        indexR: null,
        module: null,
        postDate: null,
        remark: null,
        states: null,
        title: null,
        url: null
      })
    }
  },
  mounted() {
    myMain();
    myRevoulation();
    custom();
    this.getData()
  },
  destroyed() {},
  computed: {},
  methods: {
    getData() {
      this.isLoading = true
      this.$axios.get(`/api/func/content/module/A03`)
        .then( res => {
          this.isLoading = false
          this.allData = res.data.data
          console.log(this.allData)
          this.isLoading = false

        })
        .catch(res => {
          console.log(res)
          this.isLoading = false
        })
    }
  },
};
</script>


<style lang="scss" scoped>
.default {
}
</style>
