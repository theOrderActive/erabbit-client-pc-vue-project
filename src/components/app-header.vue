<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
     <AppHeaderNav />
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="cart">
      <AppHeaderCart />
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderNav from './app-header-nav'
import AppHeaderCart from './app-header-cart'
export default {
  name: 'AppHeader',
  components: { AppHeaderNav, AppHeaderCart }
}
</script>

<style scoped lang='less'>
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  .navs {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 40px;
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {
        a {
          color: @xtxColor;
          border-bottom: 1px solid @xtxColor;
        }
      }
    }
  }
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart{
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
