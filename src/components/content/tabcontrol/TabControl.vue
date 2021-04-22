<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title" @click="spanclick(index)">
      <span :class="{tabcontrol_color:index === spancolor}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:{}
  },
  data() {
    return{
      spancolor:0
    }
  },
  methods:{
    spanclick(index) {
      this.spancolor = index
      this.$emit("tabclick",index)
    }
  }
}
</script>

<style lang="less">

.tabcontrol{
  display: flex;
  //justify-content: space-around;
  align-items: center;
  height: 12vw;
  background: #ffffff;

  div{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      display: block;
      padding: 1vw 1vw 2vw 1vw;
      //height: 70%;
      font-size: 4vw;


    }
  }
}

.tabcontrol_color{
  border-bottom: #FF677B 0.6vw solid;
  color: rgb(255, 87, 119);

}

</style>
