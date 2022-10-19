<template>
  <div class="template-color-1 template-font-1">


    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
        <div class="page-load-inner">
            <div class="preloader-wrap">
                <div class="wrap-2">
                    <div><img src="/img/ajax-loader.gif" alt="Brook Preloader"></div>
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
        class="breadcaump-area pt--170 pt_lg--170 pt_md--250 pt_sm--100 pb--40 pb_sm--0 bg_image--8 breadcaump-title-bar breadcaump-title-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <div class="newheading pb--70 pb_sm--0">
                                <div class="newheading-img">
                                    <img src="/img/CD-icon3.svg" alt="">
                                </div>
                                <h2>過去展覽</h2>
                            </div>

                            <div class="breadcrumb-insite">
                                <ul class="core-breadcaump">
                                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                                    <li class="current">展覽介紹</li>
                                    <li class="current">過去展覽</li>
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
            <div id="pastEvent" class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--0 bg_color--5">
                <div class="container">
                    <div class="row">
                        <!-- Start Single Blog -->
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 move-up wow mt--30"
                          v-for="(item, index) in eventRecordContent"
                          :key="index"
                        >
                            <div class="blog-grid">
                                <div class="post-thumb blog-slick-initial poss_relative" style="width: 100%;">
                                    <a :href="item.link">
                                        <img :src="item.images" alt="過去展覽">
                                    </a>
                                </div>

                                <div class="post-content">
                                    <div class="post-inner">
                                        <h5 class="heading heading-h5"><a :href="item.link">{{ item.title }}</a></h5>
                                        <div class="post-meta">
                                            <div class="post-date">{{ item.date }}</div>
                                            <div class="post-category"><a :href="item.link">{{ item.category }}</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Blog -->



                    </div>

                    <!-- <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-pagination-wrapper text-center pt--80">
                                <ul class="brook-pagination">
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
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
import myMain from '@/static/js/main.js';
import myRevoulation from '@/static/js/revoulation.js';

export default {
  auth: false,
  layout: 'default',
  components: {

  },
  props: {

  },
  data () {
    return {
      eventRecordContent: [
      {
        title: '鳳飛飛的一百種樣子 故事特展',
        date: '2020.07.16',
        category:'故事特展',
        link:'https://www.takoham.org.tw/news/8/47',
        images:'/img/pastEvent/pastEvent-20200716pic0.jpg'
      },
    ]
    }
  },
  mounted () {
    myMain()
    myRevoulation()
  },
  destroyed () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.default {

}
</style>
