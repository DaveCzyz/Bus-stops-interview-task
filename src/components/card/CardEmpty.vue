<template>
  <div class="card-empty bg-white d-flex justify-content-center align-items-center w-100 rounded-2">
    <span>{{ placeholder }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  placeholder: string,
}>();
</script>
