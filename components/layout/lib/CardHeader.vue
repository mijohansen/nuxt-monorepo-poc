<script setup lang="ts">
const props = defineProps<{
  header: string;
}>();
</script>

<template>
  <div class="card-header">
    <span>{{ props.header }}</span>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
