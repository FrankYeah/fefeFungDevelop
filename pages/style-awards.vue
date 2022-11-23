<template>
  <div class="template-color-1 template-font-1">
    <!-- Start PReloader -->
    <!-- <div id="page-preloader" class="page-loading clearfix">
      <div class="page-load-inner">
        <div class="preloader-wrap">
          <div class="wrap-2">
            <div><img src="/img/ajax-loader.gif" alt="Brook Preloader" /></div>
          </div>
        </div>
      </div>
    </div> -->
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
          pt_sm--100
          pb--40
          pb_sm--0
          bg_image--8
          breadcaump-title-bar breadcaump-title-white
        "
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcaump-inner text-center">
                <div class="newheading pb--70 pb_sm--0">
                  <div class="newheading-img">
                    <img src="/img/CD-icon3.svg" alt="" />
                  </div>
                  <h2>獎項紀錄</h2>
                </div>
                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">飛飛風采</li>
                    <li class="current">獎項紀錄</li>
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
        <!-- Start Blog Grid Area -->
        <div
          class="
            bk-blog-grid-area
            pt--40
            pb--100
            pt_md--5
            pb_md--80
            pb_sm--80
            pt_sm--5
            bg_color--1
          "
        >
          <div class="container">
            <!-- Start Counterup Area -->
            <!-- <div class="brook-counterup-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1 sm_d-none">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="brook-counter text-center">
                                        <div class="icon">
                                            <img src="img/CD-icon.svg" alt="">
                                        </div>
                                        <div class="content">
                                            <span class="count">77</span>
                                            <h6 class="heading heading-h6">張專輯</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mt_mobile--40">
                                    <div class="brook-counter text-center">
                                        <div class="icon">
                                            <img src="img/record-icon.svg" alt="">
                                        </div>
                                        <div class="content">
                                            <span class="count">30</span>
                                            <h6 class="heading heading-h6">獎項紀錄</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mt_sm--40">
                                    <div class="brook-counter text-center">
                                        <div class="icon">
                                            <img src="img/hat.svg" alt="">
                                        </div>
                                        <div class="content">
                                            <span class="count">600</span>
                                            <h6 class="heading heading-h6">頂帽子收藏</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> -->
            <!-- End Counterup Area -->

            <div id="Awards" class="row">
              <div class="col-12">
                <!-- Start Single Blog -->
                <div
                  class="blog-overlay wow animate__fadeInUp"
                  data-wow-iteration="1"
                  v-for="(item, index) in eventRecordContent"
                  :key="index"
                >
                  <div class="blog-grid-minimal overlay-image-list">
                    <!-- style="background-image: url(img/record-1.jpg)" -->
                    <div
                      class="grid-overlay style-award-bg-img"
                    ></div>
                    <div class="post-content style-awards-text">
                      <h5 class="heading">{{ item.title }}</h5>
                      <div class="post-meta">
                        <div class="post-date style-awards-text" v-html="item.remark"></div>
                        <div class="post-category" v-html="item.content"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Single Blog -->
              </div>
            </div>
          </div>
        </div>
        <!-- End Blog Grid Area -->
      </main>
      <!--// Page Conttent -->
    </div>
  </div>
</template>

<script>
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
// import $ from 'jquery'
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  auth: false,
  layout: "default",
  components: {},
  props: {},
  data() {
    return {
      eventRecordContent: [],
    };
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
      this.$axios.get(`/api/func/content/module/A082`)
        .then( res => {
          this.eventRecordContent = res.data.data
          console.log(this.eventRecordContent)
          this.$nextTick(() => {
            if (process.browser) {
              new WOW({ animateClass: "animate__animated" }).init();
              // 在页面mounted生命周期里面 根据环境实例化WOW
            }
          });
        })
        .catch(res => {
          console.log(res)
        })
    },
  },
};
</script>


<style lang="scss" scoped>

.style-award-bg-img {
  background-image: url('../assets/img/record-1.jpg');
}

.style-awards-text {
  color: black;

  &:hover {
    color: white;
  }
}

</style>
