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
                  <h2>音樂作品</h2>
                </div>

                <div class="breadcrumb-insite">
                  <ul class="core-breadcaump">
                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                    <li class="current">飛飛風采</li>
                    <li class="current">音樂作品</li>
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
          class="
            brook-counterup-area
            ptb--50
            ptb-md--50
            ptb-sm--30
            bg_color--1
            sm_d-none
          "
        >
          <div class="container">
            <div class="portfolio-main-info">
              <h3 class="heading heading-h3 line-height-1-42 p-purple">
                <span class="head-inner-big">賞</span>鳳飛飛的歌，<span
                  class="head-inner-big"
                  >聽</span
                >鳳飛飛的歌，<span class="head-inner-big">想</span>鳳飛飛的故事
              </h3>
              <p class="bk_pra mb--20" style="white-space: pre-line">
                鳳飛飛的77張專輯及1張林茜時期的合輯的封面，並分享鳳迷與鳳飛飛之間的故事，為了鳳飛飛溫暖歌聲環繞，選擇六首具代表性的金曲，透過AR互動讓參觀者可親身體驗並聆聽，實際傳頌鳳飛飛故事館的存在真義。
              </p>
            </div>
          </div>
        </div>

        <!-- Start Portfolio Area -->
        <div
          class="
            brook-portfolio-area
            ptb--80
            ptb-md--60
            ptb-sm--40
            bg_color--1
            bk-masonary-wrapper
            sm_d-none
          "
        >
          <div class="messonry-button text-center mb--20">
            <button :class="['01海山唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('01海山唱片')">
              <span class="filter-text">海山唱片</span>
              <span class="filter-counter">28</span>
            </button>
            <button :class="['02歌林唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('02歌林唱片')">
              <span class="filter-text">歌林唱片</span>
              <span class="filter-counter">28</span>
            </button>
            <button :class="['03東尼唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('03東尼唱片')">
              <span class="filter-text">東尼唱片</span>
              <span class="filter-counter">7</span>
            </button>
            <button :class="['04北聯唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('04北聯唱片')">
              <span class="filter-text">北聯唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['05藍與白唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('05藍與白唱片')">
              <span class="filter-text">藍與白唱片</span>
              <span class="filter-counter">3</span>
            </button>
            <button :class="['06真善美唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('06真善美唱片')">
              <span class="filter-text">真善美唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['07EMI唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('07EMI唱片')">
              <span class="filter-text">EMI唱片</span>
              <span class="filter-counter">3</span>
            </button>
            <button :class="['08環球唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('08環球唱片')">
              <span class="filter-text">環球唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['09寶麗金唱片' == currentBtn ? 'btn-color' : '']" @click="filterItems('09寶麗金唱片')">
              <span class="filter-text">寶麗金唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['10金牌大風' == currentBtn ? 'btn-color' : '']" @click="filterItems('10金牌大風')">
              <span class="filter-text">金牌大風</span>
              <span class="filter-counter">1</span>
            </button>
            <button :class="['*' == currentBtn ? 'btn-color' : '']" @click="filterItems('*')">
              <span class="filter-text">年代分類</span
              ><span class="filter-counter">78</span>
            </button>
          </div>

          <div class="container">
            <div id="Musics" class="row">
              <!-- <div class="resizer"></div> -->
              <!-- Start Single Blog -->
              <div
                class="col-lg-4 col-md-4 col-sm-6 col-12 mt--50 fix-bi"
                v-for="(item, index) in filterTable"
                :key="index"
                :class="item.category"
              >
                <div
                  v-if="showList"
                  class="blog-grid blog-standard grid-simple animate__animated"
                >
                  <div class="post-thumb">
                    <a :href="item.url">
                      <img :src="item.image" alt="音樂作品" />
                    </a>
                  </div>
                  <div class="post-content text-center">
                    <div class="post-inner">
                      <div class="post-m3eta">
                        <div class="post-date">發行時間</div>
                        <div class="post-category">{{ item.content }}</div>
                      </div>
                      <h5 class="heading heading-h5">
                        <!-- <span v-if="item.toptitle"
                          >{{ item.toptitle }}<br /></span -->
                        ><span></span>{{ item.title }}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Blog -->
            </div>
          </div>
        </div>
        <!-- End Portfolio Area -->
      </main>
      <!--// Page Conttent -->
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
      musicContent: [],
      filterTable: [],
      showList: true,
      currentBtn:""
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
      this.$axios.get(`/api/func/content/module/A081`)
        .then( res => {
          this.musicContent = res.data.data
          this.filterTable = res.data.data
          console.log(this.musicContent)
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
    async filterItems(filterText) {
      this.currentBtn = filterText
      let arr_l = document.getElementsByClassName("animate__animated");
      for (const a of arr_l) {
        a.classList.add("animate__zoomOut");
      }
      let arr_l2 = document.getElementsByClassName("animate__animated");
      const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          for (const a of arr_l2) {
            a.classList.remove("animate__zoomOut");
          }
          resolve();
        }, 400);
      });
      await promise1.then();

      if (filterText == "*") {
        this.filterTable = this.musicContent;
      } else {
        this.filterTable = this.musicContent.filter(
          (o) => o.category == filterText
        );
      }

      this.$nextTick(() => {
        let arr1 = document.getElementsByClassName("animate__animated");
        for (const a of arr1) {
          a.classList.add("animate__zoomIn");
        }
        let arr2 = document.getElementsByClassName("animate__animated");
        setTimeout(function () {
          for (const a of arr2) {
            a.classList.remove("animate__zoomIn");
          }
        }, 900);
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.btn-color .filter-text{
  color: #6001D2;
}
</style>
