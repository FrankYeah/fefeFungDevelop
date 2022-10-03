<template>
  <div>
    <div class="control-head">最新消息</div>
    <loading v-if="isLoading" />
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      isLoading: false,

    }
  },
  mounted() {

  },
  components: {
    loading: require('~/components/loading.vue').default,
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>



</style>
