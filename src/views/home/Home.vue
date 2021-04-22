<template>
  <div>
    <navbar id="home_navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>

    </navbar>

    <Swiper :banners="banners">
    </Swiper>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
import {getHomeMultidata} from "@/network/home"
import Swiper from "@/components/common/swiper/Swiper"

export default {
  name: "Home",
  data() {
    return{
      banners:[],
      recommends:[],
    }
  },
  components: {
    navbar,
    Swiper,
  },
  methods: {},
  computed: {},
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style lang="less">
#home_navbar {
  background-color: #FF8E96;

  div {
    font-size: 4vw;
    color: #ffffff;
  }
}

</style>
