<template>
  <div id="home" @click="test">
    <navbar id="home_navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </navbar>
    <Scroll class="content" ref="scroll" :probeType="3" @backtopy="backtopy">

      <Swiper :banners="banners" ></Swiper>

      <childrenComps :imglink="recommends"></childrenComps>

      <recommended></recommended>

      <TabControl @tabclick="showimg" class="tab_ding" :title="['流行','新款','精选']"></TabControl>

      <showimg_pop :showimgpoplist="showGoods"></showimg_pop>

    </Scroll>

    <backtop @click.native="backtopclick"
             class="backtop"
             v-show="topshow"
    ></backtop>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
import Swiper from "@/components/common/swiper/Swiper"
import childrenComps from "./Homechildren/childrenComps/childrenComps"
import recommended from "./Homechildren/childrenComps/recommended"
import showimg_pop from "./Homechildren/childrenComps/showimg_pop"
import TabControl from "@/components/content/tabcontrol/TabControl"
import Scroll from "@/components/common/scroll/Scroll"  //滚动样式
import backtop from "@/components/content/backtop/backtop"

import {getHomeMultidata, getHomeGoods} from "@/network/home"


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goodsname: 'pop',
      goods: {
        "pop": {page: 0, list: []},
        "new": {page: 0, list: []},
        "sell": {page: 0, list: []},
      },
      topshow:false
    }
  },
  components: {
    navbar,
    Swiper,
    childrenComps,
    recommended,
    TabControl,
    showimg_pop,
    Scroll,
    backtop,
  },
  methods: {
    test() {
      // console.log(this.$refs.scroll.position < -1000);
      // console.log(this.topshow)
    },
    // 事件处理相关

    showimg(index) {
      if (index === 0) {
        this.goodsname = "pop"
      } else if (index === 1) {
        this.goodsname = "new"
      } else if (index === 2) {
        this.goodsname = "sell"
      }
    },

    //穿透组件,调用组件内部方法实现回到顶部
    backtopclick() {
      this.$refs.scroll.scrollTo(0, 0, 800)
    },

    //监听图片列表的滑动,决定是否显示回到顶部的图标
    backtopy(res) {
      this.topshow = res.y < -1000
    },

    // 网络请求相关

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {

      getHomeGoods(type, this.goods[type].page + 1).then((res) => {
        this.goods[type].list.push(...(res.data.data.list))
        this.goods[type].page += 1
      })
    },

  },
  computed: {
    showGoods() {
      return this.goods[this.goodsname].list
    },

  },
  created() {
    //请求轮播图数据
    this.getHomeMultidata()
    //请求首页数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")

  }
}
</script>

<style lang="less" scoped>
#home {
  padding-top: 10vw;
  width: 100vw;
}

#home_navbar {
  background-color: #FF8E96;

  div {
    font-size: 4vw;
    color: #ffffff;
  }
}

.tab_ding {
  //margin-top: -2vw;
  position: sticky;
  top: 10vw;
}

.content {
  height: 90vh;
}

.backtop {
  position: fixed;
  right: 8vw;
  bottom: 8vh;
}

</style>
