<script setup>

</script>

<template>
  <div class="footer-wrapper">
    <div class="t1">
      <div class="t2">
        <h1>{{$t('footer.about.aboutServer')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.about.guidebook')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.about.announcement')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.about.moment')}}</h2>
      </div>
      <div class="t2">
        <h1>{{$t('footer.status.status')}}</h1>
        <h2 v-on:click="forward('/status')">{{$t('footer.status.serverStatus')}}</h2>
        <h2 v-on:click="forward('/worldMap')">{{$t('footer.status.worldMap')}}</h2>
      </div>
      <div class="t2">
        <h1>{{$t('footer.support.support')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.support.joinUs')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.suggest')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.issue')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.support.report')}}</h2>
      </div>
      <div class="t2">
        <h1>{{$t('footer.contribute.contribute')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.contribute.contributor')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.contribute.donate')}}</h2>
      </div>
      <div class="t2">
        <h1>{{$t('footer.community.community')}}</h1>
        <h2 v-on:click="forward(0)">{{$t('footer.community.qq')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.community.discord')}}</h2>
        <h2 v-on:click="forward(0)">{{$t('footer.community.bilibili')}}</h2>
      </div>
    </div>
    <div class="t1-1"/>
    <div class="t1-2">
      <img src="/logo.png" alt="" style="height: 10px;width: 10px;top:100%;"/>
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
.t2 {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  width: 15%;
}
.t1-2 {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 15px;
  padding: 0 60px 20px;
  width: 100%;
}
.t1-1 {
  height: 1px;
  width: 95%;
  background-color: #e16221;
}
.t1 {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding-left: 12%;
  padding-right: 12%;
  flex-direction: row;
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