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
                    ><img src="/img/home-logo-W.svg" alt="鳳飛飛故事館"
                  /></NuxtLink>
                </div>
              </div>
              <!-- Mainmenu Wrap -->
              <div class="header-flex-right flex-80">
                <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                  <nav class="page_nav">
                    <ul class="mainmenu">
                      <li class="lavel-1">
                        <NuxtLink to="/"><span>首頁</span></NuxtLink>
                      </li>
                      <li v-if="(showAll.filter(data => data.category == 'newActivity'))[0].remark == '顯示'" class="lavel-1">
                        <NuxtLink to="/new-event"
                          ><span>最新活動</span></NuxtLink
                        >
                      </li>
                      <li v-if="(showAll.filter(data => data.category == 'visit'))[0].remark == '顯示'" class="lavel-1">
                        <NuxtLink to="/visit"><span>參觀資訊</span></NuxtLink>
                      </li>

                      <li class="lavel-1 with--drop slide-dropdown">
                        <a href="#"><span>展覽資訊</span></a>
                        <!-- Start Dropdown Menu -->
                        <ul class="dropdown__menu">
                          <li v-if="(showAll.filter(data => data.category == 'newEvent'))[0].remark == '顯示'">
                            <NuxtLink to="/exhibition-now"
                              ><span>本期展覽</span></NuxtLink
                            >
                          </li>
                          <li v-if="(showAll.filter(data => data.category == 'pastEvent'))[0].remark == '顯示'">
                            <NuxtLink to="/exhibition-past"
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
                          <li v-if="(showAll.filter(data => data.category == 'styleMusic'))[0].remark == '顯示'">
                            <NuxtLink to="/style-music"
                              ><span>音樂作品</span></NuxtLink
                            >
                          </li>
                          <li v-if="(showAll.filter(data => data.category == 'styleAward'))[0].remark == '顯示'">
                            <NuxtLink to="/style-awards"
                              ><span>獎項紀錄</span></NuxtLink
                            >
                          </li>
                          <li v-if="(showAll.filter(data => data.category == 'styleVoice'))[0].remark == '顯示'">
                            <NuxtLink to="/style-voice"
                              ><span>飛飛聲影</span></NuxtLink
                            >
                          </li>
                          <li v-if="(showAll.filter(data => data.category == 'styleList'))[0].remark == '顯示'">
                            <NuxtLink to="/style-list"
                              ><span>飛飛大事記</span></NuxtLink
                            >
                          </li>
                        </ul>
                        <!-- End Dropdown Menu -->
                      </li>

                      <li v-if="(showAll.filter(data => data.category == 'journey'))[0].remark == '顯示'" class="lavel-1">
                        <NuxtLink to="/journey"><span>飛飛踩點</span></NuxtLink>
                      </li>
                      <!-- <li class="lavel-1"><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
                      <!-- <li class="lavel-1"><a href="event-list.html"><span>活動記事</span></a></li> -->
                      <li v-if="(showAll.filter(data => data.category == 'about'))[0].remark == '顯示'" class="lavel-1">
                        <NuxtLink to="/about"><span>關於我們</span></NuxtLink>
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
                  <!-- popup-mobile-click -->
                  <img @click="showMenu()" class="header-menu" src="/img/menu.png" alt="">
                  <!-- <div
                    class="
                      manu-hamber
                      d-block d-lg-none
                      light-version
                      d-block d-xl-none
                    "
                  >
                    <div>
                      <i></i>
                    </div>
                  </div> -->
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
     <!-- popup-mobile-visiable -->
    <div v-if="isShowRwd" class="popup-mobile-manu">
      <div class="inner">
        <div class="mobileheader">
          <div class="logo">
            <NuxtLink to="/">
              <img
                @click="menuClose()"
                src="/img/home-logo.svg"
                alt="Multipurpose"
              />
            </NuxtLink>
          </div>
          <img @click="hideMenu()"
            src="/img/closeMenu.png"
          />
          <!-- <a class="mobile-close" href="#"></a> -->
        </div>
        <div class="menu-content">
          <ul class="menulist object-custom-menu">
            <NuxtLink to="/">
              <li @click="menuClose()" class="manu-li first-manu-li">
                <span>首頁</span>
              </li></NuxtLink
            >

            <NuxtLink v-if="(showAll.filter(data => data.category == 'newActivity'))[0].remark == '顯示'" to="new-event"
              ><li class="manu-li" @click="menuClose()">
                <span>最新活動</span>
              </li></NuxtLink
            >

            <NuxtLink v-if="(showAll.filter(data => data.category == 'visit'))[0].remark == '顯示'" to="visit"
              ><li class="manu-li" @click="menuClose()">
                <span>參觀資訊</span>
              </li></NuxtLink
            >

            <li class="has-mega-menu">
              <a @click="isShowEvent = !isShowEvent" href="#"><span>展覽資訊</span></a>
              <ul v-if="isShowEvent" class="object-submenu">
                <NuxtLink v-if="(showAll.filter(data => data.category == 'newEvent'))[0].remark == '顯示'" to="exhibition-now"
                  ><li @click="menuClose()"><span>本期展覽</span></li></NuxtLink
                >

                <NuxtLink v-if="(showAll.filter(data => data.category == 'pastEvent'))[0].remark == '顯示'" to="exhibition-past"
                  ><li @click="menuClose()"><span>過去展覽</span></li></NuxtLink
                >
              </ul>
            </li>

            <li class="has-mega-menu">
              <a @click="isShowProduct = !isShowProduct" href="#"><span>飛飛風采</span></a>
              <ul v-if="isShowProduct" class="object-submenu">
                <NuxtLink v-if="(showAll.filter(data => data.category == 'styleMusic'))[0].remark == '顯示'" to="style-music"
                  ><li @click="menuClose()"><span>音樂作品</span></li></NuxtLink
                >

                <NuxtLink v-if="(showAll.filter(data => data.category == 'styleAward'))[0].remark == '顯示'" to="style-awards">
                  <li @click="menuClose()"><span>獎項紀錄</span></li></NuxtLink
                >

                <NuxtLink v-if="(showAll.filter(data => data.category == 'styleVoice'))[0].remark == '顯示'" to="style-voice">
                  <li @click="menuClose()"><span>飛飛聲影</span></li></NuxtLink
                >

                <NuxtLink v-if="(showAll.filter(data => data.category == 'styleList'))[0].remark == '顯示'" to="style-list">
                  <li @click="menuClose()">
                    <span>飛飛大事記</span>
                  </li></NuxtLink
                >
              </ul>
            </li>

            <NuxtLink v-if="(showAll.filter(data => data.category == 'journey'))[0].remark == '顯示'" to="journey">
              <li class="manu-li" @click="menuClose()">
                <span>飛飛踩點</span>
              </li></NuxtLink
            >

            <!--<li><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
            <!-- <li><a href="event-list.html"><span>活動記事</span></a></li> -->

            <NuxtLink v-if="(showAll.filter(data => data.category == 'about'))[0].remark == '顯示'" to="about">
              <li class="manu-li" @click="menuClose()">
                <span>關於我們</span>
              </li></NuxtLink
            >
          </ul>
        </div>
      </div>
    </div>
    <!-- End Popup Menu -->
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  auth: false,
  layout: "default",
  components: {},
  props: {},
  data() {
    return {
      isShowRwd: false,
      isShowEvent: false,
      isShowProduct: false
    };
  },
  mounted() {
  },
  destroyed() {},
  computed: {
    showAll() { return this.$store.state.showAll },
  },
  methods: {
    showMenu() {
      this.isShowRwd = true
    },
    hideMenu() {
      this.isShowRwd = false
    },
    removeClass(elements, classname) {
      // elements 為空字串或空陣列
      if (!elements) {
        return;
      }

      // 如果是字串則 querySelectorAll，只有一個元素則轉成陣列(方便處理)
      if (typeof elements === "string") {
        elements = document.getElementsByTagName(elements);
      } else if (elements.tagName) {
        elements = [elements];
      }

      // 新增要尋找的 classanme RE
      var reg = new RegExp("(^| )" + classname + "($| )", "g");

      // 利用 RE 去取代為空白
      for (var i = 0; i < elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg, " ");
      }
    },
    menuClose() {
      this.removeClass("body", "popup-mobile-menu-wrapper");
    },
  },
};
</script>


<style lang="scss" scoped>
.default {
}

.header-menu {
  display: none;
  width: 24px;
  height: 24px;
  margin-top: 8px;
  cursor: pointer;
}

.manu-li {
  padding-top: 19px;
  padding-bottom: 19px;
  display: block;
  position: relative;
  border-top: 1px solid transparent;
  border-color: rgba(255, 255, 255, 0.15);
}
.first-manu-li{
  border-top: 0
}

@media (max-width: 992px) {

  .header-menu {
    display: initial;
  }

}


</style>
