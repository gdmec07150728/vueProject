<template>
  <div class="productAll">
    <ul>
      <li v-for="list in lists">
        <div class="productClass"><div>{{list.productClass}}</div><div class="iconfont icon-xiangyou"></div></div>
        <div class="productD">
          <ul>
            <li v-for="productL in list.productD">
              <div class="img"><img :src="productL.url"></div>
              <div class="name">{{productL.name}}</div>
              <div class="price">$<span>{{productL.price}}</span></div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lists: []
      }
    },
    mounted: function () {
      this.getList()
    },
    methods: {
      getList: function () {
        this.$http.get('/api/product').then(response => {
            this.lists = response.data.data.product
          }, response => {
            console.log("数据加载失败")
          }
        )
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../css/ProductList.scss";
</style>
