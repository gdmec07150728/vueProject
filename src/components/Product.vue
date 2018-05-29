<template>
  <div class="contarin">
    <search></search>
    <div class="productClass">
      <div class="allClass">综合</div>
      <div class="priceClass">金额</div>
      <div class="pClass" @click="showClass()">{{checkedClassName == ""? classShow : checkedClassName}}</div>
    </div>
    <div class="ProductClassName" @click="hideClass()" v-show="isShow">
      <product-class :className="setListClass" @fromChild="getClassName"></product-class>
    </div>
    <all-product-list :productAll="setLists"></all-product-list>
  </div>
</template>
<script>
  import Search from './Search.vue'
  import ProductClass from './Product_ClassName.vue'
  import AllProductList from './AllProductList.vue'

  export default {
    components: {Search, ProductClass, AllProductList},
    data() {
      return {
        isShow: false,
        Lists: [],
        setLists: [],
        ListClass: [],
        setListClass: [],
        checkedClassName: '',
        classShow: '全部商品',
      }
    },
    mounted: function () {
      this.getProduct()
    },
    methods: {
      showClass: function () {
        this.isShow = !this.isShow
      },
      hideClass: function () {
        this.isShow = false
      },
      getProduct: function () {
        /*数据进行遍历获取其中的可用数据并分别赋值给一个数组，还需将这个数组的总和赋值给一个新的数组，不然不会更新到页面中*/
        this.$http.get('/api/product').then(responent => {
            responent.data.data.product.forEach((i) => {
              this.ListClass.push(i.productClass)
              i.productD.forEach((k) => {
                this.Lists.push(k)
              })
            })
            this.setListClass = this.ListClass
            this.setLists = this.Lists
            /*将其赋值给一个新的数组才能更新到页面*/
          }, responent => {
            console.log("获取数据失败")
          }
        )
      },
      getClassName: function (data) {
        this.checkedClassName = data
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../css/Product.scss";
</style>
