<script>
import Header from "./Header.vue";

export default {
  components: {Header}
}
</script>

<template>
  <div class="gss-wrapper">
    <Header/>
    <div class="gss-content">
      <h1 class="mf" style="color: aliceblue">施工中，敬请期待！</h1>
    </div>
  </div>
</template>

<style scoped>
.gss-wrapper {
  position: relative;
  background-color: #1a1a1a;
}
.gss-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>