<template>
  <div class="template-color-1 template-font-2">
    <!-- Add your site or application content here -->

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

    <div id="wrapper" class="wrapper">
      <header
        class="
          br_header
          header-default header-transparent
          pt--15
          light-logo--version
          haeder-fixed-width
          headroom--sticky
          header-mega-menu
          clearfix
        "
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="header__wrapper mr--0">
                <div class="header-left flex-20">
                  <div class="logo logo-top">
                    <a to="/"
                      ><img src="/img/home-logo-01.svg" alt="鳳飛飛故事館"
                    /></a>
                    <!-- <a href="index.html">
                      <img src="img/home-logo-01.svg" alt="鳳飛飛故事館" />
                    </a> -->
                  </div>
                  <div class="logo logo-sticky">
                    <NuxtLink to="/"
                      ><img src="/img/home-logo-白.svg" alt="鳳飛飛故事館"
                    /></NuxtLink>
                  </div>
                </div>
                <div class="header-flex-right flex-80">
                  <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                    <nav class="page_nav">
                      <ul class="mainmenu">
                        <li class="lavel-1">
                          <NuxtLink to="/"><span>首頁</span></NuxtLink>
                        </li>
                        <li class="lavel-1">
                          <NuxtLink to="/new-event"
                            ><span>最新活動</span></NuxtLink
                          >
                        </li>
                        <li class="lavel-1">
                          <NuxtLink to="/visit"><span>參觀資訊</span></NuxtLink>
                        </li>

                        <li class="lavel-1 with--drop slide-dropdown">
                          <a href="#"><span>展覽資訊</span></a>
                          <ul class="dropdown__menu">
                            <li>
                              <NuxtLink to="/exhibition-now"
                                ><span>本期展覽</span></NuxtLink
                              >
                            </li>
                            <li>
                              <NuxtLink to="/exhibition-past"
                                ><span>過去展覽</span></NuxtLink
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="lavel-1 with--drop slide-dropdown">
                          <a href="#"><span>飛飛風采</span></a>
                          <ul class="dropdown__menu">
                            <li>
                              <NuxtLink to="/style-music"
                                ><span>音樂作品</span></NuxtLink
                              >
                            </li>
                            <li>
                              <NuxtLink to="/style-awards"
                                ><span>獎項紀錄</span></NuxtLink
                              >
                            </li>
                            <li>
                              <NuxtLink to="/style-voice"
                                ><span>飛飛聲影</span></NuxtLink
                              >
                            </li>
                            <li>
                              <NuxtLink to="/style-list"
                                ><span>飛飛大事記</span></NuxtLink
                              >
                            </li>
                          </ul>
                        </li>

                        <li class="lavel-1">
                          <NuxtLink to="/journey"
                            ><span>飛飛踩點</span></NuxtLink
                          >
                        </li>
                        <li class="lavel-1">
                          <NuxtLink to="/about"><span>關於我們</span></NuxtLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright-alert">
          <p>
            本網站所使用之素材，部分經所有權人授權使用，仍有一部份為網路素材，若您為所有權人請您與我們聯絡。<a
              id="CRclose"
              class="bk-btn yellow-btn"
              href="#"
              >關閉</a
            >
          </p>
        </div>
      </header>

      <!-- Start Popup Menu -->
      <div class="popup-mobile-manu popup-mobile-visiable">
        <div class="inner">
          <div class="mobileheader">
            <div class="logo">
              <NuxtLink to="/" @click="menuClose()">
                <img src="/img/home-logo.svg" alt="Multipurpose" />
              </NuxtLink>
            </div>
            <a class="mobile-close" href="#"></a>
          </div>
          <div class="menu-content">
            <ul class="menulist object-custom-menu">
              <NuxtLink to="/">
                <li class="manu-li" @click="menuClose()">
                  <span>首頁</span>
                </li></NuxtLink
              >

              <NuxtLink to="/new-event"
                ><li class="manu-li" @click="menuClose()">
                  <span>最新活動</span>
                </li></NuxtLink
              >

              <NuxtLink to="visit"
                ><li class="/manu-li" @click="menuClose()">
                  <span>參觀資訊</span>
                </li></NuxtLink
              >

              <li class="has-mega-menu">
                <a href="#"><span>展覽資訊</span></a>
                <ul class="object-submenu">
                  <NuxtLink to="/exhibition-now"
                    ><li @click="menuClose()">
                      <span>本期展覽</span>
                    </li></NuxtLink
                  >

                  <NuxtLink to="/exhibition-past"
                    ><li @click="menuClose()">
                      <span>過去展覽</span>
                    </li></NuxtLink
                  >
                </ul>
              </li>

              <li class="has-mega-menu">
                <a href="#"><span>飛飛風采</span></a>
                <ul class="object-submenu">
                  <NuxtLink to="/style-music"
                    ><li @click="menuClose()">
                      <span>音樂作品</span>
                    </li></NuxtLink
                  >

                  <NuxtLink to="/style-awards">
                    <li @click="menuClose()">
                      <span>獎項紀錄</span>
                    </li></NuxtLink
                  >

                  <NuxtLink to="/style-voice">
                    <li @click="menuClose()">
                      <span>飛飛聲影</span>
                    </li></NuxtLink
                  >

                  <NuxtLink to="/style-list">
                    <li @click="menuClose()">
                      <span>飛飛大事記</span>
                    </li></NuxtLink
                  >
                </ul>
              </li>

              <NuxtLink to="/journey">
                <li class="manu-li" @click="menuClose()">
                  <span>飛飛踩點</span>
                </li></NuxtLink
              >

              <!--<li><a href="smalltalk.html"><span>飛飛敲敲話</span></a></li> -->
              <!-- <li><a href="event-list.html"><span>活動記事</span></a></li> -->

              <NuxtLink to="/about">
                <li class="manu-li" @click="menuClose()">
                  <span>關於我們</span>
                </li></NuxtLink
              >
            </ul>
          </div>
        </div>
      </div>
      <!-- End Popup Menu -->
      <client-only>
        <div class="swiper mySwiper" ref="swiper">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in allData.filter(data => data.category == 'carousel')"
                :key="index"
                class="swiper-slide"
              >
              <img style="width:100%" :src="item.image" />
            </div>
            <!-- <div class="swiper-slide">
              <img src="/img/slider-2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="/img/slider-3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="/img/slider-4.jpg" />
            </div> -->
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>

          <div class="swiper-pagination"></div>
        </div>
      </client-only>

      <main>
        <!-- Start Service Area -->
        <div class="bk-service-area section-ptb-xl fefe-bg--1">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="section-title text-center wow animate__fadeInUp"
                  data-wow-iteration="1"
                >
                  <div class="dp-flex section-title-top">
                    <div class="head-img">
                      <img src="/img/CD-icon2.svg" alt="" />
                    </div>
                    <h3>{{ allData[4].title }}</h3>
                  </div>

                  <h2>{{ allData[4].content }}</h2>
                </div>
              </div>
            </div>

            <div class="row mt--70 mt_sm--20 mt_md--30">
              <!-- Start Single Portfolio -->
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-delay=".5s"
                data-wow-iteration="1"
              >
                <div class="portfolio with-caption mt_mobile--30">
                  <div class="thumb">
                    <NuxtLink to="new-event"
                      ><img src="/img/home-01.jpg" alt="最新活動"
                    /></NuxtLink>
                  </div>
                  <div class="caption-bottom text-left">
                    <div
                      class="info dp-flex"
                      style="display: flex; align-items: "
                    >
                      <div class="info-img" style="center;margin-top:0;">
                        <img src="/img/newevent-icon.svg" alt="" />
                      </div>
                      <h5 class="heading heading-h5">
                        <NuxtLink to="new-event">最新活動</NuxtLink>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Portfolio -->

              <!-- Start Single Portfolio -->
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-delay=".5s"
                data-wow-iteration="1"
              >
                <div class="portfolio with-caption mt_mobile--30">
                  <div class="thumb">
                    <NuxtLink to="visit"
                      ><img src="/img/home-02.jpg" alt="參觀資訊"
                    /></NuxtLink>
                  </div>
                  <div class="caption-bottom">
                    <div
                      class="info"
                      style="display: flex; align-items: center"
                    >
                      <div class="info-img" style="center;margin-top:0;">
                        <img src="/img/exibition-icon.svg" alt="" />
                      </div>

                      <h5 class="heading heading-h5">
                        <NuxtLink to="visit">參觀資訊</NuxtLink>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Portfolio -->

              <!-- Start Single Portfolio -->
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-delay=".6s"
                data-wow-iteration="1"
              >
                <div class="portfolio with-caption mt_sm--30 mt_md--30">
                  <div class="thumb">
                    <NuxtLink to="exhibition-now"
                      ><img src="/img/home-03.jpg" alt="展覽介紹"
                    /></NuxtLink>
                  </div>
                  <div class="caption-bottom text-left">
                    <div
                      class="info dp-flex"
                      style="display: flex; align-items: center"
                    >
                      <div class="info-img" style="center;margin-top:0;">
                        <img src="/img/visit-icon.svg" alt="" />
                      </div>
                      <h5 class="heading heading-h5">
                        <NuxtLink to="exhibition-now">展覽介紹</NuxtLink>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Single Portfolio -->
            </div>
          </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Portfolio Area -->
        <div class="bk-portfolio-area">
          <div class="black-bg-wrapper pt--80 pb--150 pb_sm--200 fefe-bg--2">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="
                      section-title
                      text-center
                      white-text
                      wow
                      animate__fadeInUp
                    "
                    data-wow-iteration="1"
                  >
                    <div class="dp-flex section-title-top">
                      <div class="head-img">
                        <img src="/img/CD-icon4.svg" alt="" />
                      </div>
                      <h3 style="color: #ffe793">我們的願景與使命</h3>
                    </div>

                    <h2 class="ml_sm--15 mr_sm--15" style="color: #fff">
                      「探索鳳時代，開創鳳未來」
                      大溪是鳳飛飛的故鄉，鳳飛飛是獨特的大溪記憶，也是台灣的共同資產。
                      故事館不只訴說過去，也正在串連現在發生的人事物，展現鳳文化的生命力，這是所謂的「探索鳳時代，開創鳳未來」。
                      串連與平台，正是本網站的願景與使命。
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              portfolio-wrapper
              pl--150
              pr--150
              pl_lg--50
              pr_lg--50
              pl_md--50
              pr_md--50
              pl_sm--30
              pr_sm--30
            "
          >
            <div class="row row--0 space_dec--110">
              <!-- Start Single Portfolio -->
              <div class="col-lg-6">
                <div class="portfolio portfolio_style--1">
                  <div class="thumb">
                    <img src="/img/portfolio-1.jpg" alt="鳳飛飛故事館" />
                  </div>
                </div>
              </div>
              <!-- End Single Portfolio -->

              <div class="col-lg-6">
                <div class="row row--0">
                  <!-- <div
                    class="col-lg-12 wow animate__fadeInUp"
                    data-wow-iteration="1"
                  >
                    <div class="portfolio portfolio_style--1">
                      <div class="thumb">

                      </div>
                    </div>
                  </div> -->
                  <img
                    class="col-lg-12 wow animate__fadeInUp"
                    data-wow-iteration="1"
                    src="img/portfolio-2.jpg"
                    alt="鳳飛飛故事館"
                  />
                  <div
                    class="col-lg-6 wow animate__fadeInUp"
                    data-wow-iteration="1"
                  >
                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1">
                      <div class="thumb">
                        <img src="/img/portfolio-3.jpg" alt="鳳飛飛故事館" />
                      </div>
                    </div>
                    <!-- End Single Portfolio -->
                  </div>

                  <div
                    class="col-lg-6 wow animate__fadeInUp"
                    data-wow-iteration="1"
                  >
                    <div class="portfolio portfolio_style--1">
                      <div class="thumb">
                        <img src="/img/portfolio-4.jpg" alt="鳳飛飛故事館" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Portfolio Area -->

        <!-- Start CounterUp Area -->
        <div class="bk-number-speaks section-ptb-xl bg_image--3">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12">
                <div
                  class="section-title wow animate__fadeInUp"
                  data-wow-iteration="1"
                >
                  <h3 class="theme-color">台灣一代歌后</h3>
                  <h3 class="theme-color">一個傳奇 一個希望</h3>
                  <h2>
                    鳳飛飛 所具備的群眾魅力 是空前絕後的 在鳳飛飛的故事、歌聲裡
                    為大家帶來了溫暖、療癒 她是我們的一代歌后！一個傳奇！
                  </h2>
                  <NuxtLink to="style-list"
                    ><a class="bk-btn theme-btn add-mt">更多內容</a></NuxtLink
                  >
                  <!-- <a class="bk-btn theme-btn add-mt" href="style-list.html"
                    >更多內容</a
                  > -->
                </div>
              </div>

              <div
                class="
                  col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12
                  mt_md--40
                  mt_sm--40
                "
              >
                <div class="speakers-number-wrap">
                  <!-- Start Single Count -->
                  <div
                    class="number-wrap wow animate__fadeInUp"
                    data-wow-iteration="1"
                  >
                    <span ref="waypoint" style="color: #6001d2">{{
                      count1
                    }}</span>
                    <div class="content">
                      <h6>張專輯以上</h6>
                      <p>
                        鳳飛飛在國內發行的專輯唱片或合輯
                        超過上百張，這數字還不含海外發行
                        代表作品性的作品：祝你幸福，我是一片雲，松林的低語，愛你在心口難開，追夢人，掌聲響起，想要彈同調等等，不計其數。
                      </p>
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div
                    class="number-wrap mt--40 wow animate__fadeInUp"
                    data-wow-iteration="1"
                  >
                    <span style="color: #6001d2">{{ count2 }}</span>
                    <div class="content">
                      <h6>座獎項以上</h6>
                      <p>
                        鳳飛飛一生獲獎無數，在鳳姐遠行之後甚至創下紀錄，獲得金曲獎與金鐘獎雙金特別獎，空前絕後。
                        然而，您知道嗎?鳳姐此生最貴重的桂冠是什麼嗎?我們認為是國民天后大溪的女兒。您覺得呢?
                      </p>
                    </div>
                  </div>
                  <!-- End Single Count -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End CounterUp Area -->

        <!-- Start Team Area -->
        <div class="bk-team-area ptb--60 pb_sm--5 bg_color--1">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="
                    section-title
                    d-flex
                    justify-content-between
                    wow
                    move-up
                  "
                >
                  <div class="heading-left dp-flex">
                    <div class="head-img" style="margin-right: 5px">
                      <img src="/img/CD-icon2.svg" alt="" />
                    </div>
                    <h3 class="theme-color">飛飛踩點</h3>
                  </div>
                  <div class="heading-right">
                    <NuxtLink to="journey"
                      >更多景點 <i class="fa fa-arrow-right"></i
                    ></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- Start Single Team -->
              <div
                class="col-lg-3 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-iteration="1"
              >
                <div class="team team_style--1">
                  <!-- Image Wrap -->
                  <div class="image-wrap">
                    <div class="thumb">
                      <img src="/img/team-1.jpg" alt="Team images" />
                      <div class="overlay"></div>
                      <div class="shape">
                        <img
                          class="shape-01"
                          src="/img/team-shape-1.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-02"
                          src="/img/team-shape-2.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-03"
                          src="/img/team-shape-3.png"
                          alt="shape image"
                        />
                      </div>
                    </div>
                    <!-- Social Network -->
                    <!-- <div class="social-networks">
                                        <div class="inner">
                                            <a class="hint--bounce hint--top hint--primary" href="#" aria-label="地圖">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </a>
                                        </div>
                                    </div> -->
                  </div>
                  <!-- Team Info -->
                  <div class="info">
                    <h6 class="name">鳳飛飛故居</h6>
                    <span class="position">桃園市大溪區草店尾 (福仁宮後)</span>
                  </div>
                </div>
              </div>
              <!-- End Single Team -->

              <!-- Start Single Team -->
              <div
                class="col-lg-3 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-iteration="1"
              >
                <div class="team team_style--1">
                  <!-- Image Wrap -->
                  <div class="image-wrap">
                    <div class="thumb">
                      <img src="/img/team-2.jpg" alt="Team images" />
                      <div class="overlay"></div>
                      <div class="shape">
                        <img
                          class="shape-01"
                          src="/img/team-shape-1.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-02"
                          src="/img/team-shape-2.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-03"
                          src="/img/team-shape-3.png"
                          alt="shape image"
                        />
                      </div>
                    </div>
                    <!-- Social Network -->
                    <!-- <div class="social-networks">
                                        <div class="inner">
                                            <a class="hint--bounce hint--top hint--primary" href="#" aria-label="地圖">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </a>
                                        </div>
                                    </div> -->
                  </div>
                  <!-- Team Info -->
                  <div class="info">
                    <h6 class="name">老家水井</h6>
                    <span class="position">后尾巷和草店尾</span>
                  </div>
                </div>
              </div>
              <!-- End Single Team -->

              <!-- Start Single Team -->
              <div
                class="col-lg-3 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-iteration="1"
              >
                <div class="team team_style--1">
                  <!-- Image Wrap -->
                  <div class="image-wrap">
                    <div class="thumb">
                      <img src="/img/team-3.jpg" alt="Team images" />
                      <div class="overlay"></div>
                      <div class="shape">
                        <img
                          class="shape-01"
                          src="/img/team-shape-1.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-02"
                          src="/img/team-shape-2.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-03"
                          src="/img/team-shape-3.png"
                          alt="shape image"
                        />
                      </div>
                    </div>
                    <!-- Social Network -->
                    <!-- <div class="social-networks">
                                        <div class="inner">
                                            <a class="hint--bounce hint--top hint--primary" href="#" aria-label="地圖">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </a>
                                        </div>
                                    </div> -->
                  </div>
                  <!-- Team Info -->
                  <div class="info">
                    <h6 class="name">鳳飛飛老家</h6>
                    <span class="position">和平路105號</span>
                  </div>
                </div>
              </div>
              <!-- End Single Team -->

              <!-- Start Single Team -->
              <div
                class="col-lg-3 col-md-6 col-sm-6 col-12 wow animate__fadeInUp"
                data-wow-iteration="1"
              >
                <div class="team team_style--1">
                  <!-- Image Wrap -->
                  <div class="image-wrap">
                    <div class="thumb">
                      <img src="/img/team-4.jpg" alt="Team images" />
                      <div class="overlay"></div>
                      <div class="shape">
                        <img
                          class="shape-01"
                          src="/img/team-shape-1.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-02"
                          src="/img/team-shape-2.png"
                          alt="shape image"
                        />
                        <img
                          class="shape-03"
                          src="/img/team-shape-3.png"
                          alt="shape image"
                        />
                      </div>
                    </div>
                    <!-- Social Network -->
                    <!-- <div class="social-networks">
                                        <div class="inner">
                                            <a class="hint--bounce hint--top hint--primary" href="#" aria-label="地圖">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </a>
                                        </div>
                                    </div> -->
                  </div>
                  <!-- Team Info -->
                  <div class="info">
                    <h6 class="name">含笑樹</h6>
                    <span class="position">後尾巷空地</span>
                  </div>
                </div>
              </div>
              <!-- End Single Team -->
            </div>
          </div>
        </div>
        <!-- End Team Area -->

        <!-- Start Testimonial Area -->
        <div
          class="
            bk-testimonial-area
            section-ptb-xl
            bg_color--1
            poss_relative
            pt_sm--0
          "
        >
          <div class="wavify-wrapper">
            <svg
              width="100%"
              height="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="wavify-item"
              data-wavify-height="140"
              data-wavify-background="rgba(245,245,245,0.5)"
              data-wavify-amplitude="80"
              data-wavify-bones="4"
            >
              <path
                d="M 0 141.71042689406383 C 237.875 148.50471572578806 237.875 148.50471572578806 475.75 145.107571309926 C 713.625 141.71042689406383 713.625 141.71042689406383 951.5 165.82491752026056 C 1189.375 189.9394081464571 1189.375 189.9394081464571 1427.25 193.5786122514483 C 1665.125 197.21781635643944 1665.125 197.21781635643944 1903 165.82491752026056 L 1903 7389 L 0 7389 Z"
                fill="rgba(245,245,245,0.5)"
              ></path>
            </svg>

            <svg
              width="100%"
              height="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="wavify-item"
              data-wavify-height="140"
              data-wavify-background="#f5f5f5"
              data-wavify-amplitude="80"
              data-wavify-bones="3"
            >
              <path
                d="M 0 147.22020568980648 C 317.16666666666663 183.65559797623268 317.16666666666663 183.65559797623268 634.3333333333333 165.43790183301957 C 951.4999999999999 147.22020568980648 951.4999999999999 147.22020568980648 1268.6666666666665 200.09089320557024 C 1585.833333333333 252.96158072133412 1585.833333333333 252.96158072133412 1903 183.26276877337258 L 1903 7389 L 0 7389 Z"
                fill="#f5f5f5"
              ></path>
            </svg>
          </div>

        </div>
        <!-- End Testimonial Area -->
      </main>
    </div>
  </div>
</template>

<script>
// import '@/static/js/vendor/vendor.min.js'
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
import custom from "@/static/js/custom.js";

export default {
  auth: false,
  layout: "default",

  components: {},
  props: {},
  data() {
    return {
      waypointed: false,
      count1: 100,
      count2: 40,
      isShowInfo: false,
      key: 0,
      allData: []
    };
  },
  created() {
    for(let i = 0; i < 30; i++) {
      this.allData.push({
        auth: null,
        category: null,
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
  mounted() {
    if (process.browser) {
      // 在这里根据环境引入wow.js
      var { WOW } = require("wowjs");
    }
    myMain();
    myRevoulation();
    custom();
    this.getData()
  },
  destroyed() {},
  computed: {},
  methods: {
    getData() {
      this.$axios.get(`/api/func/content/module/A02`)
        .then( res => {
          this.allData = res.data.data
          console.log(this.allData)
          this.startSwiper()
        })
        .catch(res => {
          console.log(res)
        })
    },
    startSwiper() {
      this.$nextTick(() => {
        window.addEventListener("scroll", this.handleScroll());

        new Swiper(this.$refs.swiper, {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' + className + '">' + `0${index + 1}` + "</span>"
              );
            },
          },
          effect: "creative",
          creativeEffect: {
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
        });
        if (process.browser) {
          new WOW({ animateClass: "animate__animated" }).init();
        }
      });
    },
    handleScroll() {
      var count = 0;
      var th = this;
      return function () {
        this.currentScroll = window.pageYOffset;

        if (this.currentScroll >= 1852) {
          if (count < 1) {
            th.count1 = 0;
            th.count2 = 0;
            for (let index = 0; index < 100; index++) {
              setTimeout(() => {
                th.count1++;
              }, `${index * 10}`);
            }
            for (let index = 0; index < 40; index++) {
              setTimeout(() => {
                th.count2++;
              }, `${index * 15}`);
            }
          }
          count++;
        }
      };
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
      // let allBody = document.getElementsByTagName("body");
      // console.log("allBody", allBody);

      // $body.removeClass('popup-mobile-menu-wrapper'), $html.css({
      //     overflow: ""
      // })
    },
    handleInfoVisible() {
      this.isShowInfo = this.isShowInfo ? false : true;
    },
  },
};
</script>

<style scoped>
body,
html {
  overflow-x: hidden;
}
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.mySwiper >>> .swiper-pagination-bullet {
  background-color: rgba(180, 66, 66, 0) !important;
  height: 30px;
  width: 30px;
  color: #fff;
  opacity: 1;
  margin-right: 20px;
}
.mySwiper >>> .swiper-pagination-bullet-active {
  border-bottom: 3px #fff solid;
  border-radius: 0;
}
.manu-li {
  padding-top: 19px;
  padding-bottom: 19px;
  display: block;
  position: relative;
  border-top: 1px solid transparent;
  border-color: rgba(255, 255, 255, 0.15);
}
</style>
