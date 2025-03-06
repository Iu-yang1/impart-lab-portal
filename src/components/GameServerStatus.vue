<script>
import Header from "./Header.vue";

export default {
  components: {Header}
}
</script>

<template>
  <div class="gss-wrapper">
    <Header/>
    <iframe src="https://status.impart-lab.tech/" width="100%" height="89%"/>
  </div>
</template>

<style scoped>
.gss-wrapper {
  position: relative;
  background-color: #1a1a1a;
  height: 100%;
}
</style>