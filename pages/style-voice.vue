<template>
<div class="template-color-1 template-font-1">

    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
        <div class="page-load-inner">
            <div class="preloader-wrap">
                <div class="wrap-2">
                    <div class=""> <img src="/img/ajax-loader.gif" alt="Brook Preloader"></div>
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
                                <h2>飛飛聲影</h2>
                            </div>

                            <div class="breadcrumb-insite">
                                <ul class="core-breadcaump">
                                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                                    <li class="current">飛飛風采</li>
                                    <li class="current">飛飛聲影</li>
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

            <!-- Start Audio Player Area -->
            <div class="brook-player-area bg_color--1 pb--80 pt--80 pt_md--40 pt_sm--40  pb_md--40 pb_sm--40">
                <div class="container">
                    <p class="col-lg-8 mx-auto sub-title" v-html="(allData.filter(data => data.category == 'audio_title'))[0].content"></p>
                    <div class="row">
                        <!-- Single Audio Player Start -->
                        <div v-for="(item, index) in allData.filter(data => data.category == 'audio_voice')"
                          :key="index"
                          class="col-lg-8 mx-auto">
                            <div class="single-audio-player mb--20">
                                <div class="audio-title">
                                    <h4 class="title" v-html="item.content"></h4>
                                </div>
                                <audio :id="`player-${index + 1}`" controls>
                                    <source :src="item.image" type="" />
                                </audio>
                            </div>
                        </div>
                        <!-- Single Audio Player End -->

                    </div>
                </div>
            </div>
            <!-- End Audio Player Area -->

            <!-- Start Youtube Player Area -->
            <div
              class="brook-player-area bg_color--1 pb--80 pt--40 pt_md--40 pt_sm--40  pb_md--40 pb_sm--40"
            >
                <div class="container">
                    <h3 class="col-lg-8 mx-auto sm_center" v-html="(allData.filter(data => data.category == 'video_title'))[0].content"></h3>
                    <!-- <p class="col-lg-8 mx-auto sub-title">影片出處由OOOO提供，若想聽鳳飛飛故事完整版，歡迎前往鳳飛飛故事館聆聽</p> -->
                    <div class="mt--40 mt_sm--20 mt_md--30">
                        <!-- Single Youtube Player Start -->
                        <div v-for="(item, index) in allData.filter(data => data.category == 'video_voice')"
                          :key="index"
                          class="col-lg-8 mx-auto mb--60"
                        >
                            <div class="audio-title">
                                <h4 class="title" v-html="item.content"></h4>
                                <!-- <p class="sub-title">1971年 ｜ 黃金夜總會</p> -->
                            </div>
                            <div class="single-youtube-player mb--20">
                                <div class="plyr__video-embed" :id="`youtube-video${index + 1}`">
                                    <iframe
                                        :src="item.url"
                                        allowfullscreen
                                        allowtransparency
                                        allow="autoplay"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <!-- Single Youtube Player End -->

                    </div>
                </div>
            </div>
            <!-- End Youtube Player Area -->

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
      allData: []
    }
  },
  created() {
    for(let i = 0; i < 30; i++) {
      let tempCategory = null
      if(i == 0) {
        tempCategory = 'video_title'
      } else if (i == 1) {
        tempCategory = 'video_voice'
      } else if (i == 2) {
        tempCategory = 'audio_title'
      } else if (i == 3) {
        tempCategory = 'audio_voice'
      }

      this.allData.push({
        auth: null,
        category: tempCategory,
        content: null,
        image: null,
        indexR: null,
        module: null,
        postDate: null,
        remark: null,
        states: null,
        title: null,
        url: null
      })
    }
  },
  async mounted () {
    await this.getData()
    setTimeout(() => {
      myMain()
      myRevoulation()
    }, 10)
  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    async getData() {
      await this.$axios.get(`/api/func/content/module/A083`)
        .then( res => {
          this.allData = res.data.data
          console.log(this.allData)
        })
        .catch(res => {
          console.log(res)
        })
    },
  }
}
</script>

<style lang="scss" scoped>

.default {

}

</style>
