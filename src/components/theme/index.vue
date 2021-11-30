<template>
  <i-layout>
    <i-header>
      <i-menu mode="horizontal" theme="dark" active-name="1">
        <div class="kanoko-logo">
          <span>Kanoko</span>
        </div>

        <Dropdown />
      </i-menu>
    </i-header>

    <i-layout>
      <i-sider class="kanoko-sidebar">
        <SidebarMenu />
      </i-sider>

      <i-layout class="kanoko-functional">
        <Breadcrumb class="breadcrumb" />

        <i-content class="content">
          i-content
        </i-content>
      </i-layout>
    </i-layout>
  </i-layout>
</template>

<script>
import Dropdown from './component/Dropdown'
import SidebarMenu from './component/Sidebar-Menu'
import Breadcrumb from './component/Breadcrumb'

export default {
  components: {
    Dropdown, SidebarMenu, Breadcrumb
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
/* * {
  border: 1px solid #d7dde4;
} */

.kanoko-logo{
  top: 10px;
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin-right: 50px;
  position: relative;

  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  font-family: monospace;
}

.kanoko-sidebar {
  background-color: #FFFFFF;
}

.kanoko-functional {
  padding: 0 24px 24px;
}

.kanoko-functional .breadcrumb {
  margin: 24px 0 12px;
}

.kanoko-functional .content {
  padding: 24px;
  background-color: #FFFFFF;
}
</style>
