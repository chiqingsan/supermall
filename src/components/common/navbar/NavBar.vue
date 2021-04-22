<template>
  <div class="navbar">
    <div class="left">
      <slot  name="left"></slot>
    </div>
    <div class="center">
      <slot  name="center"></slot>
    </div>
    <div class="right">
      <slot  name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 10vw;
  display: flex;
  box-shadow: 0 2px 7px rgba(100, 100, 100, 0.3);
  justify-content: space-between;
  align-items: center;

}

.left, .right {
  height: 100%;
}

</style>
