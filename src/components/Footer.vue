<script setup>

</script>

<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <div class="footer-content-group">
        <h1>{{$t('footer.about.aboutServer')}}</h1>
        <h2 v-on:click="forward('/guidebook')">{{$t('footer.about.guidebook')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.about.announcement')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.about.moment')}}</h2>
      </div>
      <div class="footer-content-group">
        <h1>{{$t('footer.status.status')}}</h1>
        <h2 v-on:click="forward('/status')">{{$t('footer.status.serverStatus')}}</h2>
        <h2 v-on:click="forward('/worldMap')">{{$t('footer.status.worldMap')}}</h2>
      </div>
      <div class="footer-content-group">
        <h1>{{$t('footer.support.support')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.support.joinUs')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.suggest')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.issue')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.report')}}</h2>
      </div>
      <div class="footer-content-group">
        <h1>{{$t('footer.contribute.contribute')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.contribute.contributor')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.contribute.donate')}}</h2>
      </div>
      <div class="footer-content-group">
        <h1>{{$t('footer.community.community')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.community.qq')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.community.discord')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.community.bilibili')}}</h2>
      </div>
    </div>
    <div class="footer-divider"/>
    <div class="footer-ending">
      <img src="/logo.png" alt="" style="height: 10px;width: 10px;"/>
      <h2>{{$t('footer.copyright')}}</h2>
    </div>
  </div>
</template>

<script>
import router from "../common/router.js";

export default {
  methods: {
    forward(val) {
      router.push({path: val})
    }
  }
}
</script>

<style scoped>
h1 {
  color: aliceblue;
  font-size: 13px;
  line-height: 0;
}
h2 {
  white-space: break-spaces;
  color: aliceblue;
  font-size: 13px;
  line-height: 0;
  font-weight: lighter;
}
h2:hover {
  color: #ff8f55;
  cursor: pointer;
  text-decoration: underline #ff8f55 1px;
}
.footer-content-group {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
}
.footer-ending {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 15px;
  padding: 0 6% 20px;
  width: 100%;
}
.footer-divider {
  height: 1px;
  width: 95%;
  background-color: #e16221;
}
.footer-content {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 12%;
  gap: 10%;
  row-gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
}
.footer-wrapper {
  background-color: #292e33 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
}
</style>