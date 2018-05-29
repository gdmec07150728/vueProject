<template>
  <div id="contariner">
    <router-view></router-view>
    <div class="navOut">
      <router-link to="/" class="nav" :class="{navActive:isActive[0]}" @click.native="state(0,isActive[0])">
        <div class="iconfont icon-geren"></div>
        <div>首页</div>
      </router-link>
      <router-link to="/Product" class="nav" :class="{navActive:isActive[1]}" @click.native="state(1,isActive[1])">
        <div class=" iconfont icon-zhuye"></div>
        <div>产品</div>
      </router-link>
      <router-link to="/" class="nav" :class="{navActive:isActive[2]}" @click.native="state(2,isActive[2])">
        <div class=" iconfont icon-shangpinfenlei"></div>
        <div>购物车</div>
      </router-link>
      <router-link to="/Product" class="nav" :class="{navActive:isActive[3]}" @click.native="state(3,isActive[3])">
        <div class=" iconfont icon-gouwuche1"></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import localStorage from "./localStorage"

  export default {
    name: 'App',
    data() {
      return {
        isActive: localStorage.getARRAYStorage("navIsActive")
      }
    },
    watch: {
      'isActive': {
        handler: (val, oldval) => {
          localStorage.setARRAYStorage("navIsActive", val)
        },
        deep: true
      }
    },
    methods: {
      state: function (num, bool) {
        this.isActive = [false, false, false, false]
        this.isActive[num] = true
      }
    }
  }
</script>


<style lang="scss" scoped type="text/css">

  #contariner {
    width: 100%;
    height: 100%;
  }

  .navOut {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    line-height: 40px;
    box-shadow: 0px 0px 0px 1px #e1dede;
    background: #fff;

  .nav {
  @include floatRL;
    width: 25%;
    height: 100%;
    font-size: 26px;
    text-align: center;

  .iconfont {
    font-size: 42px;
    margin-top: 10px;
  }

  }

  .navActive {
    color: red;
  }

  }
</style>
