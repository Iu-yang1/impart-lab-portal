<script setup>

</script>

<template>
  <div class="header-wrapper">
    <div class="header-side" style="padding-left: 12%;">
      <img class="header-logo" v-on:click="forward('/home')" src="/logo.png" alt="">
      <div class="header-options">
        <div class="header-option mf" v-on:click="forward('/guidebook')">{{$t('footer.about.guidebook')}}</div>
        <div class="header-option mf" v-on:click="forward('/status')">{{$t('footer.status.serverStatus')}}</div>
        <div class="header-option mf" v-on:click="forward('/worldMap')">{{$t('footer.status.worldMap')}}</div>
        <div class="header-option mf" v-on:click="forward('/issue')">{{$t('footer.support.issue')}}</div>
      </div>
    </div>
    <div class="header-side" style="padding-right: 7%">
      <div class="t2npm-2">
        <img src="../assets/language.svg" class="t2-3" style="height: 20px;width: 30px;position:relative;top:3px" alt="" v-on:click="() => this.isLanOpen = !this.isLanOpen"/>
        <div class="t3" v-if="this.isLanOpen">
          <div class="t4" v-on:click="changeLanguage('zh')">中文</div>
          <div style="height: 1px;width: 100%;background-color: #e16221;margin-top: 5px;margin-bottom: 5px"/>
          <div class="t4" v-on:click="changeLanguage('en')">English</div>
        </div>
      </div>
      <div/>
      <img v-on:click="joinDiscord" src="../assets/discord.svg" class="t2-3" alt=""/>
      <img v-on:click="joinQQGroup" src="../assets/QQ.svg" class="t2-3" style="height: 20px;width: 20px" alt=""/>
    </div>
  </div>
</template>

<script>
  import router from "../common/router.js";
  import { QQ_GROUP,DISCORD } from "../common/links.js";

  export default {
    data() {
      return {
        isLanOpen: false
      }
    },
    methods: {
      joinQQGroup() {
        window.open(QQ_GROUP);
      },
      joinDiscord() {
        window.open(DISCORD);
      },
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

.header-option {
  display: block;
  color: aliceblue;
  font-size: 18px;
  font-weight: bold;
}
.header-option:hover {
  color: #e16221;
  cursor: pointer;
}
.header-logo {
  height: 35px;
  width: 35px;
  position: absolute;
  left:7%;
  background-color: #e16221;
}
.header-logo:hover {
  cursor: pointer;
}
.header-side {
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
  padding: 20px 0 20px 0;
  gap:20px;
  border-bottom: 3px solid;
  border-color: #e16221;
  justify-content: space-between;
  z-index: 1000;
}
.header-options {
  display: flex;
  row-gap: 10px;
  column-gap: 30px;
  flex-wrap: wrap
}
@media (max-width: 760px) {
  .header-options {
    display: none;
    row-gap: 10px;
    column-gap: 30px;
    flex-wrap: wrap
  }
}
</style>