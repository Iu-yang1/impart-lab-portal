<template>
  <div class="t0">
    <Header/>
    <div class="t1">
      <div class="t2">
        <div class="t3" style="position: absolute;left: 5%;bottom: 5%">
          <h1 style="color: aliceblue">{{$t('home.title')}}</h1>
          <h2 style="color: aliceblue;font-weight: normal">{{this.msg}}</h2>
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
      msg: 'Welcome!'
    }
  },
  mounted() {
    const now = new Date();
    /*if (now.getHours() >= 5 && now.getHours() < 12) {
      this.msg = this.$i18n.t('home.morning');
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
      this.msg = this.$i18n.t('home.afternoon');
    } else if (now.getHours() >= 18 && now.getHours() < 5) {
      this.msg = this.$i18n.t('home.night');
    } else {
      this.msg= 'Welcome!';
    }*/
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
.t0 {
  position: relative;
  background-color: #1a1a1a;
}
</style>