<template>
  <div>

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

    }
  },
  mounted () {
    myMain()
    myRevoulation()
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
