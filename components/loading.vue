<template>
<div class="loader-box">
    <div class="loader"></div>
</div>
</template>

<script>
export default {
  props: {

  },
}
</script>

<style lang="scss" scoped>

.loader-box {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid gray; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
