<template>
  <CardEmpty
    v-if="!timetable.length"
    :placeholder="dynamicPlaceholder"
  />
  <CardWrapper v-else class="w-100">
    <CardHeader
      :title="`Bus Stop: ${getStopName}`"
      class="p-3"
    />
    <CardSubHeader title="Time" />
    <CardList>
      <CardItem
        v-for="time in timetable"
        :key="time"
        :value="time"
      />
    </CardList>
  </CardWrapper>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import type { RootState } from 'types/store';
import { PLACEHOLDER } from '@/enums';
import { Stop } from 'types/models/Stop';
import { timeToNumber } from '@/utils/time';
import CardEmpty from '@/components/card/CardEmpty.vue';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import CardSubHeader from '@/components/card/CardSubHeader.vue';
import CardItem from '@/components/card/CardItem.vue';
import CardList from '@/components/card/CardList.vue';

const store = useStore<RootState>();

const dynamicPlaceholder = computed(() => {
  const line = store.getters['stops/getSelectedLine'];

  return line
    ? PLACEHOLDER.bus_stop
    : PLACEHOLDER.bus_line;
});

const getStopName = computed(() => store.getters['stops/getSelectedStop']);

const timetable = computed(() => {
  const line = store.getters['stops/getSelectedLine'];
  return [...new Set(store.getters['stops/getStops']
    .filter((o: Stop) => o.line === line && o.stop === getStopName.value)
    .map((i: Stop) => i.time)
    .sort((a: string, b: string) => {
      return timeToNumber(a) - timeToNumber(b);
    }))]
});
</script>
