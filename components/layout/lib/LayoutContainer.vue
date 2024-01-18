<script setup lang="ts">
import WidthHolder from "./layout/WidthHolder.vue";
</script>

<template>
  <el-container class="container">
    <el-header class="header" height="111">
      <WidthHolder><slot name="header" /></WidthHolder>
    </el-header>
    <el-main class="main">
      <WidthHolder><slot /></WidthHolder>
    </el-main>
    <el-footer class="footer" height="120">
      <WidthHolder><slot name="footer" /></WidthHolder>
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
}
.header {
  padding: 30px;
  background-color: #fafafa;
}
.main {
  background-color: #e1e6e6;
}
.footer {
  padding: 30px;
  background-color: #94dadc;
}
</style>
