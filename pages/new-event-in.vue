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
                                <h2>最新活動</h2>
                            </div>

                            <div class="breadcrumb-insite">
                                <ul class="core-breadcaump">
                                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                                    <li class="current">最新活動</li>
                                    <!-- <li class="current">過去展覽</li> -->
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
                <div  class="container">
                    <h1 v-if="isShow" style="font-size: 30px; color: black; margin-bottom: 8px;">{{ eventContent[this.queryIndex].title }}</h1>
                    <h1 v-if="isShow" style="font-size: 18px; color: black; ">{{ eventContent[this.queryIndex].postDate.substr(0, 11) }}</h1>
                    <br>
                    <div >

                        <!-- Start Single Blog -->
                        <div v-html="eventContent[this.queryIndex].content"></div>
                        <!-- End Single Blog -->
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
      queryIndex: 0,
      isShow: false,
      eventContent: [
        {
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
        },
      ]
    }
  },
  mounted () {
    myMain()
    myRevoulation()
    this.getData()
    console.log(this.queryIndex)
  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    getData() {
      this.$axios.get(`/api/func/content/module/A04`)
        .then( res => {
          this.eventContent = res.data.data
          this.queryIndex = this.$route.query.index
          this.isShow = true
          console.log(this.eventContent)
        })
        .catch(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.default {

}
</style>
