<template>
  <div class="home-wrapper">
    <Header/>
    <div class="t1">
      <div class="t2">
        <div class="t3" style="position: absolute;left: 5%;bottom: 5%">
          <h1 style="color: aliceblue">{{$t('home.title')}}</h1>
          <h2 style="color: aliceblue;font-weight: normal" v-if="this.timeRange === 1">{{$t('home.morning')}}</h2>
          <h2 style="color: aliceblue;font-weight: normal" v-if="this.timeRange === 2">{{$t('home.afternoon')}}</h2>
          <h2 style="color: aliceblue;font-weight: normal" v-if="this.timeRange === 3">{{$t('home.night')}}</h2>
        </div>
        <div class="t3-1" style="position: absolute;right: 5%;bottom: 5%;gap: 10px;display: flex;align-items: end;flex-direction: column">
          <div style="text-align: center;color: #1a1a1a;background-color: aliceblue;border-radius: 20px;border: #1a1a1a solid 3px;padding: 10px;width: 150px">{{$t('home.join')}}{{' >'}}</div>
          <div style="display: flex;align-items: center;">
            <div style="height: 10px;width: 10px;background-color: #e16221;margin-right: 10px"/>
            <h2 style="font-size: 20px;font-weight: normal;color: aliceblue">{{$t('home.photoDesc')}}</h2>
          </div>
        </div>
      </div>
      <div class="t2-1" style="display: flex;justify-content: center;align-items: center;padding: 50px;box-sizing: border-box;gap: 10%">
        <div class="t3-2" style="width: 500px;height: 280px;background-color: #292e33;border-radius: 10px"/>
        <div class="t3-3" style="display: flex;flex-direction: column;gap: 20px">
          <div style="color: #e16221;font-weight: bolder;">——————————</div>
          <div style="color: aliceblue;font-weight: lighter;width: 500px;word-break: break-word">——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————</div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

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
    } else if (now.getHours() >= 18 && now.getHours() < 5) {
      this.timeRange = 3;
    } else {
      this.timeRange = 0;
    }
  },
  components: {Footer, Header}
}
</script>

<style scoped>
.t2 {
  background-color: #292e33;
  width: 100%;
  height: 400px;
  position: relative;
}
.home-wrapper {
  position: relative;
  background-color: #1a1a1a;
}
</style>