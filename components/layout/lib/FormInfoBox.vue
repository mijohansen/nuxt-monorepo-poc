<script setup lang="ts">
import { InfoFilled } from "@element-plus/icons-vue";
</script>

<template>
  <el-popover placement="right" :width="350" trigger="click">
    <template #reference>
      <el-button :icon="InfoFilled" circle text />
    </template>
    <div class="infobox"><slot /></div>
  </el-popover>
</template>

<style scoped lang="scss">
.infobox {
  text-align: left;
  word-break: normal;
}
</style>
