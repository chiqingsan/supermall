<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'

import {getHomeGoods} from "@/network/home"


BScroll.use(MouseWheel)
BScroll.use(Pullup)
BScroll.use(ObserveDOM)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper, {
      mouseWheel: {
        speed: 16,
        invert: false,
        easeTime: 300,
        discreteTime: 400,
        throttleTime: 0,
        dampingFactor: 0.1
      },
      probeType: this.probeType,
      observeDOM: true,
      click: true,
      pullUpLoad: true

    })

    this.scroll.on("scroll", (position) => {
      this.$emit("backtopy", position)
    })


    this.scroll.on('pullingUp', () => {
      this.$emit("pullup")
    })

  },
  methods: {
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped lang="less">

</style>
