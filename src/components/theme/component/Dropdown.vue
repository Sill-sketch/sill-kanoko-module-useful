<template>
  <div>
    <i-submenu name="1">
      <template slot="title">
        <span>Item 1</span>
      </template>

      <i-menu-group title="group01">
        <i-menu-item name="3-1">menu01</i-menu-item>
        <i-menu-item name="3-2">menu02</i-menu-item>
        <i-menu-item name="3-3">menu03</i-menu-item>
      </i-menu-group>
      <i-menu-group title="group02">
        <i-menu-item name="3-4">menu01</i-menu-item>
        <i-menu-item name="3-5">menu02</i-menu-item>
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