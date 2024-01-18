<script setup lang="ts">
const props = defineProps<{
  name: string;
  value?: string;
}>();
</script>

<template>
  <div class="prop-and-value-list">
    <span class="prop">{{ props.name }}:</span>
    <span class="value" :title="props.value"><slot /></span>
  </div>
</template>

<style scoped lang="scss">
.prop-and-value-list {
  display: flex;
  margin-bottom: 10px;
}
.prop-and-value-list .prop {
  font-weight: bolder;
  margin-right: 10px;
}
.prop-and-value-list .value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
}
</style>
