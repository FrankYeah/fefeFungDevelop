<template>
<div class="template-color-1 template-font-1">

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
