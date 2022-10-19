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
              <img class="w-100" src="/img/map-new.png" alt="參觀資訊" />
            </div>
            <div class="row">
              <!-- Start Single Career -->
              <div class="col-12">
                <div class="career mb--30">
                  <div class="inner">
                    <div class="content">
                      <h5 class="heading heading-h5 head-gray-bg">開放時間</h5>
                      <div class="desc mt--25">
                        <p>週二至週日 09:30~17:00</p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">館舍位置</h5>
                      <div class="desc mt--25">
                        <p>鳳飛飛故事館（335桃園市大溪區普濟路5號）</p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">休館時間</h5>
                      <div class="desc mt--25">
                        <p>△每週一休館 (如遇國定假日照常開放，翌日休館)</p>
                        <p>△農曆除夕、大年初一休館</p>
                        <p>△政府公告之天然災害停止上班日</p>
                        <p>△本館另行公告之必要休館日</p>
                        <p>
                          <a href="https://www.takoham.org.tw/news/3/117"
                            >△111年連假休館日詳細資訊</a
                          >
                        </p>
                      </div>
                    </div>

                    <div class="content mt--35">
                      <h5 class="heading heading-h5 head-gray-bg">聯絡資訊</h5>
                      <div class="desc mt--25">
                        <p>財團法人大嵙崁文教基金會</p>
                        <p>聯絡地址：335桃園市大溪區中山路29號</p>
                        <p>服務電話： (03)388-0871</p>
                        <p>服務信箱：takoham85@gmail.com</p>
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
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    myMain();
    myRevoulation();
    custom();
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
