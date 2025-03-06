<template>
  <div class="gss-wrapper">
    <Header/>
    <iframe :src="serverStatusUrl" width="100%" height="89%"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import {SERVER_STATUS} from "../common/links.js";

export default {
  components: {Header},
  data() {
    return {
      serverStatusUrl: SERVER_STATUS
    }
  }
}
</script>

<style scoped>
.gss-wrapper {
  position: relative;
  background-color: #1a1a1a;
  height: 100%;
}
</style>