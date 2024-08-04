<template>
  <div
    v-for="location in 20"
    :key="location"
    class="col-12 col-xs-6 col-sm-4 col-md-3 col-lg-2 flex flex-center"
  >
    <locations-card-loading />
  </div>
</template>

<script lang="ts" setup>
  import LocationsCardLoading from '@/components/locations/LocationsCardLoading.vue'
</script>

<style scoped>

</style>
