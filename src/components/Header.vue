<script setup>

</script>

<template>
  <div class="header-wrapper">
    <div class="t1">
      <img class="t2" v-on:click="forward('/home')" src="/logo.png" alt="">
      <div style="display: flex;">
        <h1 class="t2-1" v-on:click="forward('/guidebook')">{{$t('footer.about.guidebook')}}</h1>
        <h1 class="t2-1" v-on:click="forward('/status')">{{$t('footer.status.serverStatus')}}</h1>
        <h1 class="t2-1" v-on:click="forward('/worldMap')">{{$t('footer.status.worldMap')}}</h1>
        <h1 class="t2-1" v-on:click="forward('/issue')">{{$t('footer.support.issue')}}</h1>
      </div>
    </div>
    <div class="t1">
      <div class="t2-2">
        <img src="../assets/language.svg" class="t2-3" style="height: 20px;width: 30px;position:relative;top:3px" alt="" v-on:click="() => this.isLanOpen = !this.isLanOpen"/>
        <div class="t3" v-if="this.isLanOpen">
          <div class="t4" v-on:click="changeLanguage('zh')">中文</div>
          <div style="height: 1px;width: 100%;background-color: #e16221;margin-top: 5px;margin-bottom: 5px"/>
          <div class="t4" v-on:click="changeLanguage('en')">English</div>
        </div>
      </div>
      <div/>
      <img src="../assets/discord.svg" class="t2-3" alt=""/>
      <img src="../assets/QQ.svg" class="t2-3" style="height: 20px;width: 20px" alt=""/>
    </div>
  </div>
</template>

<script>
  import router from "../common/router.js";

  export default {
    data() {
      return {
        isLanOpen: false
      }
    },
    methods: {
      forward(val) {
        router.push({path: val})
      },
      changeLanguage(lang) {
        this.$i18n.locale = lang;
        this.isLanOpen = false;
      }
    }
  }
</script>

<style scoped>
h1 {
  color: aliceblue;
  font-size: 18px;
}
.t4 {
  color: aliceblue;
  font-size: 13px;
  display: flex;
  text-align: center;
}
.t4:hover {
  color: #e16221;
  cursor: pointer;
}
.t3 {
  position: absolute;
  background-color: #292e33;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e16221;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  z-index: 999;
}
.t2-3 {
  height: 30px;
  width: 30px;
}
.t2-3:hover {
  cursor: pointer;
}
.t2-2 {
  display: block;
  position: relative;
}
.t2-1 {
  display: block;
  gap: 3px;
  padding: 20px 20px;
  margin: 0;
}
.t2-1:hover {
  color: #e16221;
  cursor: pointer;
}
.t2 {
  height: 35px;
  width: 35px;
  position: absolute;
  left:7%;
  background-color: #e16221;
}
.t2:hover {
  cursor: pointer;
}
.t1 {
  padding-left: 12%;
  align-items: center;
  display: flex;
  gap:20px;
}
.header-wrapper {
  background-color: #1a1a1a;
  box-sizing: border-box;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  padding: 10px 7% 10px 0;
  border-bottom: 3px solid;
  border-color: #e16221;
  justify-content: space-between;
  z-index: 1000;
}
</style>