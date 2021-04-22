<template>
  <div class="show_pop">
    <div v-for="item in showimgpoplist" class="show_pop_item">
      <img :src="item.show.img" :alt="item.title">
      <span class="shop_name">{{ item.title }}</span>
      <div>
        <span class="shop_color">{{ item.orgPrice }}</span>
        <span class="shop_collect">
        <span>收藏:</span>
        {{ Math.round(item.price) }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showimg",
  data() {
    return {}
  },
  methods: {
  },
  props: {
    showimgpoplist: {}
  }
}
</script>

<style lang="less">
.show_pop {

  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-evenly;
  align-content: center;
  background-image: linear-gradient(#f5f5f5, #eeeeee);

  .show_pop_item {
    width: 46vw;
    background: #ffffff;
    margin-top: 2vw;
    border-radius: 4%;
    font-size: 14px;


    img {
      width: 46vw;
      border-top-left-radius: 4%;
      border-top-right-radius: 4%;
      margin-bottom: 1vw;
    }

    .shop_name {
      padding: 0 2vw;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }

    div {
      margin: 1vw 0;
      display: flex;
      justify-content: space-evenly;
      border-radius: 3%;

      .shop_color {
        color: #EC7688;
      }

      .shop_collect {
        span {
          color: #9a9a9a;
          font-size: 10px;

        }

      }
    }
  }
}

</style>
