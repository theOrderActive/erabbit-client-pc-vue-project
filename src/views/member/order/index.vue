<template>
  <div class="member-order-page">
    <XtxTabs v-model="activeName">
      <XtxTabsPanel
        v-for="item in orderStatus"
        :key="item.name"
        :label="item.label"
        :name="item.name"
        >{{item.label}}</XtxTabsPanel
      >
    </XtxTabs>
  </div>
</template>
<script>
import { ref } from 'vue'
import { orderStatus } from '@/api/constants'
export default {
  name: 'MemberOrderPage',
  setup () {
    const activeName = ref('all')
    return { activeName, orderStatus }
  }
}
</script>
<style scoped lang="less"></style>
