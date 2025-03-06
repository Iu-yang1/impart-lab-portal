<template>
  <div style="position: relative;background-color: #1a1a1a;height: 100%;">
    <Header/>
    <iframe :src="worldMapUrl" width="100%" height="89%"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { WORLD_MAP } from "../common/links.js";

export default {
  components: {Header},
  data() {
    return {
      worldMapUrl: WORLD_MAP
    }
  }
}
</script>

<style scoped>
</style>