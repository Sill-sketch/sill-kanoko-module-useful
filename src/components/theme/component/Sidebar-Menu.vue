<template>
  <i-menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
    <i-menu-group title="内容管理">
      <i-menu-item name="1">
        <i-icon type="md-document" />
        文章管理
      </i-menu-item>
      <i-menu-item name="2">
        <i-icon type="md-chatbubbles" />
        评论管理
      </i-menu-item>
      <i-menu-item name="3">
        <i-icon type="md-heart" />
        用户留存
      </i-menu-item>
      <i-menu-item name="4">
        <i-icon type="md-leaf" />
        流失用户
      </i-menu-item>
    </i-menu-group>

    <!-- <i-submenu name="1">
      <template slot="title">
        <i-i-icon type="ios-navigate"></i-i-icon>
        Item 1
      </template>
      <i-menu-item name="1-1">Option 1</i-menu-item>
      <i-menu-item name="1-2">Option 2</i-menu-item>
      <i-menu-item name="1-3">Option 3</i-menu-item>
    </i-submenu>
    <i-submenu name="2">
      <template slot="title">
        <i-i-icon type="ios-keypad"></i-i-icon>
        Item 2
      </template>
      <i-menu-item name="2-1">Option 1</i-menu-item>
      <i-menu-item name="2-2">Option 2</i-menu-item>
    </i-submenu>
    <i-submenu name="3">
      <template slot="title">
        <i-i-icon type="ios-analytics"></i-i-icon>
        Item 3
      </template>
      <i-menu-item name="3-1">Option 1</i-menu-item>
      <i-menu-item name="3-2">Option 2</i-menu-item>
    </i-submenu> -->
  </i-menu>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>