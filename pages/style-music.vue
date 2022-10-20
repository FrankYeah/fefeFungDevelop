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

        <div class="custom-slide-wrap sm_show">
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">海山唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=AIcWy2GMhtA"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/祝你幸福.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1972年3月</div>
                        </div>
                        <h5 class="heading heading-h5">祝你幸福</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=kPHUeTyoX2c"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/五月的花.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1972年6月</div>
                        </div>
                        <h5 class="heading heading-h5">五月的花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=9HH4p07W7Pg"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/我沒有錯.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1972年9月</div>
                        </div>
                        <h5 class="heading heading-h5">我沒有錯</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=1k-5IvQdY6M"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/愛的禮物.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年3月</div>
                        </div>
                        <h5 class="heading heading-h5">愛的禮物</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=jyz96Z5pOaU"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/串串風鈴響.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年6月</div>
                        </div>
                        <h5 class="heading heading-h5">串串風鈴響</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=QwS7qq1rh1g"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/你是否忘記了.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年9月</div>
                        </div>
                        <h5 class="heading heading-h5">你是否忘記了</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=U7rS5Vm2o64"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/花謝花飛飛滿天.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年9月</div>
                        </div>
                        <h5 class="heading heading-h5">花謝花飛飛滿天</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=XVLQ6p-dzQ4"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/雷風雨.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年12月</div>
                        </div>
                        <h5 class="heading heading-h5">雷風雨</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=RTz3Zs9z0Jw"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/我不能沒有信心 愛之歌.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年3月</div>
                        </div>
                        <h5 class="heading heading-h5">我不能沒有信心</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/01海山唱片/碧城故事.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年6月</div>
                        </div>
                        <h5 class="heading heading-h5" style="font-weight: 400">
                          碧城故事
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=VvpP_c24x5c"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/半山飄雨半山晴.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年9月</div>
                        </div>
                        <h5 class="heading heading-h5">半山飄雨半山晴</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=JqmQM-YcAo4"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/雪花片片.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年10月</div>
                        </div>
                        <h5 class="heading heading-h5">雪花片片</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="#" tabindex="0"
                          ><img
                            src="img/music/01海山唱片/有真情有活力.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年11月</div>
                        </div>
                        <h5 class="heading heading-h5">有真情有活力</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=erwb-mnf6pg"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/銀浪.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年11月</div>
                        </div>
                        <h5 class="heading heading-h5">銀浪</h5>
                      </div>
                    </div>

                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="#" tabindex="0"
                          ><img src="/img/music/01海山唱片/十七十八.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1974年12月</div>
                        </div>
                        <h5 class="heading heading-h5">十七、十八</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="#" tabindex="0"
                          ><img src="/img/music/01海山唱片/巧合.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1975年3月</div>
                        </div>
                        <h5 class="heading heading-h5">巧合</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=TYNmSkgf6ro"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/情場就是戰場.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1975年3月</div>
                        </div>
                        <h5 class="heading heading-h5">情場就是戰場</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/01海山唱片/當我認識你.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1975年8月</div>
                        </div>
                        <h5 class="heading heading-h5">當我認識你</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/01海山唱片/呼喚、流雲.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1975年12月</div>
                        </div>
                        <h5 class="heading heading-h5">呼喚、流雲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/01海山唱片/意難忘.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年1月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛懷念歌曲-意難忘
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Qe4k-oDuJ84"
                          tabindex="0"
                          ><img src="/img/music/01海山唱片/楓葉情.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年3月</div>
                        </div>
                        <h5 class="heading heading-h5">楓葉情</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/01海山唱片/溫暖在秋天.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年6月</div>
                        </div>
                        <h5 class="heading heading-h5">溫暖在秋天</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Gd1Fk25ziqKdY"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/鳳飛飛懷念歌曲-春風吻上我的臉.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年6月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛懷念歌曲-春風吻上我的臉
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Gd1Fk25ziqKdY"
                          tabindex="0"
                          ><img
                            src="img/music/01海山唱片/夏日假期玫瑰花.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年7月</div>
                        </div>
                        <h5 class="heading heading-h5">夏日假期玫瑰花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/01海山唱片/秋纏.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年9月</div>
                        </div>
                        <h5 class="heading heading-h5">秋纏</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/01海山唱片/楓葉情(單曲).jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年9月</div>
                        </div>
                        <h5 class="heading heading-h5">楓葉情(單曲)</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/01海山唱片/明天廿歲.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年9月</div>
                        </div>
                        <h5 class="heading heading-h5">明天廿歲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=lVBfr2zw8zU"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/星語.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年10月</div>
                        </div>
                        <h5 class="heading heading-h5">星語</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/01海山唱片/落葉飄飄.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年10月</div>
                        </div>
                        <h5 class="heading heading-h5">落葉飄飄</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=dFbooXbpTuk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/懷念金曲.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年11月</div>
                        </div>
                        <h5 class="heading heading-h5">永遠懷念的金曲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=k50Mwe_81vM"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/我是一片雲.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年1月</div>
                        </div>
                        <h5 class="heading heading-h5">我是一片雲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=pwBBExZlbNc"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠1.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年3月</div>
                        </div>
                        <h5 class="heading heading-h5">台灣民謠專集</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IUQ1hn-Zfd8"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/奔向彩虹.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年6月</div>
                        </div>
                        <h5 class="heading heading-h5">奔向彩虹</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=DN-7olwH_Jg"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠2.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年12月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          台灣民謠歌謠專集 第2輯
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IUa6sgSqOvI"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/月朦朧鳥朦朧.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年1月</div>
                        </div>
                        <h5 class="heading heading-h5">月朦朧鳥朦朧</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=m8lXDy_bfuc"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/花有情花有愛.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年4月</div>
                        </div>
                        <h5 class="heading heading-h5">花有情花有愛</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=T-fV6OfNVos"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/晨霧.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年8月</div>
                        </div>
                        <h5 class="heading heading-h5">晨霧</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=6u31YVvqKAU"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/懷念國語二.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年9月</div>
                        </div>
                        <h5 class="heading heading-h5">懷念國語歌曲 二</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=khXyYQCLCvw"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/一顆紅豆.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年11月</div>
                        </div>
                        <h5 class="heading heading-h5">一顆紅豆</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=RLVUQrEu3-Q"
                          tabindex="0"
                          ><img
                            src="img/music/03東尼唱片/玫瑰玫瑰我愛你.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">玫瑰玫瑰我愛你</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=w_PxSU2kuR0"
                          tabindex="0"
                          ><img src="/img/music/03東尼唱片/夜來香.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">夜來香</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=lAbROU79tW4"
                          tabindex="0"
                          ><img src="/img/music/03東尼唱片/蘋果花.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">蘋果花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/03東尼唱片/東尼懷念金曲嘆十聲.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">東尼懷念金曲嘆十聲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="img/music/09寶麗金唱片/鳳飛飛名曲精選.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年2月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛名曲精選</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=BpwmWZWWhT8"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/雁兒在林梢.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年2月</div>
                        </div>
                        <h5 class="heading heading-h5">雁兒在林梢</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=xbvHPlvHTvk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/一片深情.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年6月</div>
                        </div>
                        <h5 class="heading heading-h5">一片深情</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=wQWpQj6C2xo"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/又見秋蓮.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年10月</div>
                        </div>
                        <h5 class="heading heading-h5">又見秋蓮</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fzp6auGKhNU"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠3.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年12月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          台灣民謠歌謠專集 第三集
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=jSsCQI4LWaE"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/金盞花.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1980年3月</div>
                        </div>
                        <h5 class="heading heading-h5">金盞花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=KywpuzcGkUE"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/就是溜溜的她.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1980年11月</div>
                        </div>
                        <h5 class="heading heading-h5">就是溜溜的她</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=EuBh2zeuzPk"
                          tabindex="0"
                          ><img
                            src="img/music/03東尼唱片/鳳飛飛精粹.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1981年5月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛精粹</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Kw-riJKo0OU"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/好好愛我.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1981年10月</div>
                        </div>
                        <h5 class="heading heading-h5">好好愛我</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fsh21phX4Ik"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/鳳情千千萬.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年1月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳情千千萬</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=_I5sVExp0ms"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/我是中國人.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年7月</div>
                        </div>
                        <h5 class="heading heading-h5">我是中國人</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=qWuSfxI-3JU"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠4.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年8月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛台灣民謠歌謠專輯
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=qQJa5I4IEhQ"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/你來了.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年12月</div>
                        </div>
                        <h5 class="heading heading-h5">你來了</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=VxKNB7RTLZA"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/出外的人.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年4月</div>
                        </div>
                        <h5 class="heading heading-h5">出外的人</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fz8t9m9QdiM"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/相思爬上心底.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年8月</div>
                        </div>
                        <h5 class="heading heading-h5">相思爬上心底</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=r3L3THcccJk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/不知怨.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年12月</div>
                        </div>
                        <h5 class="heading heading-h5">不知怨</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=FLLW7v0pPKk"
                          tabindex="0"
                          ><img src="/img/music/04北聯唱片/仲夏.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1984年7月</div>
                        </div>
                        <h5 class="heading heading-h5">仲夏</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=WVyOkULA7MA"
                          tabindex="0"
                          ><img src="/img/music/04北聯唱片/彤彩.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1985年4月</div>
                        </div>
                        <h5 class="heading heading-h5">彤彩</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=q9ZLKGM5vGw"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/自我挑戰.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1985年12月</div>
                        </div>
                        <h5 class="heading heading-h5">自我挑戰</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=-G_4X3SvKtE"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/掌聲響起.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1986年9月</div>
                        </div>
                        <h5 class="heading heading-h5">掌聲響起</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=v077zIuITWo"
                          tabindex="0"
                          ><img
                            src="img/music/05藍與白唱片/什麼樣的你.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1987年6月</div>
                        </div>
                        <h5 class="heading heading-h5">什麼樣的你</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=hvLmpVwy-OE"
                          tabindex="0"
                          ><img
                            src="/img/music/05藍與白唱片/廿年珍藏版-上卷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1988年2月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛1968~1988珍藏版(上卷)
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=UbEdNqJitkY"
                          tabindex="0"
                          ><img
                            src="/img/music/05藍與白唱片/廿年珍藏版-下卷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1988年2月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛1968~1988珍藏版(下卷)
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=NK0fHIE9IAQ"
                          tabindex="0"
                          ><img
                            src="/img/music/06真善美唱片/浮世情懷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1991年2月</div>
                        </div>
                        <h5 class="heading heading-h5">浮世情懷</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=dZZr8OnH0ws"
                          tabindex="0"
                          ><img src="/img/music/06真善美唱片/秋鸞.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1991年11月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          今天的女人和那昨天的女孩
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=cWVUlzRf64w"
                          tabindex="0"
                          ><img
                            src="/img/music/07EMI唱片/想要彈同調1.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1992年8月</div>
                        </div>
                        <h5 class="heading heading-h5">想要彈同調</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Dw-uVh2bgGs"
                          tabindex="0"
                          ><img src="/img/music/07EMI唱片/驛站.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1994年8月</div>
                        </div>
                        <h5 class="heading heading-h5">陪傷心人說往事</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=ZGXsSy5LBDM"
                          tabindex="0"
                          ><img
                            src="/img/music/07EMI唱片/想要彈同調2-思念的歌.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1995年6月</div>
                        </div>
                        <h5 class="heading heading-h5">思念的歌</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="/img/music/08環球唱片/35週年演唱會.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">2004年1月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛35週年演唱會</h5>
                      </div>
                    </div>

                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="#" tabindex="0"
                          ><img src="/img/music/08環球唱片/鳳聲歲月.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">2015年2月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳聲歲月</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">歌林唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img src="/img/music/02歌林唱片/初見一日.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1971年9月</div>
                        </div>
                        <h5 class="heading heading-h5">歌林金曲唱片</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=U7rS5Vm2o64"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/花謝花飛飛滿天.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1973年9月</div>
                        </div>
                        <h5 class="heading heading-h5">花謝花飛飛滿天</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=lVBfr2zw8zU"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/星語.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年10月</div>
                        </div>
                        <h5 class="heading heading-h5">星語</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=dFbooXbpTuk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/懷念金曲.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1976年11月</div>
                        </div>
                        <h5 class="heading heading-h5">永遠懷念的金曲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=k50Mwe_81vM"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/我是一片雲.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年1月</div>
                        </div>
                        <h5 class="heading heading-h5">我是一片雲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=pwBBExZlbNc"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠1.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年3月</div>
                        </div>
                        <h5 class="heading heading-h5">台灣民謠專集</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IUQ1hn-Zfd8"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/奔向彩虹.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年6月</div>
                        </div>
                        <h5 class="heading heading-h5">奔向彩虹</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=DN-7olwH_Jg"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠2.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1977年12月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          台灣民謠歌謠專集 第2輯
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IUa6sgSqOvI"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/月朦朧鳥朦朧.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年1月</div>
                        </div>
                        <h5 class="heading heading-h5">月朦朧鳥朦朧</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=m8lXDy_bfuc"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/花有情花有愛.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年4月</div>
                        </div>
                        <h5 class="heading heading-h5">花有情花有愛</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=T-fV6OfNVos"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/晨霧.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年8月</div>
                        </div>
                        <h5 class="heading heading-h5">晨霧</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=6u31YVvqKAU"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/懷念國語二.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年9月</div>
                        </div>
                        <h5 class="heading heading-h5">懷念國語歌曲 二</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=khXyYQCLCvw"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/一顆紅豆.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年11月</div>
                        </div>
                        <h5 class="heading heading-h5">一顆紅豆</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=BpwmWZWWhT8"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/雁兒在林梢.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年2月</div>
                        </div>
                        <h5 class="heading heading-h5">雁兒在林梢</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=xbvHPlvHTvk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/一片深情.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年6月</div>
                        </div>
                        <h5 class="heading heading-h5">一片深情</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=wQWpQj6C2xo"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/又見秋蓮.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年10月</div>
                        </div>
                        <h5 class="heading heading-h5">又見秋蓮</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fzp6auGKhNU"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠3.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年12月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          台灣民謠歌謠專集 第三集
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=jSsCQI4LWaE"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/金盞花.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1980年3月</div>
                        </div>
                        <h5 class="heading heading-h5">金盞花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=KywpuzcGkUE"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/就是溜溜的她.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1980年11月</div>
                        </div>
                        <h5 class="heading heading-h5">就是溜溜的她</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Kw-riJKo0OU"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/好好愛我.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1981年10月</div>
                        </div>
                        <h5 class="heading heading-h5">好好愛我</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fsh21phX4Ik"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/鳳情千千萬.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年1月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳情千千萬</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=_I5sVExp0ms"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/我是中國人.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年7月</div>
                        </div>
                        <h5 class="heading heading-h5">我是中國人</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=qWuSfxI-3JU"
                          tabindex="0"
                          ><img
                            src="/img/music/02歌林唱片/台灣民謠4.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年8月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛台灣民謠歌謠專輯
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=qQJa5I4IEhQ"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/你來了.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1982年12月</div>
                        </div>
                        <h5 class="heading heading-h5">你來了</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=VxKNB7RTLZA"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/出外的人.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年4月</div>
                        </div>
                        <h5 class="heading heading-h5">出外的人</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=fz8t9m9QdiM"
                          tabindex="0"
                          ><img
                            src="img/music/02歌林唱片/相思爬上心底.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年8月</div>
                        </div>
                        <h5 class="heading heading-h5">相思爬上心底</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=r3L3THcccJk"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/不知怨.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1983年12月</div>
                        </div>
                        <h5 class="heading heading-h5">不知怨</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=q9ZLKGM5vGw"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/自我挑戰.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1985年12月</div>
                        </div>
                        <h5 class="heading heading-h5">自我挑戰</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=-G_4X3SvKtE"
                          tabindex="0"
                          ><img src="/img/music/02歌林唱片/掌聲響起.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1986年9月</div>
                        </div>
                        <h5 class="heading heading-h5">掌聲響起</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">東尼唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=RLVUQrEu3-Q"
                          tabindex="0"
                          ><img
                            src="img/music/03東尼唱片/玫瑰玫瑰我愛你.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">玫瑰玫瑰我愛你</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=w_PxSU2kuR0"
                          tabindex="0"
                          ><img src="/img/music/03東尼唱片/夜來香.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">夜來香</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=lAbROU79tW4"
                          tabindex="0"
                          ><img src="/img/music/03東尼唱片/蘋果花.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">蘋果花</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="/img/music/03東尼唱片/東尼懷念金曲嘆十聲.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">東尼懷念金曲嘆十聲</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IrUf3hbd2CM"
                          tabindex="0"
                          ><img
                            src="/img/music/03東尼唱片/鳳飛飛招牌歌曲專輯.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1978年12月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛招牌歌曲專輯</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=IrUf3hbd2CM"
                          tabindex="0"
                          ><img
                            src="/img/music/03東尼唱片/愛你在心口難開.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1981年2月</div>
                        </div>
                        <h5 class="heading heading-h5">愛你在心口難開</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=EuBh2zeuzPk"
                          tabindex="0"
                          ><img
                            src="/img/music/03東尼唱片/鳳飛飛精粹.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1981年5月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛精粹</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">北聯唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=FLLW7v0pPKk"
                          tabindex="0"
                          ><img src="/img/music/04北聯唱片/仲夏.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1984年7月</div>
                        </div>
                        <h5 class="heading heading-h5">仲夏</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=WVyOkULA7MA"
                          tabindex="0"
                          ><img src="/img/music/04北聯唱片/彤彩.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1985年4月</div>
                        </div>
                        <h5 class="heading heading-h5">彤彩</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">藍與白唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=v077zIuITWo"
                          tabindex="0"
                          ><img
                            src="/img/music/05藍與白唱片/什麼樣的你.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1987年6月</div>
                        </div>
                        <h5 class="heading heading-h5">什麼樣的你</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=hvLmpVwy-OE"
                          tabindex="0"
                          ><img
                            src="/img/music/05藍與白唱片/廿年珍藏版-上卷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1988年2月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛1968~1988珍藏版(上卷)
                        </h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=UbEdNqJitkY"
                          tabindex="0"
                          ><img
                            src="/img/music/05藍與白唱片/廿年珍藏版-下卷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1988年2月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          鳳飛飛1968~1988珍藏版(下卷)
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">真善美唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=NK0fHIE9IAQ"
                          tabindex="0"
                          ><img
                            src="/img/music/06真善美唱片/浮世情懷.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1991年2月</div>
                        </div>
                        <h5 class="heading heading-h5">浮世情懷</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=dZZr8OnH0ws"
                          tabindex="0"
                          ><img src="/img/music/06真善美唱片/秋鸞.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1991年11月</div>
                        </div>
                        <h5 class="heading heading-h5">
                          今天的女人和那昨天的女孩
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">EMI唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=cWVUlzRf64w"
                          tabindex="0"
                          ><img
                            src="/img/music/07EMI唱片/想要彈同調1.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1992年8月</div>
                        </div>
                        <h5 class="heading heading-h5">想要彈同調</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=Dw-uVh2bgGs"
                          tabindex="0"
                          ><img src="/img/music/07EMI唱片/驛站.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1994年8月</div>
                        </div>
                        <h5 class="heading heading-h5">陪傷心人說往事</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=ZGXsSy5LBDM"
                          tabindex="0"
                          ><img
                            src="/img/music/07EMI唱片/想要彈同調2-思念的歌.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1995年6月</div>
                        </div>
                        <h5 class="heading heading-h5">思念的月</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->
          <!-- Start Carousel Slider -->
          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">環球唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="" tabindex="0"
                          ><img
                            src="/img/music/08環球唱片/35週年演唱會.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">2004年1月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛35週年演唱會</h5>
                      </div>
                    </div>
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a href="#" tabindex="0"
                          ><img src="/img/music/08環球唱片/鳳聲歲月.jpg" alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">2015年2月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳聲歲月</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Carousel Slider -->

          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">寶麗金唱片</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <img
                          src="/img/music/09寶麗金唱片/鳳飛飛名曲精選.jpg"
                          alt=""
                        />
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">1979年2月</div>
                        </div>
                        <h5 class="heading heading-h5">鳳飛飛名曲精選</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="
              bk-carousel-slider
              bg_color--1
              ptb--150
              slick-arrow-hover
              ptb-md--80
              ptb-sm--60
            "
          >
            <div class="container">
              <h3 class="text-center">金牌大風</h3>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="brook-element-carousel slick-arrow-center"
                    data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }'
                    data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'
                  >
                    <div class="carousle-slider text-center">
                      <div class="thumb">
                        <a
                          href="https://www.youtube.com/watch?v=jna53qxXRw4"
                          tabindex="0"
                          ><img
                            src="/img/music/08環球唱片/想要跟你飛-新歌+精選.jpg"
                            alt=""
                        /></a>
                      </div>
                      <div class="post-inner">
                        <div class="post-meta mt_sm--15 mb_sm--15">
                          <div class="post-date">發行時間</div>
                          <div class="post-category">2009年12月</div>
                        </div>
                        <h5 class="heading heading-h5">《想要跟你飛》</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div id="Musics"
                    class="bk-carousel-slider bg_color--1 ptb--150 slick-arrow-hover ptb-md--80 ptb-sm--60">
                    <div class="container">
                        <h3 class="text-center">環球唱片</h3>
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="brook-element-carousel slick-arrow-center" data-slick-options='{
                    "spaceBetween": 15,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "infinite": true,
                    "dots": false,
                    "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fas fa-angle-left" },
                    "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fas fa-angle-right" }
                }' data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 2}},
                {"breakpoint":690, "settings": {"slidesToShow": 2}},
                {"breakpoint":590, "settings": {"slidesToShow": 1}}
                ]'>

                                    <div class="carousle-slider text-center" v-for="item in musicContent">
                                        <div class="thumb"><a :href="item.link"><img :src="item.images" alt=""></a>
                                        </div>
                                        <div class="post-inner">
                                            <div class="post-meta mt_sm--15 mb_sm--15">
                                                <div class="post-date">發行時間</div>
                                                <div class="post-category">{{ item.date }}</div>
                                            </div>
                                            <h5 class="heading heading-h5">{{ item.title }}</h5>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
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
            <button :class="['music-1' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-1')">
              <span class="filter-text">海山唱片</span>
              <span class="filter-counter">28</span>
            </button>
            <button :class="['music-2' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-2')">
              <span class="filter-text">歌林唱片</span>
              <span class="filter-counter">28</span>
            </button>
            <button :class="['music-3' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-3')">
              <span class="filter-text">東尼唱片</span>
              <span class="filter-counter">7</span>
            </button>
            <button :class="['music-4' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-4')">
              <span class="filter-text">北聯唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['music-5' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-5')">
              <span class="filter-text">藍與白唱片</span>
              <span class="filter-counter">3</span>
            </button>
            <button :class="['music-6' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-6')">
              <span class="filter-text">真善美唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['music-7' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-7')">
              <span class="filter-text">EMI唱片</span>
              <span class="filter-counter">3</span>
            </button>
            <button :class="['music-8' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-8')">
              <span class="filter-text">環球唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['music-9' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-9')">
              <span class="filter-text">寶麗金唱片</span>
              <span class="filter-counter">2</span>
            </button>
            <button :class="['music-10' == currentBtn ? 'btn-color' : '']" @click="filterItems('music-10')">
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
                    <a :href="item.link">
                      <img :src="item.images" alt="音樂作品" />
                    </a>
                  </div>
                  <div class="post-content text-center">
                    <div class="post-inner">
                      <div class="post-m3eta">
                        <div class="post-date">發行時間</div>
                        <div class="post-category">{{ item.date }}</div>
                      </div>
                      <h5 class="heading heading-h5">
                        <span v-if="item.toptitle"
                          >{{ item.toptitle }}<br /></span
                        ><span v-else></span>{{ item.title }}
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
      musicContent: [
        {
          title: "歌林金曲唱片",
          date: "1971年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/初見一日.jpg",
          link: "",
        },
        {
          title: "祝你幸福",
          date: "1972年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/祝你幸福.jpg",
          link: "https://www.youtube.com/watch?v=AIcWy2GMhtA",
        },
        {
          title: "五月的花",
          date: "1972年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/五月的花.jpg",
          link: "https://www.youtube.com/watch?v=kPHUeTyoX2c",
        },
        {
          title: "我沒有錯",
          date: "1972年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/我沒有錯.jpg",
          link: "https://www.youtube.com/watch?v=9HH4p07W7Pg",
        },
        {
          title: "愛的禮物",
          date: "1973年3月",
          category: "music-1",

          images: "/img/music/01海山唱片/愛的禮物.jpg",
          link: "https://www.youtube.com/watch?v=1k-5IvQdY6M",
        },
        {
          title: "串串風鈴響",
          date: "1973年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/串串風鈴響.jpg",
          link: "https://www.youtube.com/watch?v=jyz96Z5pOaU",
        },
        {
          title: "你是否忘記了",
          date: "1973年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/你是否忘記了.jpg",
          link: "https://www.youtube.com/watch?v=QwS7qq1rh1g",
        },
        {
          title: "花謝花飛飛滿天",
          date: "1973年9月",
          category: "music-1",
          images: "/img/music/02歌林唱片/花謝花飛飛滿天.jpg",
          link: "https://www.youtube.com/watch?v=U7rS5Vm2o64",
        },
        {
          title: "雷風雨",
          date: "1973年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/雷風雨.jpg",
          link: "https://www.youtube.com/watch?v=XVLQ6p-dzQ4",
        },
        {
          title: "我不能沒有信心",
          date: "1974年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/我不能沒有信心 愛之歌.jpg",
          link: "https://www.youtube.com/watch?v=RTz3Zs9z0Jw",
        },
        {
          title: "碧城故事",
          date: "1974年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/碧城故事.jpg",
          link: "",
        },
        {
          title: "半山飄雨半山晴",
          date: "1974年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/半山飄雨半山晴.jpg",
          link: "https://www.youtube.com/watch?v=VvpP_c24x5c",
        },
        {
          title: "雪花片片",
          date: "1974年10月",
          category: "music-1",
          images: "/img/music/01海山唱片/雪花片片.jpg",
          link: "https://www.youtube.com/watch?v=JqmQM-YcAo4",
        },
        {
          title: "有真情有活力",
          date: "1974年11月",
          category: "music-1",
          images: "/img/music/01海山唱片/有真情有活力.jpg",
          link: "#",
        },
        {
          title: "銀浪",
          date: "1974年11月",
          category: "music-1",
          images: "/img/music/01海山唱片/銀浪.jpg",
          link: "https://www.youtube.com/watch?v=erwb-mnf6pg",
        },
        {
          title: "十七、十八",
          date: "1974年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/十七十八.jpg",
          link: "https://www.youtube.com/watch?v=erwb-mnf6pg",
        },

        {
          title: "巧合",
          date: "1975年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/巧合.jpg",
          link: "#",
        },
        {
          title: "情場就是戰場",
          date: "1975年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/情場就是戰場.jpg",
          link: "https://www.youtube.com/watch?v=TYNmSkgf6ro",
        },
        {
          title: "當我認識你",
          date: "1975年8月",
          category: "music-1",
          images: "/img/music/01海山唱片/當我認識你.jpg",
          link: "",
        },
        {
          title: "呼喚、流雲",
          date: "1975年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/呼喚、流雲.jpg",
          link: "",
        },
        {
          title: "鳳飛飛懷念歌曲-意難忘",
          date: "1976年1月",
          category: "music-1",
          images: "/img/music/01海山唱片/意難忘.jpg",
          link: "",
        },
        {
          title: "楓葉情",
          date: "1976年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/楓葉情.jpg",
          link: "https://www.youtube.com/watch?v=Qe4k-oDuJ84",
        },
        {
          title: "溫暖在秋天",
          date: "1976年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/溫暖在秋天.jpg",
          link: "",
        },
        {
          title: "鳳飛飛懷念歌曲-春風吻上我的臉",
          date: "1976年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/鳳飛飛懷念歌曲-春風吻上我的臉.jpg",
          link: "https://www.youtube.com/watch?v=Gd1Fk25ziqKdY",
        },
        {
          title: "夏日假期玫瑰花",
          date: "1976年7月",
          category: "music-1",
          images: "/img/music/01海山唱片/夏日假期玫瑰花.jpg",
          link: "https://www.youtube.com/watch?v=Gd1Fk25ziqKdY",
        },
        {
          title: "秋纏",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/秋纏.jpg",
          link: "",
        },
        {
          title: "楓葉情(單曲)",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/楓葉情(單曲).jpg",
          link: "",
        },
        {
          title: "明天廿歲",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/明天廿歲.jpg",
          link: "",
        },
        {
          title: "星語",
          date: "1976年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/星語.jpg",
          link: "https://www.youtube.com/watch?v=lVBfr2zw8zU",
        },
        {
          title: "落葉飄飄",
          date: "1976年10月",
          category: "music-1",
          images: "/img/music/01海山唱片/落葉飄飄.jpg",
          link: "",
        },
        {
          title: "永遠懷念的金曲",
          date: "1976年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/懷念金曲.jpg",
          link: "https://www.youtube.com/watch?v=dFbooXbpTuk",
        },
        {
          title: "我是一片雲",
          date: "1977年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/我是一片雲.jpg",
          link: "https://www.youtube.com/watch?v=k50Mwe_81vM",
        },
        {
          title: "台灣民謠專集",
          date: "1977年3月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠1.jpg",
          link: "https://www.youtube.com/watch?v=pwBBExZlbNc",
        },
        {
          title: "奔向彩虹",
          date: "1977年6月",
          category: "music-2",
          images: "/img/music/02歌林唱片/奔向彩虹.jpg",
          link: "https://www.youtube.com/watch?v=IUQ1hn-Zfd8",
        },
        {
          title: "台灣民謠歌謠專集 第2輯",
          date: "1977年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠2.jpg",
          link: "https://www.youtube.com/watch?v=DN-7olwH_Jg",
        },
        {
          title: "月朦朧鳥朦朧",
          date: "1978年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/月朦朧鳥朦朧.jpg",
          link: "https://www.youtube.com/watch?v=IUa6sgSqOvI",
        },
        {
          title: "花有情花有愛",
          date: "1978年4月",
          category: "music-2",
          images: "/img/music/02歌林唱片/花有情花有愛.jpg",
          link: "https://www.youtube.com/watch?v=m8lXDy_bfuc",
        },
        {
          title: "晨霧",
          date: "1978年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/晨霧.jpg",
          link: "https://www.youtube.com/watch?v=T-fV6OfNVos",
        },
        {
          title: "懷念國語歌曲 二",
          date: "1978年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/懷念國語二.jpg",
          link: "https://www.youtube.com/watch?v=6u31YVvqKAU",
        },
        {
          title: "一顆紅豆",
          date: "1978年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/一顆紅豆.jpg",
          link: "https://www.youtube.com/watch?v=khXyYQCLCvw",
        },
        {
          title: "玫瑰玫瑰我愛你",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/玫瑰玫瑰我愛你.jpg",
          link: "https://www.youtube.com/watch?v=RLVUQrEu3-Q",
        },
        {
          title: "夜來香",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/夜來香.jpg",
          link: "https://www.youtube.com/watch?v=w_PxSU2kuR0",
        },
        {
          title: "蘋果花",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/蘋果花.jpg",
          link: "https://www.youtube.com/watch?v=lAbROU79tW4",
        },
        {
          title: "嘆十聲",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/東尼懷念金曲嘆十聲.jpg",
          link: "",
        },
        {
          title: "歌曲專輯",
          toptitle: "鳳飛飛招牌",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/鳳飛飛招牌歌曲專輯.jpg",
          link: "https://www.youtube.com/watch?v=IrUf3hbd2CM",
        },
        {
          title: "鳳飛飛名曲精選",
          date: "1979年2月",
          category: "music-9",
          images: "/img/music/09寶麗金唱片/鳳飛飛名曲精選.jpg",
          link: "",
        },
        {
          title: "雁兒在林梢",
          date: "1979年2月",
          category: "music-2",
          images: "/img/music/02歌林唱片/雁兒在林梢.jpg",
          link: "https://www.youtube.com/watch?v=BpwmWZWWhT8",
        },
        {
          title: "一片深情",
          date: "1979年6月",
          category: "music-2",
          images: "/img/music/02歌林唱片/一片深情.jpg",
          link: "https://www.youtube.com/watch?v=xbvHPlvHTvk",
        },

        {
          title: "又見秋蓮",
          date: "1979年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/又見秋蓮.jpg",
          link: "https://www.youtube.com/watch?v=wQWpQj6C2xo",
        },
        {
          title: "台灣民謠歌謠專集 第三集",
          date: "1979年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠3.jpg",
          link: "https://www.youtube.com/watch?v=fzp6auGKhNU",
        },
        {
          title: "金盞花",
          date: "1980年3月",
          category: "music-2",
          images: "/img/music/02歌林唱片/金盞花.jpg",
          link: "https://www.youtube.com/watch?v=jSsCQI4LWaE",
        },
        {
          title: "就是溜溜的她",
          date: "1980年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/就是溜溜的她.jpg",
          link: "https://www.youtube.com/watch?v=KywpuzcGkUE",
        },
        {
          title: "愛你在心口難開",
          date: "1981年2月",
          category: "music-3",
          images: "/img/music/03東尼唱片/愛你在心口難開.jpg",
          link: "https://www.youtube.com/watch?v=IrUf3hbd2CM",
        },
        {
          title: "鳳飛飛精粹",
          date: "1981年5月",
          category: "music-3",
          images: "/img/music/03東尼唱片/鳳飛飛精粹.jpg",
          link: "https://www.youtube.com/watch?v=EuBh2zeuzPk",
        },
        {
          title: "好好愛我",
          date: "1981年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/好好愛我.jpg",
          link: "https://www.youtube.com/watch?v=Kw-riJKo0OU",
        },
        {
          title: "鳳飛飛成名曲專輯 Vol.2",
          date: "1981年10月",
          category: "music-9",
          images: "/img/music/09寶麗金唱片/鳳飛飛成名曲專輯Vol.2.jpg",
          link: "",
        },
        {
          title: "鳳情千千萬",
          date: "1982年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/鳳情千千萬.jpg",
          link: "https://www.youtube.com/watch?v=fsh21phX4Ik",
        },
        {
          title: "我是中國人",
          date: "1982年7月",
          category: "music-2",
          images: "/img/music/02歌林唱片/我是中國人.jpg",
          link: "https://www.youtube.com/watch?v=_I5sVExp0ms",
        },
        {
          title: "鳳飛飛台灣民謠歌謠專輯",
          date: "1982年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠4.jpg",
          link: "https://www.youtube.com/watch?v=qWuSfxI-3JU",
        },
        {
          title: "你來了",
          date: "1982年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/你來了.jpg",
          link: "https://www.youtube.com/watch?v=qQJa5I4IEhQ",
        },
        {
          title: "出外的人",
          date: "1983年4月",
          category: "music-2",
          images: "/img/music/02歌林唱片/出外的人.jpg",
          link: "https://www.youtube.com/watch?v=VxKNB7RTLZA",
        },
        {
          title: "相思爬上心底",
          date: "1983年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/相思爬上心底.jpg",
          link: "https://www.youtube.com/watch?v=fz8t9m9QdiM",
        },
        {
          title: "不知怨",
          date: "1983年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/不知怨.jpg",
          link: "https://www.youtube.com/watch?v=r3L3THcccJk",
        },

        {
          title: "仲夏",
          date: "1984年7月",
          category: "music-4",
          images: "/img/music/04北聯唱片/仲夏.jpg",
          link: "https://www.youtube.com/watch?v=FLLW7v0pPKk",
        },
        {
          title: "彤彩",
          date: "1985年4月",
          category: "music-4",
          images: "/img/music/04北聯唱片/彤彩.jpg",
          link: "https://www.youtube.com/watch?v=WVyOkULA7MA",
        },
        {
          title: "自我挑戰",
          date: "1985年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/自我挑戰.jpg",
          link: "https://www.youtube.com/watch?v=q9ZLKGM5vGw",
        },

        {
          title: "掌聲響起",
          date: "1986年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/掌聲響起.jpg",
          link: "https://www.youtube.com/watch?v=-G_4X3SvKtE",
        },

        {
          title: "什麼樣的你",
          date: "1987年6月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/什麼樣的你.jpg",
          link: "https://www.youtube.com/watch?v=v077zIuITWo",
        },
        {
          title: "鳳飛飛1968~1988珍藏版(上卷)",
          date: "1988年2月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/廿年珍藏版-上卷.jpg",
          link: "https://www.youtube.com/watch?v=hvLmpVwy-OE",
        },
        {
          title: "鳳飛飛1968~1988珍藏版(下卷)",
          date: "1988年2月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/廿年珍藏版-下卷.jpg",
          link: "https://www.youtube.com/watch?v=UbEdNqJitkY",
        },
        {
          title: "浮世情懷",
          date: "1991年2月",
          category: "music-6",
          images: "/img/music/06真善美唱片/浮世情懷.jpg",
          link: "https://www.youtube.com/watch?v=NK0fHIE9IAQ",
        },
        {
          title: "今天的女人和那昨天的女孩",
          date: "1991年11月",
          category: "music-6",
          images: "/img/music/06真善美唱片/秋鸞.jpg",
          link: "https://www.youtube.com/watch?v=dZZr8OnH0ws",
        },

        {
          title: "想要彈同調",
          date: "1992年8月",
          category: "music-7",
          images: "/img/music/07EMI唱片/想要彈同調1.jpg",
          link: "https://www.youtube.com/watch?v=cWVUlzRf64w",
        },
        {
          title: "陪傷心人說往事",
          date: "1994年8月",
          category: "music-7",
          images: "/img/music/07EMI唱片/驛站.jpg",
          link: "https://www.youtube.com/watch?v=Dw-uVh2bgGs",
        },
        {
          title: "思念的歌",
          date: "1995年6月",
          category: "music-7",
          images: "/img/music/07EMI唱片/想要彈同調2-思念的歌.jpg",
          link: "https://www.youtube.com/watch?v=ZGXsSy5LBDM",
        },
        {
          title: "鳳飛飛35週年演唱會",
          date: "2004年1月",
          category: "music-8",
          images: "/img/music/08環球唱片/35週年演唱會.jpg",
          link: "",
        },
        {
          title: "《想要跟你飛》",
          date: "2009年12月",
          category: "music-10",
          images: "/img/music/08環球唱片/想要跟你飛-新歌+精選.jpg",
          link: "https://www.youtube.com/watch?v=jna53qxXRw4",
        },
        {
          title: "鳳聲歲月",
          date: "2015年2月",
          category: "music-8",
          images: "/img/music/08環球唱片/鳳聲歲月.jpg",
          link: "#",
        },
      ],

      filterTable: [
        {
          title: "歌林金曲唱片",
          date: "1971年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/初見一日.jpg",
          link: "",
        },
        {
          title: "祝你幸福",
          date: "1972年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/祝你幸福.jpg",
          link: "https://www.youtube.com/watch?v=AIcWy2GMhtA",
        },
        {
          title: "五月的花",
          date: "1972年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/五月的花.jpg",
          link: "https://www.youtube.com/watch?v=kPHUeTyoX2c",
        },
        {
          title: "我沒有錯",
          date: "1972年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/我沒有錯.jpg",
          link: "https://www.youtube.com/watch?v=9HH4p07W7Pg",
        },
        {
          title: "愛的禮物",
          date: "1973年3月",
          category: "music-1",

          images: "/img/music/01海山唱片/愛的禮物.jpg",
          link: "https://www.youtube.com/watch?v=1k-5IvQdY6M",
        },
        {
          title: "串串風鈴響",
          date: "1973年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/串串風鈴響.jpg",
          link: "https://www.youtube.com/watch?v=jyz96Z5pOaU",
        },
        {
          title: "你是否忘記了",
          date: "1973年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/你是否忘記了.jpg",
          link: "https://www.youtube.com/watch?v=QwS7qq1rh1g",
        },
        {
          title: "花謝花飛飛滿天",
          date: "1973年9月",
          category: "music-1",
          images: "/img/music/02歌林唱片/花謝花飛飛滿天.jpg",
          link: "https://www.youtube.com/watch?v=U7rS5Vm2o64",
        },
        {
          title: "雷風雨",
          date: "1973年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/雷風雨.jpg",
          link: "https://www.youtube.com/watch?v=XVLQ6p-dzQ4",
        },
        {
          title: "我不能沒有信心",
          date: "1974年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/我不能沒有信心 愛之歌.jpg",
          link: "https://www.youtube.com/watch?v=RTz3Zs9z0Jw",
        },
        {
          title: "碧城故事",
          date: "1974年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/碧城故事.jpg",
          link: "",
        },
        {
          title: "半山飄雨半山晴",
          date: "1974年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/半山飄雨半山晴.jpg",
          link: "https://www.youtube.com/watch?v=VvpP_c24x5c",
        },
        {
          title: "雪花片片",
          date: "1974年10月",
          category: "music-1",
          images: "/img/music/01海山唱片/雪花片片.jpg",
          link: "https://www.youtube.com/watch?v=JqmQM-YcAo4",
        },
        {
          title: "有真情有活力",
          date: "1974年11月",
          category: "music-1",
          images: "/img/music/01海山唱片/有真情有活力.jpg",
          link: "#",
        },
        {
          title: "銀浪",
          date: "1974年11月",
          category: "music-1",
          images: "/img/music/01海山唱片/銀浪.jpg",
          link: "https://www.youtube.com/watch?v=erwb-mnf6pg",
        },
        {
          title: "十七、十八",
          date: "1974年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/十七十八.jpg",
          link: "https://www.youtube.com/watch?v=erwb-mnf6pg",
        },

        {
          title: "巧合",
          date: "1975年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/巧合.jpg",
          link: "#",
        },
        {
          title: "情場就是戰場",
          date: "1975年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/情場就是戰場.jpg",
          link: "https://www.youtube.com/watch?v=TYNmSkgf6ro",
        },
        {
          title: "當我認識你",
          date: "1975年8月",
          category: "music-1",
          images: "/img/music/01海山唱片/當我認識你.jpg",
          link: "",
        },
        {
          title: "呼喚、流雲",
          date: "1975年12月",
          category: "music-1",
          images: "/img/music/01海山唱片/呼喚、流雲.jpg",
          link: "",
        },
        {
          title: "鳳飛飛懷念歌曲-意難忘",
          date: "1976年1月",
          category: "music-1",
          images: "/img/music/01海山唱片/意難忘.jpg",
          link: "",
        },
        {
          title: "楓葉情",
          date: "1976年3月",
          category: "music-1",
          images: "/img/music/01海山唱片/楓葉情.jpg",
          link: "https://www.youtube.com/watch?v=Qe4k-oDuJ84",
        },
        {
          title: "溫暖在秋天",
          date: "1976年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/溫暖在秋天.jpg",
          link: "",
        },
        {
          title: "鳳飛飛懷念歌曲-春風吻上我的臉",
          date: "1976年6月",
          category: "music-1",
          images: "/img/music/01海山唱片/鳳飛飛懷念歌曲-春風吻上我的臉.jpg",
          link: "https://www.youtube.com/watch?v=Gd1Fk25ziqKdY",
        },
        {
          title: "夏日假期玫瑰花",
          date: "1976年7月",
          category: "music-1",
          images: "/img/music/01海山唱片/夏日假期玫瑰花.jpg",
          link: "https://www.youtube.com/watch?v=Gd1Fk25ziqKdY",
        },
        {
          title: "秋纏",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/秋纏.jpg",
          link: "",
        },
        {
          title: "楓葉情(單曲)",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/楓葉情(單曲).jpg",
          link: "",
        },
        {
          title: "明天廿歲",
          date: "1976年9月",
          category: "music-1",
          images: "/img/music/01海山唱片/明天廿歲.jpg",
          link: "",
        },
        {
          title: "星語",
          date: "1976年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/星語.jpg",
          link: "https://www.youtube.com/watch?v=lVBfr2zw8zU",
        },
        {
          title: "落葉飄飄",
          date: "1976年10月",
          category: "music-1",
          images: "/img/music/01海山唱片/落葉飄飄.jpg",
          link: "",
        },
        {
          title: "永遠懷念的金曲",
          date: "1976年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/懷念金曲.jpg",
          link: "https://www.youtube.com/watch?v=dFbooXbpTuk",
        },
        {
          title: "我是一片雲",
          date: "1977年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/我是一片雲.jpg",
          link: "https://www.youtube.com/watch?v=k50Mwe_81vM",
        },
        {
          title: "台灣民謠專集",
          date: "1977年3月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠1.jpg",
          link: "https://www.youtube.com/watch?v=pwBBExZlbNc",
        },
        {
          title: "奔向彩虹",
          date: "1977年6月",
          category: "music-2",
          images: "/img/music/02歌林唱片/奔向彩虹.jpg",
          link: "https://www.youtube.com/watch?v=IUQ1hn-Zfd8",
        },
        {
          title: "台灣民謠歌謠專集 第2輯",
          date: "1977年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠2.jpg",
          link: "https://www.youtube.com/watch?v=DN-7olwH_Jg",
        },
        {
          title: "月朦朧鳥朦朧",
          date: "1978年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/月朦朧鳥朦朧.jpg",
          link: "https://www.youtube.com/watch?v=IUa6sgSqOvI",
        },
        {
          title: "花有情花有愛",
          date: "1978年4月",
          category: "music-2",
          images: "/img/music/02歌林唱片/花有情花有愛.jpg",
          link: "https://www.youtube.com/watch?v=m8lXDy_bfuc",
        },
        {
          title: "晨霧",
          date: "1978年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/晨霧.jpg",
          link: "https://www.youtube.com/watch?v=T-fV6OfNVos",
        },
        {
          title: "懷念國語歌曲 二",
          date: "1978年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/懷念國語二.jpg",
          link: "https://www.youtube.com/watch?v=6u31YVvqKAU",
        },
        {
          title: "一顆紅豆",
          date: "1978年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/一顆紅豆.jpg",
          link: "https://www.youtube.com/watch?v=khXyYQCLCvw",
        },
        {
          title: "玫瑰玫瑰我愛你",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/玫瑰玫瑰我愛你.jpg",
          link: "https://www.youtube.com/watch?v=RLVUQrEu3-Q",
        },
        {
          title: "夜來香",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/夜來香.jpg",
          link: "https://www.youtube.com/watch?v=w_PxSU2kuR0",
        },
        {
          title: "蘋果花",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/蘋果花.jpg",
          link: "https://www.youtube.com/watch?v=lAbROU79tW4",
        },
        {
          title: "嘆十聲",
          toptitle: "東尼懷念歌曲",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/東尼懷念金曲嘆十聲.jpg",
          link: "",
        },
        {
          title: "歌曲專輯",
          toptitle: "鳳飛飛招牌",
          date: "1978年12月",
          category: "music-3",
          images: "/img/music/03東尼唱片/鳳飛飛招牌歌曲專輯.jpg",
          link: "https://www.youtube.com/watch?v=IrUf3hbd2CM",
        },
        {
          title: "鳳飛飛名曲精選",
          date: "1979年2月",
          category: "music-9",
          images: "/img/music/09寶麗金唱片/鳳飛飛名曲精選.jpg",
          link: "",
        },
        {
          title: "雁兒在林梢",
          date: "1979年2月",
          category: "music-2",
          images: "/img/music/02歌林唱片/雁兒在林梢.jpg",
          link: "https://www.youtube.com/watch?v=BpwmWZWWhT8",
        },
        {
          title: "一片深情",
          date: "1979年6月",
          category: "music-2",
          images: "/img/music/02歌林唱片/一片深情.jpg",
          link: "https://www.youtube.com/watch?v=xbvHPlvHTvk",
        },

        {
          title: "又見秋蓮",
          date: "1979年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/又見秋蓮.jpg",
          link: "https://www.youtube.com/watch?v=wQWpQj6C2xo",
        },
        {
          title: "台灣民謠歌謠專集 第三集",
          date: "1979年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠3.jpg",
          link: "https://www.youtube.com/watch?v=fzp6auGKhNU",
        },
        {
          title: "金盞花",
          date: "1980年3月",
          category: "music-2",
          images: "/img/music/02歌林唱片/金盞花.jpg",
          link: "https://www.youtube.com/watch?v=jSsCQI4LWaE",
        },
        {
          title: "就是溜溜的她",
          date: "1980年11月",
          category: "music-2",
          images: "/img/music/02歌林唱片/就是溜溜的她.jpg",
          link: "https://www.youtube.com/watch?v=KywpuzcGkUE",
        },
        {
          title: "愛你在心口難開",
          date: "1981年2月",
          category: "music-3",
          images: "/img/music/03東尼唱片/愛你在心口難開.jpg",
          link: "https://www.youtube.com/watch?v=IrUf3hbd2CM",
        },
        {
          title: "鳳飛飛精粹",
          date: "1981年5月",
          category: "music-3",
          images: "/img/music/03東尼唱片/鳳飛飛精粹.jpg",
          link: "https://www.youtube.com/watch?v=EuBh2zeuzPk",
        },
        {
          title: "好好愛我",
          date: "1981年10月",
          category: "music-2",
          images: "/img/music/02歌林唱片/好好愛我.jpg",
          link: "https://www.youtube.com/watch?v=Kw-riJKo0OU",
        },
        {
          title: "鳳飛飛成名曲專輯 Vol.2",
          date: "1981年10月",
          category: "music-9",
          images: "/img/music/09寶麗金唱片/鳳飛飛成名曲專輯Vol.2.jpg",
          link: "",
        },
        {
          title: "鳳情千千萬",
          date: "1982年1月",
          category: "music-2",
          images: "/img/music/02歌林唱片/鳳情千千萬.jpg",
          link: "https://www.youtube.com/watch?v=fsh21phX4Ik",
        },
        {
          title: "我是中國人",
          date: "1982年7月",
          category: "music-2",
          images: "/img/music/02歌林唱片/我是中國人.jpg",
          link: "https://www.youtube.com/watch?v=_I5sVExp0ms",
        },
        {
          title: "鳳飛飛台灣民謠歌謠專輯",
          date: "1982年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/台灣民謠4.jpg",
          link: "https://www.youtube.com/watch?v=qWuSfxI-3JU",
        },
        {
          title: "你來了",
          date: "1982年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/你來了.jpg",
          link: "https://www.youtube.com/watch?v=qQJa5I4IEhQ",
        },
        {
          title: "出外的人",
          date: "1983年4月",
          category: "music-2",
          images: "/img/music/02歌林唱片/出外的人.jpg",
          link: "https://www.youtube.com/watch?v=VxKNB7RTLZA",
        },
        {
          title: "相思爬上心底",
          date: "1983年8月",
          category: "music-2",
          images: "/img/music/02歌林唱片/相思爬上心底.jpg",
          link: "https://www.youtube.com/watch?v=fz8t9m9QdiM",
        },
        {
          title: "不知怨",
          date: "1983年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/不知怨.jpg",
          link: "https://www.youtube.com/watch?v=r3L3THcccJk",
        },

        {
          title: "仲夏",
          date: "1984年7月",
          category: "music-4",
          images: "/img/music/04北聯唱片/仲夏.jpg",
          link: "https://www.youtube.com/watch?v=FLLW7v0pPKk",
        },
        {
          title: "彤彩",
          date: "1985年4月",
          category: "music-4",
          images: "/img/music/04北聯唱片/彤彩.jpg",
          link: "https://www.youtube.com/watch?v=WVyOkULA7MA",
        },
        {
          title: "自我挑戰",
          date: "1985年12月",
          category: "music-2",
          images: "/img/music/02歌林唱片/自我挑戰.jpg",
          link: "https://www.youtube.com/watch?v=q9ZLKGM5vGw",
        },

        {
          title: "掌聲響起",
          date: "1986年9月",
          category: "music-2",
          images: "/img/music/02歌林唱片/掌聲響起.jpg",
          link: "https://www.youtube.com/watch?v=-G_4X3SvKtE",
        },

        {
          title: "什麼樣的你",
          date: "1987年6月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/什麼樣的你.jpg",
          link: "https://www.youtube.com/watch?v=v077zIuITWo",
        },
        {
          title: "鳳飛飛1968~1988珍藏版(上卷)",
          date: "1988年2月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/廿年珍藏版-上卷.jpg",
          link: "https://www.youtube.com/watch?v=hvLmpVwy-OE",
        },
        {
          title: "鳳飛飛1968~1988珍藏版(下卷)",
          date: "1988年2月",
          category: "music-5",
          images: "/img/music/05藍與白唱片/廿年珍藏版-下卷.jpg",
          link: "https://www.youtube.com/watch?v=UbEdNqJitkY",
        },
        {
          title: "浮世情懷",
          date: "1991年2月",
          category: "music-6",
          images: "/img/music/06真善美唱片/浮世情懷.jpg",
          link: "https://www.youtube.com/watch?v=NK0fHIE9IAQ",
        },
        {
          title: "今天的女人和那昨天的女孩",
          date: "1991年11月",
          category: "music-6",
          images: "/img/music/06真善美唱片/秋鸞.jpg",
          link: "https://www.youtube.com/watch?v=dZZr8OnH0ws",
        },

        {
          title: "想要彈同調",
          date: "1992年8月",
          category: "music-7",
          images: "/img/music/07EMI唱片/想要彈同調1.jpg",
          link: "https://www.youtube.com/watch?v=cWVUlzRf64w",
        },
        {
          title: "陪傷心人說往事",
          date: "1994年8月",
          category: "music-7",
          images: "/img/music/07EMI唱片/驛站.jpg",
          link: "https://www.youtube.com/watch?v=Dw-uVh2bgGs",
        },
        {
          title: "思念的歌",
          date: "1995年6月",
          category: "music-7",
          images: "/img/music/07EMI唱片/想要彈同調2-思念的歌.jpg",
          link: "https://www.youtube.com/watch?v=ZGXsSy5LBDM",
        },
        {
          title: "鳳飛飛35週年演唱會",
          date: "2004年1月",
          category: "music-8",
          images: "/img/music/08環球唱片/35週年演唱會.jpg",
          link: "",
        },
        {
          title: "《想要跟你飛》",
          date: "2009年12月",
          category: "music-10",
          images: "/img/music/08環球唱片/想要跟你飛-新歌+精選.jpg",
          link: "https://www.youtube.com/watch?v=jna53qxXRw4",
        },
        {
          title: "鳳聲歲月",
          date: "2015年2月",
          category: "music-8",
          images: "/img/music/08環球唱片/鳳聲歲月.jpg",
          link: "#",
        },
      ],

      showList: true,

      currentBtn:""
    };
  },
  mounted() {
    myMain();
    myRevoulation();
    this.$nextTick(() => {
      if (process.browser) {
        new WOW({ animateClass: "animate__animated" }).init();
        // 在页面mounted生命周期里面 根据环境实例化WOW
      }
    });
  },
  destroyed() {},
  computed: {},
  methods: {
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
