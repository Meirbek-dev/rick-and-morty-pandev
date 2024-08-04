<template>
  <div
    v-for="episode in 20"
    :key="episode.id"
    class="col-12 col-sm-6 col-md-4 col-lg-3 flex flex-center q-pa-sm"
  >
    <episodes-card-loading />
  </div>
</template>

<script lang="ts" setup>
  import EpisodesCardLoading from '@/components/episodes/EpisodesCardLoading.vue'
</script>

<style scoped>

</style>
