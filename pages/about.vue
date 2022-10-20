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

      <!-- Start Breadcaump Area -->
      <div
        class="
          breadcaump-area
          pt--170
          pt_lg--170
          pt_md--250
          pt_sm--200
          pb--40
          bg_image--8
          breadcaump-title-bar breadcaump-title-white
          sm_d-none
        "
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcaump-inner text-center">
                <div class="newheading pb--70">
                  <div class="newheading-img">
                    <img src="/img/CD-icon3.svg" alt="" />
                  </div>
                  <h2>關於我們</h2>
                </div>

                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">關於我們</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Breadcaump Area -->

      <!-- Page Conttent -->
      <main class="page-content">
        <!-- Start Portfolio Details -->
        <div class="brook-portfolio-details">
          <div class="row row--0 pt--90 pt_md--30 pt_sm--120 pb--60">
            <!-- Portfolio Left -->
            <div class="col-lg-6 col-12">
              <div
                class="
                  portfolio-right portfolio-details-gallery
                  text-left
                  pl_md--40
                  pr_md--40
                  pl_sm--20
                  pr_sm--20
                  mr--50
                  mr_sm--0
                "
              >
                <!-- Start Portfolio Image -->
                <div class="portfolio-image mb--50">
                  <img
                    :src="allData[0].image"
                    alt=""
                    style="width: 100%"
                  />
                </div>
                <!-- End Portfolio Image -->
              </div>
            </div>

            <!-- Portfolio Right -->
            <div class="col-lg-6 col-12 mt_md--40 mt_sm--20">
              <div
                class="
                  portfolio-left
                  bk-portfolio-details
                  max-width-450
                  mr--90
                  ml_lg--50
                  pl_sm--20
                  pr_sm--20
                  mr_sm--0
                "
              >
                <div class="portfolio-main-info">
                  <h3 class="heading heading-h3 line-height-1-42 p-purple">
                    {{ allData[0].title }}
                  </h3>
                  <p class="bk_pra mb--20" style="white-space: pre-line" v-html="allData[0].content">

                  </p>

                  <a
                    class="bk-btn black-btn mt--40 mt_sm--20"
                    href="https://my.matterport.com/show/?m=KksxKwUVRtp&lang=en&cloudEdit=1&sr=-.17,-.55&ss=43"
                    >實境導覽</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Portfolio Details -->
      </main>
      <!--// Page Conttent -->
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";

export default {
  auth: false,
  layout: "default",
  components: {},
  props: {},
  data() {
    return {
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
    this.getData()
  },
  destroyed() {},
  computed: {},
  methods: {
    getData() {
      this.isLoading = true
      this.$axios.get(`/api/func/content/module/A10`)
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
