<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 20"
        :key="n"
        class="d-flex justify-center align-center pa-2"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <episodes-card-loading />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import EpisodesCardLoading from '@/components/episodes/EpisodesCardLoading.vue'
</script>

<style scoped>
</style>
