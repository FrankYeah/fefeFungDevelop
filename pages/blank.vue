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
      isFromIndex: false
    };
  },
  beforeRouteEnter (to, from, next) {
    // https://www.cnblogs.com/crazycode2/p/7823423.html
    next(vm => {
      if(from.name == 'index') {
        vm.isFromIndex = true
      }
    })
  },
  mounted() {
    if(this.isFromIndex == true) {
      this.$router.push('/')
    } else {
      this.$router.go(-1)
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
