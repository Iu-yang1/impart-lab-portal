<template>
  <div style="position: relative;background-color: #1a1a1a;height: 100%;">
    <Header/>
    <iframe :src="guidebookUrl" width="100%" height="89%"/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { WIKI } from '../common/links.js';

export default {
  components: {Header},
  data() {
    return {
      guidebookUrl: WIKI
    }
  }
}
</script>

<style scoped>
</style>