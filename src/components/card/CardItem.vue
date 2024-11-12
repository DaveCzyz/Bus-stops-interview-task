<template>
  <div
    class="card-item p-3"
    :class="{ 'active': active }"
  >
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

withDefaults(defineProps<{
  value: string,
  active?: boolean,
}>(), {
  active: false,
});
</script>
