<template>
  <div class="card-subheader d-flex p-3 gap-2">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string,
}>();
</script>
