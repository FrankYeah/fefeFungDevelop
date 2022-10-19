<template>
<div class="template-color-1 template-font-1">


    <!-- Start PReloader -->
    <!-- <div id="page-preloader" class="page-loading clearfix">
        <div class="page-load-inner">
            <div class="preloader-wrap">
                <div class="wrap-2">
                    <div><img src="/img/ajax-loader.gif" alt="Brook Preloader"></div>
                </div>
            </div>
        </div>
    </div> -->
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
                                    <img src="img/CD-icon3.svg" alt="">
                                </div>
                                <h2>飛飛大事記</h2>
                            </div>
                            <div class="breadcrumb-insite">
                                <ul class="core-breadcaump">
                                    <li><NuxtLink to="/">首頁</NuxtLink></li>
                                    <li class="current">飛飛風采</li>
                                    <li class="current">飛飛大事記</li>
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
            <div class="bk-blog-grid-area pt--40 pb--100 pt_md--5 pb_md--80 pb_sm--80 pt_sm--5 bg_color--1">
                <div class="container">

                    <div id="bigRecord" class="row">
                        <div class="col-12">
                            <!-- Start Single Blog -->
                            <div class="blog-overlay move-up wow animate__fadeInUp"
                data-wow-iteration="1"
                              v-for="(item, index) in eventRecordContent"
                              :key="index"
                            >
                                <div class="blog-grid-minimal overlay-image-list">
                                    <div class="grid-overlay" style="background-image: url(img/history-1.jpg)">
                                    </div>
                                    <div class="post-content">
                                        <h5 class="heading">《{{ item.year }}》{{ item.title }}</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Blog -->

                        </div>

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
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
// import $ from 'jquery'
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

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
            title: '第一首歌【初見一日】出版，以林茜為名，收錄於歌林金曲獎唱片專輯。',
            year:'1971',
        },
        {
            title: '第一次參加華視閩南語劇【燕雙飛】演出，演唱同名主題曲。',
            year:'1972',
        },
        {
            title: '第一首台語歌曲收錄於海山唱片【燕雙飛】，自此改名為鳳飛飛。',
            year:'1972',
        },
        {
            title: '第一次見報，為【祝你幸福】唱片宣傳。',
            year:'1972',
        },
        {
            title: '第一次作秀，在嘉義豪華大歌廳。',
            year:'1972',
        },
        {
            title: '第一次上中視金曲獎節目，演唱郭芝苑大師作品【紅薔薇】。',
            year:'1973',
        },
        {
            title: '第一次赴新加坡演唱，行李還帶著金蘭醬油與S26奶粉，此行獲東南亞十大歌星頭銜。',
            year:'1974',
        },
        {
            title: '第一次參加台視【銀河璇宮】｜加盟台視。',
            year:'1975',
        },
        {
            title: '第一次個人電視專輯【歌星之夜】。',
            year:'1975',
        },
        {
            title: '第一次歌友聯歡會。',
            year:'1975',
        },
        {
            title: '第一次主持大型現場播出綜藝節目【我愛週末】。',
            year:'1976',
        },
        {
            title: '第一個廣告片－【國際牌五極三鏡】，之後續拍台麗洗面皂、脫普洗髮粉、耐斯洗髮粉。',
            year:'1976',
        },
        {
            title: '第一次主持大型現場播出綜藝節目【我愛週末】。',
            year:'1976',
        },
        {
            title: '第一次，鳳飛飛創下唱片產量最高的一年，也是產出最多膾炙人口 的歌曲的一年。',
            year:'1976',
        },
        {
            title: '第一張金唱片，【我是一片雲】唱片銷售量突破四十五萬張。',
            year:'1977',
        },
        {
            title: '第一本專輯出刊【鳳飛飛的感情世界】。',
            year:'1977',
        },
        {
            title: '第一張台語專輯【心酸酸/台灣歌謠1】。',
            year:'1977',
        },
        {
            title: '第一次赴金門勞軍。',
            year:'1978',
        },
        {
            title: '第一次到美國為中華青少棒隊加油，任啦啦隊隊長。',
            year:'1978',
        },
        {
            title: '第一部電影【春寒】上映。同年【秋蓮】上映，並隨片登台。這是鳳飛飛電影年，演出演唱一手包辦，可謂整合行銷的先驅人物。二月出版電影唱片【雁兒在林梢】；六月出版電影唱片【春寒】；十月出版電影唱片【又見秋蓮】。',
            year:'1979',
        },
        {
            title: '第一次全台巡迴演出，在台北狄斯角/台中聯美/台南元寶/高雄喜相逢登台表演。',
            year:'1980',
        },
        {
            title: '解嚴前第一次，歌迷機場大聚集，歡送鳳飛飛于歸香港趙家，創下紀錄。',
            year:'1981',
        },
        {
            title: '第一次千人戶外！八月在家鄉桃園大溪中正公園舉行千人歌迷聯歡會。',
            year:'1981',
        },
        {
            title: '訪問台中潭子及高雄楠梓加工出口區，第一次榮獲【勞工天使】的稱譽。',
            year:'1981',
        },
        {
            title: '第一次全台語節目！全台語電視專輯【鳳懷鄉土情】，介紹台灣民風習俗。',
            year:'1982',
        },
        {
            title: '第一次全台大集合！全台歌迷出席30歲【鳳飛飛慶生會】。',
            year:'1982',
        },
        {
            title: '第一個全台灣個人歌友會【鳳之友聯誼會】成立。',
            year:'1982',
        },
        {
            title: '第一次，也是唯一一次與鄧麗君同台，從鄧麗君手中接下金鐘獎女歌星演員獎。',
            year:'1982',
        },
        {
            title: '第一位也是唯一一位，蟬聯金鐘獎最佳女歌星演員獎。',
            year:'1983',
        },
        {
            title: '出席【星馬歌友聯誼會】，第一次創下七萬人參與的空前紀錄！',
            year:'1984',
        },
        {
            title: '第一次發行限量版水晶黑膠唱片｜【掌聲響起】。此張專輯也成為鳳飛飛生涯代表作之一。',
            year:'1986',
        },
        {
            title: '第一次也是唯一一次，在台北國父紀念館與孫越先生乘坐熱汽球響應拒菸運動。',
            year:'1987',
        },
        {
            title: '第一次引進，香港製作巨型海報153×102公分，空運來台，首創歌壇防水、不褪色、撕不破之創舉。',
            year:'1987',
        },
        {
            title: '第一次！電影【春寒】在北京上映。',
            year:'1988',
        },
        {
            title: '第一個，也是唯一個小孩趙彣霖誕生。',
            year:'1989',
        },
        {
            title: '產後第一次推出新歌專輯【浮世情懷】。',
            year:'1991',
        },
        {
            title: '第一次與知名作家小野跨界合作製作概念專輯【想要彈同調1】。而皇冠出版之小野著作【想要彈同調】同步發行。',
            year:'1992',
        },
        {
            title: '返台參加第30屆金馬獎晚會，第一次擔任頒獎人，同時賣力演出，與扮演梁山伯港星葉玉卿合唱樓台會、與王靜瑩演出【草橋結拜】、與邱淑貞演出【十八相送】。',
            year:'1993',
        },
        {
            title: '第一次為不是自己主演電影與侯孝賢合作｜【戲夢人生】插曲。',
            year:'1993',
        },
        {
            title: '第一次！在台灣與兒子於正式場合出現，應邀為職棒比賽開球。',
            year:'1995',
        },
        {
            title: '第一次！鳳之友聯誼會成立【鳳飛飛全球資訊網】。',
            year:'1995',
        },
        {
            title: '第一次間隔最久時間的專輯！睽違14年，再次錄製國語新歌【想要跟你飛】。',
            year:'2008',
        },
        {
            title: '第一次創下十場【鳳飛飛流水年華演唱會】，全台座無虛席的紀錄，史稱十全十美。',
            year:'2010',
        },
        {
            title: '肺癌病逝，葬於桃園大溪的佛光山寶塔寺。',
            year:'2012',
        },
    ]
    }
  },
  mounted () {
     myMain();
    myRevoulation();
   this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: "animate__animated" }).init();
        // 在页面mounted生命周期里面 根据环境实例化WOW
      }
    });
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
