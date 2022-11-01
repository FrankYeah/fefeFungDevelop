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
                  <h2>飛飛踩點</h2>
                </div>

                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">飛飛踩點</li>
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
        <div v-for="(item, index) in journeyContent"
          :key="index"
          class="brook-portfolio-details"
        >
          <div class="row row--0 pt--90 pt_md--30 pt_sm--30 pb--60">
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
                <div class="portfolio-image">
                  <img :src="item.image" alt="" style="width:100%" />
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
                  ml_md--20
                  ml_sm--20
                  mr_sm--20
                "
              >
                <div class="portfolio-main-info">
                  <h3 class="heading heading-h3 line-height-1-42 p-purple">
                    {{ item.title }}
                  </h3>
                  <p class="bk_pra mb--20 mt--20" v-html="item.content">
                  </p>
                  <!-- {{ item[1].title }} -->
                  <h4 class="heading line-height-1-95">操作方式</h4>
                  <p class="bk_pra mb--20"  v-html="item.remark">
                  </p>
                  <div class="dp-flex">
                    <div class="qrcode-img mr--15" v-if="item.url">
                      <!-- <img  :src="item.image" alt="" /> -->
                        <vue-qrcode
                          style="width: 100px; height: 100px;"
                          :value="item.url"
                          :options="qrcodeSet"
                        />
                    </div>
                    <!--  <a class="bk-btn black-btn mt--40 mt_sm--20" href="#">前往路線</a>  -->
                  </div>
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
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
  auth: false,
  layout: "default",
  components: {
    VueQrcode: VueQrcode
  },
  props: {},
  data() {
    return {
      journeyContent: [],
      qrcodeSet: {
        with: 100,
        height: 90,
        quality: 0.3,
        marign: 1
      }
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
      this.$axios.get(`/api/func/content/module/A09`)
        .then( res => {
          this.journeyContent = res.data.data
          // let temp = []
          // for(let i = 0; i < (this.journeyContent.length / 2); i++) {
          //   temp.push([
          //     this.journeyContent[i * 2], this.journeyContent[(i * 2) + 1]
          //   ])
          // }
          // this.journeyContent = temp
          console.log(this.journeyContent)
        })
        .catch(res => {
          console.log(res)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.default {
}
</style>
