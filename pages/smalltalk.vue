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

      <!-- Page Conttent -->
      <main class="page-content">
        <!-- Start Testimonial Area -->
        <div
          class="brook-testimonial-area bg_color--7 pt--90 pt_sm--60"
          style="background: #222"
        >
          <div class="row row--0 align-items-center">
            <div
              class="
                col-lg-3 col-xl-4
                text-center
                ptb-md--80
                ptb-sm--80
                sm_d-none
              "
            >
              <div
                class="
                  brook-section-title
                  text-left
                  title-max-width
                  plr_sm--30
                  plr_md--40
                "
              >
                <p class="text-white">— 鳳飛飛敲敲話 —</p>
                <h3 class="heading heading-h3 text-white">
                  掌聲響起來<br />我心更明白<br />你們的愛將與我同在
                </h3>
              </div>
            </div>

            <slick
            class="testimonial-space-right testimonial-color-variation"
              ref="slick "
              :options="slickOptions"
          
            >
              <!-- Start Single Testimonial -->
              <div
                class="
                  testimonial
                  testimonial_style--1
                  hover-transparent
                  space-large--topbottom
                  bg-dark
                "
              >
                <div class="content">
                  <p class="bk_pra">
                    鳳飛飛主持風格十分自然，甚至苦心鑽研國外脫口秀主持方式，為當時的綜藝節目帶來嶄新的元素，也能引發觀眾的共鳴，這是鳳飛飛的魅力所在。
                  </p>
                  <div class="testimonial-info">
                    <div class="post-thumbnail">
                      <img src="img/clint-1.svg" alt="clint image" />
                    </div>
                    <div class="clint-info">
                      <h6>鄭文燦</h6>
                      <span>桃園市 市長</span>
                    </div>
                  </div>
                  <div class="testimonial-quote">
                    <span class="fa fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <!-- End Single Testimonial -->

              <!-- Start Single Testimonial -->
              <div
                class="
                  testimonial
                  testimonial_style--1
                  hover-transparent
                  space-large--topbottom
                  bg-dark
                "
              >
                <div class="content">
                  <p class="bk_pra">
                    這幾年特別懷念鳳飛飛，瘋狂收集鳳飛飛的影音產品，忍不住說出心中遺憾，「她復出時，我還不成氣候，沒能邀她做一對一的訪談。」
                  </p>
                  <div class="testimonial-info">
                    <div class="post-thumbnail">
                      <img src="img/clint-2.svg" alt="clint image" />
                    </div>
                    <div class="clint-info">
                      <h6>黃子佼</h6>
                      <span>主持人</span>
                    </div>
                  </div>
                  <div class="testimonial-quote">
                    <span class="fa fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <!-- End Single Testimonial -->

              <!-- Start Single Testimonial -->
              <div
                class="
                  testimonial
                  testimonial_style--1
                  hover-transparent
                  space-large--topbottom
                  bg-dark
                "
              >
                <div class="content">
                  <p class="bk_pra">
                    鳳飛飛的聲音，鳳姐的聲音她非常的厚實，她讓我燃起了希望，很謝謝她，她給很多想要做這行的孩子們，很多很好的榜樣。
                  </p>
                  <div class="testimonial-info">
                    <div class="post-thumbnail">
                      <img src="img/clint-4.svg" alt="clint image" />
                    </div>
                    <div class="clint-info">
                      <h6>黃韻玲</h6>
                      <span>音樂製作人</span>
                    </div>
                  </div>
                  <div class="testimonial-quote">
                    <span class="fa fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <!-- End Single Testimonial -->
              <!-- Start Single Testimonial -->
              <div
                class="
                  testimonial
                  testimonial_style--1
                  hover-transparent
                  space-large--topbottom
                  bg-dark
                "
              >
                <div class="content">
                  <p class="bk_pra">
                    當年鳳飛飛首次躍大銀幕就迅速進入狀況，因和鳳飛飛合作讓他順利入圍金馬獎最佳男主角。
                  </p>
                  <div class="testimonial-info">
                    <div class="post-thumbnail">
                      <img src="img/clint-3.svg" alt="clint image" />
                    </div>
                    <div class="clint-info">
                      <h6>梁修身</h6>
                      <span>導演</span>
                    </div>
                  </div>
                  <div class="testimonial-quote">
                    <span class="fa fa-quote-right"></span>
                  </div>
                </div>
              </div>
              <!-- End Single Testimonial -->
            </slick>
            <div class="brook-testimonial-area bg_color--7 pt--90 pt_sm--60">
              <div class="row row--0 align-items-center">
                <div
                  class="
                    col-lg-3 col-xl-4
                    text-center
                    ptb-md--80
                    ptb-sm--80
                    sm_d-none
                  "
                >
                  <div
                    class="
                      brook-section-title
                      text-left
                      title-max-width
                      plr_sm--30
                      plr_md--40
                    "
                  >
                    <p class="text-white">— 鳳飛飛敲敲話 —</p>
                    <h3 class="heading heading-h3 text-white">
                      掌聲響起來<br />我心更明白<br />你們的愛將與我同在
                    </h3>
                  </div>
                </div>

                <div class="col-lg-9 col-xl-8">
                  <div
                    class="
                      brook-element-carousel
                      slick-arrow-center
                      slick-arrow-triggle
                      slick-arrow-trigglestyle-2
                      testimonial-space-right testimonial-color-variation
                    "
                    data-slick-options='{
                                    "spaceBetween": 0, 
                                    "slidesToShow": 2, 
                                    "slidesToScroll": 1, 
                                    "arrows": true, 
                                    "infinite": true,
                                    "centerMode":true,
                                    "dots": false,
                                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                                }'
                    data-slick-responsive='[
                                    {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                    {"breakpoint":577, "settings": {"slidesToShow": 1}},
                                    {"breakpoint":481, "settings": {"slidesToShow": 1}}
                                ]'
                  >
                    <!-- Start Single Testimonial -->
                    <div
                      class="
                        testimonial
                        testimonial_style--1
                        hover-transparent
                        space-large--topbottom
                        bg-dark
                      "
                    >
                      <div class="content">
                        <p class="bk_pra">
                          鳳飛飛主持風格十分自然，甚至苦心鑽研國外脫口秀主持方式，為當時的綜藝節目帶來嶄新的元素，也能引發觀眾的共鳴，這是鳳飛飛的魅力所在。
                        </p>
                        <div class="testimonial-info">
                          <div class="post-thumbnail">
                            <img src="img/clint-1.svg" alt="clint image" />
                          </div>
                          <div class="clint-info">
                            <h6>鄭文燦</h6>
                            <span>桃園市 市長</span>
                          </div>
                        </div>
                        <div class="testimonial-quote">
                          <span class="fa fa-quote-right"></span>
                        </div>
                      </div>
                    </div>
                    <!-- End Single Testimonial -->

                    <!-- Start Single Testimonial -->
                    <div
                      class="
                        testimonial
                        testimonial_style--1
                        hover-transparent
                        space-large--topbottom
                        bg-dark
                      "
                    >
                      <div class="content">
                        <p class="bk_pra">
                          這幾年特別懷念鳳飛飛，瘋狂收集鳳飛飛的影音產品，忍不住說出心中遺憾，「她復出時，我還不成氣候，沒能邀她做一對一的訪談。」
                        </p>
                        <div class="testimonial-info">
                          <div class="post-thumbnail">
                            <img src="img/clint-2.svg" alt="clint image" />
                          </div>
                          <div class="clint-info">
                            <h6>黃子佼</h6>
                            <span>主持人</span>
                          </div>
                        </div>
                        <div class="testimonial-quote">
                          <span class="fa fa-quote-right"></span>
                        </div>
                      </div>
                    </div>
                    <!-- End Single Testimonial -->

                    <!-- Start Single Testimonial -->
                    <div
                      class="
                        testimonial
                        testimonial_style--1
                        hover-transparent
                        space-large--topbottom
                        bg-dark
                      "
                    >
                      <div class="content">
                        <p class="bk_pra">
                          鳳飛飛的聲音，鳳姐的聲音她非常的厚實，她讓我燃起了希望，很謝謝她，她給很多想要做這行的孩子們，很多很好的榜樣。
                        </p>
                        <div class="testimonial-info">
                          <div class="post-thumbnail">
                            <img src="img/clint-4.svg" alt="clint image" />
                          </div>
                          <div class="clint-info">
                            <h6>黃韻玲</h6>
                            <span>音樂製作人</span>
                          </div>
                        </div>
                        <div class="testimonial-quote">
                          <span class="fa fa-quote-right"></span>
                        </div>
                      </div>
                    </div>
                    <!-- End Single Testimonial -->
                    <!-- Start Single Testimonial -->
                    <div
                      class="
                        testimonial
                        testimonial_style--1
                        hover-transparent
                        space-large--topbottom
                        bg-dark
                      "
                    >
                      <div class="content">
                        <p class="bk_pra">
                          當年鳳飛飛首次躍大銀幕就迅速進入狀況，因和鳳飛飛合作讓他順利入圍金馬獎最佳男主角。
                        </p>
                        <div class="testimonial-info">
                          <div class="post-thumbnail">
                            <img src="img/clint-3.svg" alt="clint image" />
                          </div>
                          <div class="clint-info">
                            <h6>梁修身</h6>
                            <span>導演</span>
                          </div>
                        </div>
                        <div class="testimonial-quote">
                          <span class="fa fa-quote-right"></span>
                        </div>
                      </div>
                    </div>
                    <!-- End Single Testimonial -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Testimonial Area -->
      </main>
      <!--// Page Conttent -->
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
// import myRevoulation from '@/static/js/revoulation.js';
// import bottomBar from '@/components/bottom-bar.vue'
import Slick from "vue-slick";
import 'slick-carousel/slick/slick.css';

export default {
  auth: false,
  layout: "default",
  components: {
    Slick,
  },
  props: {},
  data() {
    return {
      slickOptions: {
        spaceBetween: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        dots: false,
        prevArrow: {
          buttonClass: "slick-btn slick-prev",
          iconClass: "fas fa-angle-left",
        },
        nextArrow: {
          buttonClass: "slick-btn slick-next",
          iconClass: "fas fa-angle-right",
        },
      },
    };
  },
  mounted() {
    myMain();
    // myRevoulation()
  },
  destroyed() {},
  computed: {},
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazyLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    },
  },
};
</script>

<style lang="scss" scoped>
.default {
}
</style>
