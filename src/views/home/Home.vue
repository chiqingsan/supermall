<template>
  <div id="home">
    <navbar id="home_navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </navbar>
    <Swiper :banners="banners"></Swiper>
    <childrenComps :imglink="recommends"></childrenComps>
    <recommended></recommended>
    <TabControl @tabclick="showimg" class="tab_ding" :title="['流行','新款','精选']"></TabControl>
    <showimg_pop :showimgpoplist="showGoods"></showimg_pop>

  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
import Swiper from "@/components/common/swiper/Swiper"
import childrenComps from "./Homechildren/childrenComps/childrenComps"
import recommended from "./Homechildren/childrenComps/recommended"
import showimg_pop from "./Homechildren/childrenComps/showimg_pop"
import TabControl from "@/components/content/tabcontrol/TabControl"

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
      }
    }
  },
  components: {
    navbar,
    Swiper,
    childrenComps,
    recommended,
    TabControl,
    showimg_pop,
  },
  methods: {
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
    }
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

<style lang="less">
#home {
  padding-top: 10vw;
}

#home_navbar {
  background-color: #FF8E96;

  div {
    font-size: 4vw;
    color: #ffffff;
  }
}

.tab_ding {
  position: sticky;
  top: 10vw;
}

</style>
