<template>
  <!-- Footer -->
  <footer id="bk-footer"
  class="page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5" style="background: #000000;">
  <!-- Start Footer Top Area -->
  <div class="bk-footer-inner pt--50 pb--30 pt_sm--80">
      <div class="container">
          <div class="row">

              <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div class="footer-widget text-var--2 menu--contact">
                      <h2 class="widgettitle">{{ (allData.filter(data => data.category == 'footer_open'))[0].title }}</h2>
                      <div class="footer-address">
                          <div class="bk-hover">
                              <p v-html="(allData.filter(data => data.category == 'footer_open'))[0].content"></p>
                              <p v-html="(allData.filter(data => data.category == 'footer_position'))[0].content"></p>
                          </div>
                      </div>
                  </div>
                  <div class="footer-widget text-var--2 menu--contact">
                      <h2 class="widgettitle">{{ (allData.filter(data => data.category == 'footer_contact'))[0].title }}</h2>
                      <div class="footer-address">
                          <div class="bk-hover">
                              <p style="white-space: pre-line;" v-html="(allData.filter(data => data.category == 'footer_contact'))[0].content"></p>

                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-lg-5 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div class="footer-widget text-var--2 menu--contact">
                      <h2 class="widgettitle">{{ (allData.filter(data => data.category == 'footer_rest'))[0].title }}</h2>
                      <div class="footer-address">
                          <div class="bk-hover">
                              <p style="white-space: pre-line;" v-html="(allData.filter(data => data.category == 'footer_rest'))[0].content"></p>
                          </div>


                      </div>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div class="footer-widget text-var--2 menu--instagram">
                      <div style="max-width:70%;">
                          <img src="/img/home-logo-W.svg" alt="">
                      </div>
                      <div class="social-share social--transparent text-white mt--20 mb--20">
                          <!-- <a href="https://www.facebook.com/DaxiTakoham"><i class="fab fa-facebook"></i></a>
                          <a href="https://www.youtube.com/channel/UCX_5DKCU3VDqPcyQLyhT2Hg"><i class="fab fa-youtube"></i></a> -->
                      </div>
                      <div >
                          <img style="max-width:70%; margin: 0 auto;" src="/img/footer-icon.png" alt="">
                      </div>
                      <div style="margin: 8px 0px 4px; color: white;">
                        <div>日瀏覽數：{{ count.dailyCount }}</div>
                        <div>總瀏覽數：{{ count.totalCount }}</div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
  <!-- Start Footer Top Area -->

  <!-- Start Copyright Area -->
  <div class="copyright ptb--15 text-var-2">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-12 col-md-6 col-sm-12 col-12">
                  <div class="copyright-right text-md-left text-center">
                      <p>鳳飛飛故事館 版權所有 Copyright (C) 2021</p>
                      <p>建議解析度：1280x720以上　瀏覽器支援：Chrome、Firefox、Edge、Safari，Win7已不再支援IE，Win10將於2022年6月15日淘汰並停止支援IE。
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <loading v-if="isLoading" />
  <!-- End Copyright Area -->
  </footer>
  <!--// Footer -->
</template>

<script>
// import $ from 'jquery'
// import myMain from '@/static/js/main.js';
// import myRevoulation from '@/static/js/revoulation.js';

export default {
  auth: false,
  layout: 'default',
  components: {
    loading: require('~/components/loading.vue').default,
  },
  props: {

  },
  data () {
    return {
      isLoading: false,
      allData: [],
      count: {
        dailyCount: 1,
        totalCount: 5
      }
    }
  },
  created() {
    for(let i = 0; i < 30; i++) {
      let tempCategory = null
      if(i == 0) {
        tempCategory = 'footer_open'
      } else if (i == 1) {
        tempCategory = 'footer_img'
      } else if (i == 2) {
        tempCategory = 'footer_position'
      } else if (i == 3) {
        tempCategory = 'footer_contact'
      } else if (i == 4) {
        tempCategory = 'footer_rest'
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
    await this.getCount()
    // myMain()
    // myRevoulation()
  },
  destroyed () {

  },
  computed: {

  },
  methods: {
    async getData() {
      this.isLoading = true
      await this.$axios.get(`/api/func/content/module/A03`)
        .then( res => {
          this.isLoading = false
          this.allData = res.data.data
          console.log(this.allData)
          this.isLoading = false

        })
        .catch(res => {
          console.log(res)
          this.isLoading = false
        })
    },
    async getCount() {
      await this.$axios.get(`/api/func/count`)
        .then( res => {
          console.log(res.data)
          this.count = res.data
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
