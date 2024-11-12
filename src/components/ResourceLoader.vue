<template>
  <div v-if="isLoading" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="getErrors" class="text-center text-danger p-3">
    {{ getErrors }}
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@types/store';

const store = useStore<RootState>();

const isLoading = computed(() => store.getters['stops/isLoading']);
const getErrors = computed(() => store.getters['stops/getError']);
</script>
