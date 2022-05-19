<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    <img src="../../assets/img/tabbar/index.png">
    <div>首页</div>-->
<!--因为插槽是被替换的，是被组件内容替换的，由此有些样式或者属性写在插槽上不会生效 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div><!--<div :class="{active:isActive}"><slot name="item-text"></slot></div>-->
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      //isActive:true
      //path:'/home',
    }
  },
  computed:{
    isActive(){
      // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
      // 如果没有找到匹配的字符串则返回 -1。
      // home-> item1(/home) = true
      // home-> item1(/category) = false
      // home-> item1(/car) = false
      // home-> item1(/mine) = false
      //$route那个对象活跃，$route就是哪个对象，home活跃那么$route就是home对象
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      console.log('aaa');
      /*看是有返回的需求，有则用push，没有则用replace*/
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width:24px;
  height:24px;
  margin-top: 3px;
  vertical-align: middle;/*middle：将支持valign特性的对象的内容与对象中部对齐*/
}
/*.active{*/
/*  color: green;*/
/*}*/
</style>
