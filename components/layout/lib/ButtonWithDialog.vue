<script setup lang="ts">
import { ref } from "vue";

const dialogVisible = ref(false);
const openDialogue = () => (dialogVisible.value = true);
const closeDialog = () => (dialogVisible.value = false);

const props = defineProps<{
  buttonText: string;
  dialogTitle: string;
  confirmButtonEnabled: boolean;
  onConfirm: () => Promise<void>;
}>();

const onConfirmButtonPress = async () => {
  await props.onConfirm();
  closeDialog();
};
</script>

<template>
  <el-button @click="openDialogue">{{ buttonText }}</el-button>
  <el-dialog v-model="dialogVisible" :title="dialogTitle" width="600px">
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Avbryt</el-button>
        <el-button type="primary" @click="onConfirmButtonPress" :disabled="!confirmButtonEnabled"> Legg til </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
