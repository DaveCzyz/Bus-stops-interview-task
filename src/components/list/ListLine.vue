<template>
  <CardEmpty
    v-if="!stopsList.length"
    :placeholder="PLACEHOLDER.bus_line"
  />
  <CardWrapper v-else class="w-100">
    <CardHeader
      :title="`Bus Line: ${getLineNumber}`"
      class="p-3"
    >
      <template #close>
        <span class="cursor-pointer" @click="close">x</span>
      </template>
    </CardHeader>
    <CardSubHeader title="Bus Stops" class="cursor-pointer" @click="sort">
      <img v-if="getOrder === ORDER.asc" src="@/assets/icons/down.svg" alt="down" />
      <img v-else src="@/assets/icons/up.svg" alt="up" />
    </CardSubHeader>

    <CardList>
      <CardItem
        v-for="stop in stopsList"
        :key="stop"
        :value="stop"
        v-memo="[stop, getStop]"
        :active="stop === getStop"
        @click="selectLineStops(stop)"
      />
    </CardList>
  </CardWrapper>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import type { RootState } from '@types/store';
import { ORDER, PLACEHOLDER } from '@/enums';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardEmpty from '@/components/card/CardEmpty.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import CardSubHeader from '@/components/card/CardSubHeader.vue';
import CardItem from '@/components/card/CardItem.vue';
import CardList from '@/components/card/CardList.vue';

const store = useStore<RootState>();

const getOrder = computed(() => store.getters['stops/getOrder']?.line);
const getLineNumber = computed(() => store.getters['stops/getSelectedLine']);
const getStop = computed(() => store.getters['stops/getSelectedStop']);
const stopsList = computed(() => store.getters['stops/getStopsByLine'](getLineNumber.value));

const selectLineStops = (line: string) => {
  store.commit('stops/SET_SELECTED_STOP', {
    stop: line,
  });
};

const sort = () => {
  store.commit('stops/SET_ORDER', {
    key: 'line',
    value: getOrder.value === ORDER.asc ? ORDER.desc : ORDER.asc,
  });
};

const close = () => {
  store.dispatch('stops/resetSelection');
};
</script>
