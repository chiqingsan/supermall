<template>
  <div>
    <div v-for="item in showimglist.pop.list">
      <img :src="item.show.img" alt="">
      <p></p>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "showimg",
  props: {
    showimglist: {}
  }
}
</script>

<style scoped>

</style>
