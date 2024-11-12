<template>
  <div class="search-input mx-2 mt-2 rounded-2 d-flex justify-content-between">
    <input
      :value="modelValue"
      class="search px-3 py-2 rounded-2 bg-white"
      type="text"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <label :class="{ 'label-float': modelValue }">
      {{ modelValue ? 'Search' : 'Search...' }}
    </label>
    <img
      src="@/assets/icons/search.svg"
      alt="search_icon"
      class="p-2"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  modelValue: string,
}>();

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>
