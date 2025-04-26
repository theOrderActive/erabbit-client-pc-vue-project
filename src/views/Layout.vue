<template>
  <AppTopnav/>
  <AppHeader/>
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter/>
</template>

<script>
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}

</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
