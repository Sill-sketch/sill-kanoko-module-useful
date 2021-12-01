<template>
  <i-breadcrumb>
    <i-breadcrumb-item v-for="(str, index) in dataArr" :key="index">{{ str }}</i-breadcrumb-item>
  </i-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      dataArr: ['Home', 'Menu 01', 'Funcation 02']
    }
  }
}
</script>

<style scoped>

</style>
