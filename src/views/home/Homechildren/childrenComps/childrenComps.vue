<template>
  <div id="home_children">
    <CircleGraph v-for="item in imglink" class="listitem">
      <template v-slot:img>
        <img :src="item.image">
      </template>
      <template v-slot:span>
        <p>{{ item.title }}</p>
      </template>
    </CircleGraph>
  </div>
</template>

<script>
import CircleGraph from "@/components/common/circlegraph/CircleGraph"

export default {
  name: "childrenComps",
  components: {
    CircleGraph,
  },
  props: {
    imglink: {}
  }
}
</script>
<style lang="less">
#home_children {
  display: flex;
  background: #ffffff;
  justify-content: space-around;
  .listitem {
    img {
      width: 20vw;
      height: 20vw;
    }
    p{
      margin-top: 2vw;
      margin-bottom: 8vw;
      text-align: center;
    }
  }
}
</style>
