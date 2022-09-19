<template>
  <div>
    <!-- Header -->
    <header
      class="
        br_header
        header-default
        light-logo--version
        haeder-fixed-width
        header-mega-menu
        clearfix
        header-purple-fixed
      "
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="header__wrapper mr--0">
              <!-- Header Left -->
              <div class="header-left flex-20">
                <div class="logo">
                  <NuxtLink to="/"
                    ><img src="img/home-logo-W.svg" alt="鳳飛飛故事館"
                  /></NuxtLink>
                </div>
              </div>
              <!-- Mainmenu Wrap -->
              <div class="header-flex-right flex-80">
                <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                  <nav class="page_nav">
                    <ul class="mainmenu">
                      <li class="lavel-1">
                        <nuxt-link to="/"><span>首頁</span></nuxt-link>
                      </li>
                      <li class="lavel-1">
                        <NuxtLink to="new-event"><span>最新活動</span></NuxtLink>
                      </li>
                      <li class="lavel-1">
                        <NuxtLink to="visit"><span>參觀資訊</span></NuxtLink>
                      </li>

                      <li class="lavel-1 with--drop slide-dropdown">
                        <a href="#"><span>展覽資訊</span></a>
                        <!-- Start Dropdown Menu -->
                        <ul class="dropdown__menu">
                          <li>
                            <NuxtLink to="exhibition-now"
                              ><span>本期展覽</span></NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="exhibition-past"
                              ><span>過去展覽</span></NuxtLink
                            >
                          </li>
                        </ul>
                        <!-- End Dropdown Menu -->
                      </li>
                      <li class="lavel-1 with--drop slide-dropdown">
                        <a href="#"><span>飛飛風采</span></a>
                        <!-- Start Dropdown Menu -->
                        <ul class="dropdown__menu">
                          <li>
                            <NuxtLink to="style-music"
                              ><span>音樂作品</span></NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="style-awards"
                              ><span>獎項紀錄</span></NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="style-voice"
                              ><span>飛飛聲影</span></NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="style-list"
                              ><span>飛飛大事記</span></NuxtLink
                            >
                          </li>
                        </ul>
                        <!-- End Dropdown Menu -->
                      </li>

                      <li class="lavel-1">
                        <NuxtLink to="journey"><span>飛飛踩點</span></NuxtLink>
                      </li>
                      <!-- <li class="lavel-1"><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
                      <!-- <li class="lavel-1"><a href="event-list.html"><span>活動記事</span></a></li> -->
                      <li class="lavel-1">
                        <NuxtLink to="about"><span>關於我們</span></NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- Header Right -->
                <div
                  class="
                    header-right
                    have-not-flex
                    pl--35
                    pl_md--5
                    pr_md--20
                    pl_sm--5
                    pr_sm--20
                  "
                >
                  <!-- Start Hamberger -->
                  <div
                    class="
                      manu-hamber
                      popup-mobile-click
                      d-block d-lg-none
                      light-version
                      d-block d-xl-none
                    "
                  >
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
              <img src="img/home-logo.svg" alt="Multipurpose" />
            </a>
          </div>
          <a class="mobile-close" href="#"></a>
        </div>
        <div class="menu-content">
          <ul class="menulist object-custom-menu">
            <li><NuxtLink to="/"><span>首頁</span></NuxtLink></li>
            <li><NuxtLink to="new-event"><span>最新活動</span></NuxtLink></li>
            <li><NuxtLink to="visit"><span>參觀資訊</span></NuxtLink></li>

            <li class="has-mega-menu">
              <a href="#"><span>展覽資訊</span></a>
              <ul class="object-submenu">
                <li>
                  <NuxtLink to="exhibition-now"><span>本期展覽</span></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="exhibition-past"
                    ><span>過去展覽</span></NuxtLink
                  >
                </li>
              </ul>
            </li>

            <li class="has-mega-menu">
              <a href="#"><span>飛飛風采</span></a>
              <ul class="object-submenu">
                <li>
                  <NuxtLink to="style-music"><span>音樂作品</span></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="style-awards"><span>獎項紀錄</span></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="style-voice"><span>飛飛聲影</span></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="style-list"><span>飛飛大事記</span></NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="journey"><span>飛飛踩點</span></NuxtLink>
            </li>
            <!--<li><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
            <!-- <li><a href="event-list.html"><span>活動記事</span></a></li> -->
            <li>
              <NuxtLink to="about"><span>關於我們</span></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Popup Menu -->
  </div>
</template>

<script>
// import $ from 'jquery'
// import myMain from "@/static/js/main.js";
// import myRevoulation from "@/static/js/revoulation.js";

export default {
  auth: false,
  layout: "default",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {
    // myMain();
    // myRevoulation();
  },
  destroyed() {},
  computed: {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.default {
}
</style>
