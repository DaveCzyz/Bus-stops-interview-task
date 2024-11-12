<template>
  <div class="list-bus d-flex flex-wrap gap-2 p-3">
    <template v-if="buses.length">
      <ItemBus
        v-for="bus in buses"
        :key="bus"
        :line="bus"
        v-memo="[bus, bus === active_line]"
        :isActive="bus === active_line"
        class="text-white rounded-2 px-2 py-1"
      />
    </template>
    <div v-else>
      No records.
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted, onUnmounted } from 'vue';
import ItemBus from '@/components/item/ItemBus.vue';
import type { RootState } from '@types/store';

const store = useStore<RootState>();

const buses = computed(() => store.getters['stops/getBuses']);
const active_line = computed(() => store.getters['stops/getSelectedLine']);

const deselect = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    store.dispatch('stops/resetSelection');
  }
};

onMounted(() => {
  window.addEventListener('keydown', deselect);
});

onUnmounted(() => {
  window.removeEventListener('keydown', deselect);
});
</script>
