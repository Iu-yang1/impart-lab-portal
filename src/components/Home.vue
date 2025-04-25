<template>
  <div class="home-wrapper">
    <Header/>
    <div class="home-content">
      <div class="home-big-pic-stack">
        <div class="home-big-pic"/>
        <div style="width:40%;display: flex;flex-direction: column;position: relative;left: 7%">
          <h1 class="mf" style="color: #e16221;margin-bottom: 5px">{{'Impart Lab '}}</h1>
          <h1 class="mf" style="color: aliceblue">{{$t('home.title')}}</h1>
          <h2 class="mf" style="color: aliceblue;line-height:27px;font-weight: normal" v-if="this.timeRange === 1">{{$t('home.morning')}}</h2>
          <h2 class="mf" style="color: aliceblue;line-height:27px;font-weight: normal" v-if="this.timeRange === 2">{{$t('home.afternoon')}}</h2>
          <h2 class="mf" style="color: aliceblue;line-height:27px;font-weight: normal" v-if="this.timeRange === 3">{{$t('home.night')}}</h2>
        </div>
        <div style="width:40%;gap: 10px;display: flex;align-items: end;flex-direction: column;position: relative;right: 7%">
          <div style="display: flex;align-items: center;">
            <div style="height: 10px;width: 10px;background-color: #e16221;margin-right: 10px"/>
            <h2 class="mf" style="line-height:22px;font-size: 12px;font-weight: normal;color: aliceblue">{{$t('home.photoDesc')}}</h2>
          </div>
        </div>
      </div>
      <div class="home-desc-1" style="padding-bottom: 10px;display: flex;align-items: center;justify-content: center;">
        <div style="width: 30px;height: 1px;background-color: #e16221;"></div>
        <div class="mf home-join" v-on:click="joinServer">{{$t('home.join')}}{{' >'}}</div>
        <div style="width: 30px;height: 1px;background-color: #e16221;"></div>
      </div>
      <div class="home-desc-1">
        <div class="home-desc-img"/>
        <div style="width:500px;display: flex;flex-direction: column;gap: 20px">
          <div class="mf" style="width:100%;color: #e16221;font-weight: bolder;font-size: 20px">{{$t('home.desc-1-title')}}</div>
          <div class="mf" style="width:100%;display:flex;flex-wrap:wrap;color: aliceblue;font-weight: lighter;word-break: break-word;line-height: 28px">{{$t('home.desc-1-content')}}</div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import {WHITELIST} from "../common/links.js";

export default {
  data() {
    return {
      timeRange: 0
    }
  },
  mounted() {
    const now = new Date();
    if (now.getHours() >= 5 && now.getHours() < 12) {
      this.timeRange = 1;
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
      this.timeRange = 2;
    } else if ((now.getHours() >= 18 && now.getHours() <= 24) || (now.getHours() >= 0 && now.getHours() < 5)) {
      this.timeRange = 3;
    } else {
      this.timeRange = 0;
    }
  },
  methods: {
    joinServer() {
      window.open(WHITELIST);
    },
  },
  components: {Footer, Header}
}
</script>

<style scoped>
h1 {
  margin: 0;
}
.home-join {
  text-align: center;
  color: #1a1a1a;
  background-color: aliceblue;
  border-radius: 20px;
  border: #919191 solid 3px;
  padding: 10px;
  width: 160px;
  font-size: 20px;
}
.home-join:hover {
  cursor: pointer;
}
.home-desc-img {
  background: url("https://x19.fp.ps.netease.com/file/67c1c103f947232aaf00bcacE4IbzaFN06") no-repeat center;
  background-size: cover;
  width:500px;
  height: 280px;
  border-radius: 10px
}
.home-desc-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 7%;
  width: 100vw;
  box-sizing: border-box;
  gap: 7%;
  row-gap: 30px;
  flex-wrap: wrap;
}
.home-content {
  display: block;
  position: relative;
}
.home-big-pic-stack {
  width: 100vw;
  height: 500px;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 1;
}
.home-big-pic {
  background:
    linear-gradient(to top, rgb(26, 26, 26) 0%, rgba(0, 0, 0, 0) 40%) bottom no-repeat,
    url("https://x19.fp.ps.netease.com/file/67c1c0fc74897b279e31c241I6wYB02806") no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.home-wrapper {
  position: relative;
  background-color: #1a1a1a;
}
</style>