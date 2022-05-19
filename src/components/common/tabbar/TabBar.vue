<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  flex-direction: row; /*水平方向，从左到右排布，不写该属性默认为水平*/
  background-color: #f7f7f7;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100,100,100,.09);
}

</style>
