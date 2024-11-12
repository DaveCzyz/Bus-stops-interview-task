<template>
  <div class="d-flex justify-content-between">
    <slot>
      <h2>{{ title }}</h2>
    </slot>
    <slot name="close" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title?: string,
}>();
</script>
