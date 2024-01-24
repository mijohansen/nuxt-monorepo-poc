<script setup lang="ts">
import { useFetchPokemon } from "../composables/api";

definePageMeta({
  layout: "simple",
});

const { data: currentPokemon } = useFetchPokemon();
const { data: another } = useFetchPokemon();
</script>
<template>
  <div>The front index pages content</div>
  <pre>{{ currentPokemon.base_experience }}</pre>
  <pre>{{ JSON.stringify(another, null, 4) }}</pre>
</template>
