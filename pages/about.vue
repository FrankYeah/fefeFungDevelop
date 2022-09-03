<template>
  <div class="template-color-1 template-font-1">

    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
        <div class="page-load-inner">
            <div class="preloader-wrap">
                <div class="wrap-2">
                    <div class=""> <img src="img/ajax-loader.gif" alt="Brook Preloader"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- End PReloader -->


    <!-- Wrapper -->
    <div id="wrapper" class="wrapper">

        <!-- Header -->
        <header
            class="br_header header-default light-logo--version haeder-fixed-width header-mega-menu clearfix header-purple-fixed">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            <!-- Header Left -->
                            <div class="header-left flex-20">
                                <div class="logo">
                                    <a href="index.html">
                                        <img src="img/home-logo-W.svg" alt="鳳飛飛故事館">
                                    </a>
                                </div>
                            </div>
                            <!-- Mainmenu Wrap -->
                            <div class="header-flex-right flex-80">
                                <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                                    <nav class="page_nav">
                                        <ul class="mainmenu">

                                            <li class="lavel-1"><nuxt-link to="/"><span>首頁</span></nuxt-link></li>
                                            <li class="lavel-1"><a href="new-event.html"><span>最新活動</span></a></li>
                                            <li class="lavel-1"><a href="visit.html"><span>參觀資訊</span></a></li>

                                            <li class="lavel-1 with--drop slide-dropdown"><a
                                                    href="#"><span>展覽資訊</span></a>
                                                <!-- Start Dropdown Menu -->
                                                <ul class="dropdown__menu">
                                                    <li><a href="exhibition-now.html"><span>本期展覽</span></a></li>
                                                    <li><a href="exhibition-past.html"><span>過去展覽</span></a></li>
                                                </ul>
                                                <!-- End Dropdown Menu -->
                                            </li>
                                            <li class="lavel-1 with--drop slide-dropdown"><a
                                                    href="#"><span>飛飛風采</span></a>
                                                <!-- Start Dropdown Menu -->
                                                <ul class="dropdown__menu">
                                                    <li><a href="style-music.html"><span>音樂作品</span></a></li>
                                                    <li><a href="style-awards.html"><span>獎項紀錄</span></a></li>
                                                    <li><a href="style-voice.html"><span>飛飛聲影</span></a></li>
                                                    <li><a href="style-list.html"><span>飛飛大事記</span></a></li>
                                                </ul>
                                                <!-- End Dropdown Menu -->
                                            </li>

                                            <li class="lavel-1"><a href="journey.html"><span>飛飛踩點</span></a></li>
                                            <!-- <li class="lavel-1"><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
                                            <!-- <li class="lavel-1"><a href="event-list.html"><span>活動記事</span></a></li> -->
                                            <li class="lavel-1"><a href="about.html"><span>關於我們</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Header Right -->
                                <div class="header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20">

                                    <!-- Start Hamberger -->
                                    <div
                                        class="manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none">
                                        <div>
                                            <i></i>
                                        </div>
                                    </div>
                                    <!-- End Hamberger -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </header>
        <!--// Header -->

        <!-- Start Popup Menu -->
        <div class="popup-mobile-manu popup-mobile-visiable">
            <div class="inner">
                <div class="mobileheader">
                    <div class="logo">
                        <a href="index.html">
                            <img src="img/home-logo.svg" alt="Multipurpose">
                        </a>
                    </div>
                    <a class="mobile-close" href="#"></a>
                </div>
                <div class="menu-content">
                    <ul class="menulist object-custom-menu">
                        <li><a href="index.html"><span>首頁</span></a></li>
                        <li><a href="new-event.html"><span>最新活動</span></a></li>
                        <li><a href="visit.html"><span>參觀資訊</span></a></li>

                        <li class="has-mega-menu"><a href="#"><span>展覽資訊</span></a>
                            <ul class="object-submenu">
                                <li><a href="exhibition-now.html"><span>本期展覽</span></a></li>
                                <li><a href="exhibition-past.html"><span>過去展覽</span></a></li>
                            </ul>
                        </li>

                        <li class="has-mega-menu"><a href="#"><span>飛飛風采</span></a>
                            <ul class="object-submenu">
                                <li><a href="style-music.html"><span>音樂作品</span></a></li>
                                <li><a href="style-awards.html"><span>獎項紀錄</span></a></li>
                                <li><a href="style-voice.html"><span>飛飛聲影</span></a></li>
                                <li><a href="style-list.html"><span>飛飛大事記</span></a></li>
                            </ul>
                        </li>
                        <li><a href="journey.html"><span>飛飛踩點</span></a></li>
                        <!--<li><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
                        <!-- <li><a href="event-list.html"><span>活動記事</span></a></li> -->
                        <li><a href="about.html"><span>關於我們</span></a></li>

                    </ul>
                </div>
            </div>
        </div>
        <!-- End Popup Menu -->

        <!-- Start Breadcaump Area -->
        <div
            class="breadcaump-area pt--170 pt_lg--170 pt_md--250 pt_sm--200 pb--40 bg_image--8 breadcaump-title-bar breadcaump-title-white sm_d-none">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <div class="newheading pb--70">
                                <div class="newheading-img">
                                    <img src="img/CD-icon3.svg" alt="">
                                </div>
                                <h2>關於我們</h2>
                            </div>

                            <div class="breadcrumb-insite">
                                <ul class="core-breadcaump">
                                    <li><a href="index.html">首頁</a></li>
                                    <li class="current">關於我們</li>
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
            <div class="brook-portfolio-details">
                <div class="row row--0 pt--90 pt_md--30 pt_sm--120 pb--60">
                    <!-- Portfolio Left -->
                    <div class="col-lg-6 col-12">
                        <div
                            class="portfolio-right portfolio-details-gallery text-left pl_md--40 pr_md--40 pl_sm--20 pr_sm--20 mr--50 mr_sm--0">
                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img src="img/about-img-logo.jpg" alt="">
                            </div>
                            <!-- End Portfolio Image -->
                        </div>
                    </div>

                    <!-- Portfolio Right -->
                    <div class="col-lg-6 col-12 mt_md--40 mt_sm--20">
                        <div
                            class="portfolio-left bk-portfolio-details max-width-450 mr--90 ml_lg--50 pl_sm--20 pr_sm--20 mr_sm--0">
                            <div class="portfolio-main-info">
                                <h3 class="heading heading-h3 line-height-1-42 p-purple">鳳飛飛故事館的起源</h3>
                                <p class="bk_pra mb--20" style="white-space: pre-line;">
                                    取自1980年11月「就是溜溜的她」專輯唱片的字型為故事館標準字。
                                    而「就是溜溜的她」正是日後揚名國際的大導演侯孝賢所執導的第一部電影。一位是聲勢如日中天的歌后鳳飛飛，一位是日後享譽國際的出道導演，兩人好似偶然又似注定地創造了彼此的生涯高峰。
                                    我們以此紀念這空前絕後的歷史一頁。
                                </p>
                                <p class="bk_pra mb--20">
                                    鳳飛飛故事館是鳳飛飛與我們的故事館；有鳳飛飛輝煌燦爛的演藝生涯，也有動人溫暖的人生啟示。故事館更希望匯流台灣流行音樂史與文化產業，作為一個互相激盪的平台，故事館將不斷地把故事流傳下去。
                                </p>

                                <a class="bk-btn black-btn mt--40 mt_sm--20"
                                    href="https://my.matterport.com/show/?m=KksxKwUVRtp&lang=en&cloudEdit=1&sr=-.17,-.55&ss=43">實境導覽</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Portfolio Details -->


        </main>
        <!--// Page Conttent -->
    </div>


    <!-- <headerBar/>
    <nuxt/>
    <bottomBar/> -->
  </div>
</template>

<script lang="ts">
// import $ from 'jquery'
import { defineComponent, ref, reactive, onMounted } from 'vue'
import bottomBar from '@/components/bottom-bar.vue'
import myMain from '@/static/js/main.js';
import myRevoulation from '@/static/js/revoulation.js';

export default defineComponent({
  auth: false,
  components: {
    bottomBar: bottomBar,
  },
  setup (props, context) {

    onMounted(() => {
      myMain()
      myRevoulation()
    })


    return {
    }
  }
})
</script>

<style lang="scss" scoped>

.default {

}
