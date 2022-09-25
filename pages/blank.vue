<template>
  <div class="">

  </div>
</template>

<script>
// import $ from 'jquery'
import myMain from "@/static/js/main.js";
import myRevoulation from "@/static/js/revoulation.js";

export default {
  auth: false,
  layout: "default",
  components: {},
  props: {},
  data() {
    return {
      isFromIndex: false,
      fromPage: ''
    };
  },
  beforeRouteEnter (to, from, next) {
    // https://www.cnblogs.com/crazycode2/p/7823423.html
    next(vm => {
      vm.fromPage = from.name
      if(from.name == 'index') {
        vm.isFromIndex = true
      }
    })
  },
  mounted() {
    if(this.isFromIndex == true) {
      this.$router.push('/')
    } else {
      this.$router.push(`/${this.fromPage}`)
    }

    myMain();
    myRevoulation();
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
