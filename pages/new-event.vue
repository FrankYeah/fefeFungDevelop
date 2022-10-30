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
                  <h2>最新活動</h2>
                </div>

                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">最新活動</li>
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
        <div
          id="newEvent"
          class="
            bk-blog-grid-area
            pt--70
            pb--100
            pt_md--80
            pb_md--80
            pb_sm--80
            pt_sm--0
            bg_color--1
          "
        >
          <div class="container">
            <div class="row">
              <div
                class="
                  col-lg-3 col-md-4 col-sm-6 col-12
                  mt--30
                  wow
                  animate__fadeInUp
                "
                data-wow-iteration="1"
                v-for="(item, index) in eventContent"
                :key="index"
              >
                <div class="blog-grid">
                  <div
                    class="post-thumb blog-slick-initial poss_relative"
                    style="width: 100%; height: 143px"
                  >
                    <a v-if="item.url" :href="item.url">
                      <img :src="item.image" alt="最新活動" />
                    </a>
                    <NuxtLink v-else :to="`/new-event-in?index=${index}`">
                      <img :src="item.image" alt="最新活動" />
                    </NuxtLink>
                  </div>

                  <div class="post-content">
                    <div class="post-inner">
                      <h5 class="heading heading-h5">
                        <a v-if="item.url" :href="item.url">{{ item.title }}</a>
                        <NuxtLink v-else :to="`/new-event-in?index=${index}`">
                        {{ item.title }}</NuxtLink>
                      </h5>
                      <div class="post-meta">
                        <div class="post-date">{{ item.postDate.substr(0, 11) }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
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
      eventContent: [{
        auth: null,
        category: null,
        content: null,
        image: null,
        indexR: null,
        module: null,
        postDate: '1111111111111111',
        remark: null,
        states: null,
        title: null,
        url: null
      }]
    };
  },
  mounted() {

    myMain()
    myRevoulation()
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: "animate__animated" }).init();
        // 在页面mounted生命周期里面 根据环境实例化WOW
      }
    });
    this.getData()
  },
  destroyed() {},
  computed: {},
  methods: {
    getData() {
      this.$axios.get(`/api/func/content/module/A04`)
        .then( res => {
          this.eventContent = res.data.data
          console.log(this.eventContent)

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
