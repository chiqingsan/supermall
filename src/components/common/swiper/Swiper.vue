<template>
  <div @click="test" id="nav_swiper">
    <div id="swiper">
      <img :src="banner[1]">
      <img v-for="(item) in banners" :src="item.image" :alt="item.title">
      <img :src="banner[0]">
    </div>

    <ul id="little">
      <li v-for="(item,index) in banners" :class="{licolor:index+1 === itemindex}" :key="index"></li>
    </ul>
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
  computed: {

  },
  mounted() {

    const swiper = document.getElementById("swiper")

    const timer = setInterval(() => {

      this.itemindex += 1

      const timer2 = setInterval(() => {
        this.swiperleft -= 2
        swiper.style.left = this.swiperleft + "vw"

        if (this.swiperleft % 100 === 0) {

          clearInterval(timer2)

          if (this.itemindex === 5) {
            this.itemindex = 1
            swiper.style.left = -100 + "vw"
            this.swiperleft = -100
          }
        }
      }, 10)

    }, 3000)

  },
  beforeUpdate() {
    this.banner.push(this.banners[0].image)
    this.banner.push(this.banners[this.banners.length-1].image)
  }

}

</script>

<style lang="less">




#swiper {
  position: relative;
  display: flex;
  left: -100vw;

  img {
    width: 100%;
  }

}

#nav_swiper {
  position: absolute;
  overflow: hidden;


  ul {
    width: 100vw;
    position: relative;
    display: flex;
    bottom: 7vw;
    justify-content: center;

    li {
      list-style: none;
      width: 3vw;
      height: 3vw;
      background-color: rgba(100, 100, 100, .7);
      margin-left: 3vw;
      border-radius: 50%;
    }

    li:first-child {
      margin-left: 0;
    }

  }

}

#nav_swiper>ul>.licolor {
  background-color: #FF8E96;
}
</style>
