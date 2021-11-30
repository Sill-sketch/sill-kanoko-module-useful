<template>
  <div>
    <i-submenu name="1">
      <template slot="title">
        <span>Item 1</span>
      </template>

      <i-menu-group title="使用">
        <i-menu-item name="3-1">新增和启动</i-menu-item>
        <i-menu-item name="3-2">活跃分析</i-menu-item>
        <i-menu-item name="3-3">时段分析</i-menu-item>
      </i-menu-group>
      <i-menu-group title="留存">
        <i-menu-item name="3-4">用户留存</i-menu-item>
        <i-menu-item name="3-5">流失用户</i-menu-item>
      </i-menu-group>
    </i-submenu>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>