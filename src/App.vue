<template>
    <div class="container pt-5">
      <h1>Timetable</h1>
      <ListNavigation />
      <router-view/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import ListNavigation from '@/components/list/ListNavigation.vue';

onMounted(async () => {
  const store = useStore();
  await store.dispatch('stops/fetchStops');
});
</script>
