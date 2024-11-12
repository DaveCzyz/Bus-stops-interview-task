<template>
  <ul class="bg-white nav px-3 mt-4 mb-3 rounded-2">
    <li class="nav-item">
      <router-link class="nav-link py-3" :to="ROUTE.home">
        Bus Lines
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link py-3" :to="ROUTE.stops">
        Stops
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ROUTE } from '@/enums';
</script>
