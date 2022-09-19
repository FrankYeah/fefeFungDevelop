<template>
  <div class="template-color-1 template-font-1">
    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
      <div class="page-load-inner">
        <div class="preloader-wrap">
          <div class="wrap-2">
            <div class="">
              <img src="img/ajax-loader.gif" alt="Brook Preloader" />
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
                    <img src="img/CD-icon3.svg" alt="" />
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
                    src="img/about-img-logo.jpg"
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
                    鳳飛飛故事館的起源
                  </h3>
                  <p class="bk_pra mb--20" style="white-space: pre-line">
                    取自1980年11月「就是溜溜的她」專輯唱片的字型為故事館標準字。
                    而「就是溜溜的她」正是日後揚名國際的大導演侯孝賢所執導的第一部電影。一位是聲勢如日中天的歌后鳳飛飛，一位是日後享譽國際的出道導演，兩人好似偶然又似注定地創造了彼此的生涯高峰。
                    我們以此紀念這空前絕後的歷史一頁。
                  </p>
                  <p class="bk_pra mb--20">
                    鳳飛飛故事館是鳳飛飛與我們的故事館；有鳳飛飛輝煌燦爛的演藝生涯，也有動人溫暖的人生啟示。故事館更希望匯流台灣流行音樂史與文化產業，作為一個互相激盪的平台，故事館將不斷地把故事流傳下去。
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
    return {};
  },
  mounted() {
    myMain();
    myRevoulation();
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
