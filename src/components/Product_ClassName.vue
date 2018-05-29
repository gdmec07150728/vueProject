<template>
  <div class="className">
    <ul>
      <li @click="getClassName('全部商品',-1)" :class="{active:isActive1 == -1}">全部商品</li>
      <li v-for="(list,key) in className" @click="getClassName(list,key)"
          :class="{active:isActive1 == key}">
        {{list}}
      </li>
    </ul>
  </div>
</template>
<script>
  import localstorage from '../localStorage'

  export default {
    props: {
      className: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        lists: [],
        isActive1: -1,
      }
    },
    methods: {
      getClassName: function (name, index) {
        this.isActive1 = index
        this.$emit("fromChild", name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../css/Product_ClassName.scss";
</style>
