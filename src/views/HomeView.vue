<template>
  <CardWrapper>
    <CardHeader title="Select Bus Line" class="p-3" />
    <ResourceLoader>
      <ListBus />
    </ResourceLoader>
  </CardWrapper>

  <div class="gap-3 mt-3 d-flex flex-row flex-wrap flex-md-nowrap">
    <ListLine />
    <ListHour />
  </div>
</template>

<script setup lang="ts">
import ListBus from '@/components/list/ListBus.vue';
import ResourceLoader from '@/components/ResourceLoader.vue';
import CardWrapper from '@/components/card/CardWrapper.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import ListLine from '@/components/list/ListLine.vue';
import ListHour from '@/components/list/ListHour.vue';
</script>
