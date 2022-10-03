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
      allData: null
    }
  },
  mounted() {
    this.getData()
  },
  components: {
    loading: require('~/components/loading.vue').default,
  },
  methods: {
    getData() {
      this.isLoading = true

      this.$axios.get(`/api/func/content/A04`)
        .then( res => {
          this.allData = res.data.data
          console.log(this.allData)
          this.isLoading = false

        })
        .catch(res => {
          console.log(res)
          this.isLoading = false
        })

    },
  }
}
</script>

<style lang="scss" scoped>



</style>
