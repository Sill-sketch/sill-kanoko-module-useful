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

    <i-layout style="height: calc(100vh - 50px);">
      <i-sider class="kanoko-sidebar">
        <i-breadcrumb separator="<span style='margin: 0 -10px'>|</span>" style="height: 45px;line-height: 45px;font-size: 24px;padding: 0 8px;font-family: monospace;">
          <i-breadcrumb-item>
            <i-icon type="md-arrow-back" />
          </i-breadcrumb-item>
          <i-breadcrumb-item>
            <span>Kitem</span>
          </i-breadcrumb-item>
        </i-breadcrumb>

        <SideMenu />
      </i-sider>

      <i-layout class="kanoko-functional">
        <Crumbs class="crumbs" />

        <i-content class="content">
          i-content
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          233
        </i-content>
      </i-layout>
    </i-layout>
  </i-layout>
</template>

<script>
import Dropdown from './component/Dropdown'
import SideMenu from './component/SideMenu'
import Crumbs from './component/Crumbs'

export default {
  components: {
    Dropdown, SideMenu, Crumbs
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

.kanoko-functional .crumbs {
  margin: 24px 0 12px;
}

.kanoko-functional .content {
  padding: 24px;
  overflow-y: scroll;
  background-color: #FFFFFF;
}
</style>
