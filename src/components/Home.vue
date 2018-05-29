<template>
  <div class="contarin">
    <banner/>
    <search></search>
    <div class="productClassOut">
      <ul>
        <li>
          <div class="iconfont icon-shangpinfenlei"></div>
          <div>类别1</div>
        </li>
        <li>
          <div class="iconfont icon-shangpinfenlei"></div>
          <div>类别2</div>
        </li>
        <li>
          <div class="iconfont icon-shangpinfenlei"></div>
          <div>类别3</div>
        </li>
        <li>
          <div class="iconfont icon-shangpinfenlei"></div>
          <div>类别4</div>
        </li>
      </ul>
    </div>
    <product-list></product-list>
  </div>
</template>
<script>
  import Banner from './Banner.vue'
  import ProductList from './ProductList.vue'
  import Search from './Search.vue'

  export default {
    components: {Banner, ProductList, Search},
  }
</script>
<style lang="scss" scoped>
  @import "../css/Home.scss";
</style>
