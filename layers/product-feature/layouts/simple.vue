<script setup lang="ts"></script>
<template>
  <ss3-layout-container>
    <template v-slot:header> Header content </template>
    <main>
      <slot />
    </main>
    <template v-slot:footer> Footer content </template>
  </ss3-layout-container>
</template>

<style lang="scss">
body {
  margin: 0;
  min-height: 100%;
}
.body {
  background-color: var(--ci-body-bg-color);
  color: var(--ci-text-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
