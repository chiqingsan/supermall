<template>
  <div id="app">
    <router-view/>

    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>
<style lang="less">
@import "assets/css/base.css";
</style>
