<template>
  <div class="productD">
    <ul>
      <li v-for="(list,key) in productAll" :key="key">
        <div class="img"><img :src="list.url"></div>
        <div class="name">{{list.name}}</div>
        <div class="price">${{list.price}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      productAll: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../css/AllProductList.scss";
</style>
