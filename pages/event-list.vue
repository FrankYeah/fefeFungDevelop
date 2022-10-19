<template>
  <div class="template-color-1 template-font-1">
    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
      <div class="page-load-inner">
        <div class="preloader-wrap">
          <div class="wrap-2">
            <div><img src="/img/ajax-loader.gif" alt="Brook Preloader" /></div>
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
                  <h2>活動記事</h2>
                </div>
                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">活動記事</li>
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
            <div
              class="
                brook-counterup-area
                ptb--100
                ptb-md--80
                ptb-sm--60
                bg_color--1
                sm_d-none
              "
            >
              <div class="container">
                <div class="row">
                  <!-- Start Single Counter -->
                  <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="brook-counter text-center">
                      <div class="icon">
                        <img src="/img/processing.svg" alt="" />
                      </div>
                      <div class="content">
                        <span class="count">3</span>
                        <h6 class="heading heading-h6">進行中活動</h6>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Counter -->

                  <!-- Start Single Counter -->
                  <div class="col-lg-4 col-md-4 col-sm-6 col-12 mt_mobile--40">
                    <div class="brook-counter text-center">
                      <div class="icon">
                        <img src="/img/past.svg" alt="" />
                      </div>
                      <div class="content">
                        <span class="count">12</span>
                        <h6 class="heading heading-h6">過去活動</h6>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Counter -->

                  <!-- Start Single Counter -->
                  <div class="col-lg-4 col-md-4 col-sm-6 col-12 mt_sm--40">
                    <div class="brook-counter text-center">
                      <div class="icon">
                        <img src="/img/involve.svg" alt="" />
                      </div>
                      <div class="content">
                        <span class="count">10789</span>
                        <h6 class="heading heading-h6">參加人數</h6>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Counter -->
                </div>
              </div>
            </div>
            <!-- End Counterup Area -->

            <div id="eventRecord" class="row">
              <div class="col-12">
                <!-- Start Single Blog -->
                <div
                  class="blog-overlay wow animate__fadeInUp"
                  data-wow-iteration="1"
                  v-for="(item, index) in eventRecordContent"
                  :key="index"
                >
                  <div class="blog-grid-minimal overlay-image-list">
                    <div
                      class="grid-overlay"
                      style="background-image: url(img/eventhistory-1.jpg)"
                    ></div>
                    <div class="post-content">
                      <h5 class="heading">
                        <a :href="item.link">{{ item.title }}</a>
                      </h5>
                      <div class="post-meta">
                        <div class="post-date">{{ item.date }}</div>
                        <div class="post-category">
                          <a :href="item.link">{{ item.category }}</a>
                        </div>
                      </div>
                      <div class="post-arrow">
                        <a :href="item.link"
                          ><span class="fa fa-arrow-right"></span
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Single Blog -->

                <!-- Start Pagenation -->
                <!-- <div class="brook-pagination-wrapper text-center pt--80">
                                <ul class="brook-pagination">
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div> -->
                <!-- End Pagenation -->
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
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
import myRevoulation from '@/static/js/revoulation.js';
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
      eventRecordContent: [
        {
          title: "心肝寶貝的故事盒",
          date: "2021-11-19",
          category: "大嵙崁文教基金會",
          link: "https://www.beclass.com/rid=25465ad6194c73497ae6",
        },
        {
          title: "鳳友徵集令．鳳飛飛故事館",
          date: "2021-09-09",
          category: "大嵙崁文教基金會",
          link: "https://www.takoham.org.tw/news/4/53",
        },
        {
          title: "《大河與小飛》捐款贈繪本",
          date: "2021-08-25",
          category: "大嵙崁文教基金會",
          link: "https://www.takoham.org.tw/news/4/8",
        },
      ],
    };
  },
  mounted() {
    myMain();
    myRevoulation()
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: "animate__animated" }).init();
        // 在页面mounted生命周期里面 根据环境实例化WOW
      }
    });
  },
  destroyed() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.default {
}
</style>
