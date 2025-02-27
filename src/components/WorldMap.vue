<template>
  <div style="position: relative;background-color: #1a1a1a;height: 100%;">
    <Header/>
    <iframe src="https://map-s.impart-lab.tech/" width="100%" height="85%"/>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {Header}
}
</script>

<style scoped>
</style>