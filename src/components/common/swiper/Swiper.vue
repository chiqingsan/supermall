<template>
  <div @click="test" id="nav_swiper">
    <div class="nav_a">
      <div id="swiper">
        <img :src="banner[1]">
        <img v-for="(item) in banners" :src="item.image" :alt="item.title">
        <img :src="banner[0]">
      </div>

      <ul id="little">
        <li v-for="(item,index) in banners" :class="{licolor:index+1 === itemindex}" :key="index"></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  components: {},
  data() {
    return {
      swiperleft: -100,
      banner: [],
      itemindex: 1,
      itemcalss: null
    }
  },
  props: {
    banners: {},
  },
  methods: {
    test() {

    },
  },
  computed: {},
  mounted() {

    const swiper = document.getElementById("swiper")

    const timer = setInterval(() => {

      this.itemindex += 1

      if (this.itemindex >= this.banners.length + 1) {
        this.itemindex = 1
      }

      const timer2 = setInterval(() => {

        this.swiperleft -= 2
        swiper.style.left = this.swiperleft + "vw"

        if (this.swiperleft % 100 === 0) {

          clearInterval(timer2)

          if (this.swiperleft <= -(this.banners.length + 1) * 100) {
            swiper.style.left = -100 + "vw"
            this.swiperleft = -100
          }
        }
      }, 10)


    }, 3000)

  },
  beforeUpdate() {
    if (this.banner.length <= 1) {
      this.banner.push(this.banners[0].image)
      this.banner.push(this.banners[this.banners.length - 1].image)
    }
  }

}

</script>

<style lang="less">


#swiper {
  position: relative;
  display: flex;
  left: -100vw;

  img {
    width: 100vw;
  }

}

#nav_swiper {
  width: 100vw;
  background-color: #ffffff;
  overflow: hidden;


  .nav_a {

    ul {
      width: 100vw;
      position: relative;
      display: flex;
      bottom: 5vw;
      justify-content: center;

      li {
        list-style: none;
        width: 3vw;
        height: 3vw;
        background-color: rgba(187, 187, 187, 0.7);
        margin-left: 3vw;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(111, 110, 110, 0.3);

      }

      li:first-child {
        margin-left: 0;
      }

    }
  }

}

#nav_swiper > .nav_a > ul > .licolor {
  background-color: #f85b65;
}
</style>
