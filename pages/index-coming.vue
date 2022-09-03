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


        <!-- Page Conttent -->
        <main class="page-content">
            <div class="page-template-comming-soon bg_color--2">
                <div class="site">
                    <div class="col-lg-12 col-xl-12 bg_image--58 order-2 order-lg-1  fullscreen">

                    </div>


                </div>
            </div>
        </main>
        <!--// Page Conttent -->
    </div>
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
