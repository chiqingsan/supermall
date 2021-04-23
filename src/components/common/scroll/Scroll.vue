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
// import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'


BScroll.use(MouseWheel)
// BScroll.use(Pullup)
BScroll.use(ObserveDOM)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper, {
      mouseWheel: true,
      probeType: this.probeType,
      observeDOM: true,
      click: true,

    })


    //   pullUpLoad: true
    // })
    //
    this.scroll.on("scroll", (position) => {
      this.$emit("backtopy", position)
    })
    //
    // this.scroll.on('pullingUp', () => {
    //   console.log('上拉加载更多')
    // })

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
