<template>
  <div>
    <navbar id="cart_navbar">
      <template v-slot:center>
        <div>
          购物车 (0)
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>

import navbar from "@/components/common/navbar/NavBar"

export default {
  name: "Cart",
  components: {
    navbar
  }
}
</script>

<style lang="less">

#cart_navbar {
  background-color: #FF8E96;
  div {
    font-size: 4vw;
    color: #ffffff;
  }
}
</style>
