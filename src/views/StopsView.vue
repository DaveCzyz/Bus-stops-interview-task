<template>
  <div class="rounded-2">
    <ResourceLoader>
      <CardWrapper>
        <CardHeader>
          <InputSearch v-model="search" />
        </CardHeader>

        <CardSubHeader title="Bus Stops" class="cursor-pointer" @click="sort">
          <img v-if="getOrder === ORDER.asc" src="@/assets/icons/down.svg" alt="down" />
          <img v-else src="@/assets/icons/up.svg" alt="up" />
        </CardSubHeader>

        <CardList>
          <CardItem
            v-for="stop in getFilteredStops"
            :key="stop"
            :value="stop"
          />
        </CardList>
      </CardWrapper>
    </ResourceLoader>
  </div>
</template>

<script setup lang="ts">
import { ORDER } from '@/enums';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@types/store';
import ResourceLoader from '@/components/ResourceLoader.vue';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import CardSubHeader from '@/components/card/CardSubHeader.vue';
import InputSearch from '@/components/InputSearch.vue';
import CardItem from '@/components/card/CardItem.vue';
import CardList from '@/components/card/CardList.vue';

const store = useStore<RootState>();

const search = ref<string>('');

const getOrder = computed(() => store.getters['stops/getOrder']?.stops);
const getFilteredStops = computed(() => store.getters['stops/getUniqueStops'](search.value));

const sort = () => {
  store.commit('stops/SET_ORDER', {
    key: 'stops',
    value: getOrder.value === ORDER.asc ? ORDER.desc : ORDER.asc,
  });
};
</script>
