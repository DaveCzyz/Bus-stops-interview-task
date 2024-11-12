<template>
  <div
    class="item-bus cursor-pointer"
    :class="{ 'active': isActive }"
    :title="line"
    @click="select"
  >
    {{ line }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { RootState } from '@types/store';
import { useStore } from 'vuex';

const props = defineProps<{
  line: number,
  isActive: boolean,
}>();

const store = useStore<RootState>();

const select = () => {
  store.commit('stops/SET_SELECTED_LINE', {
    line: props.line,
  });
};
</script>
