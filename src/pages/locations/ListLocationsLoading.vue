<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="location in 20"
        :key="location"
        class="d-flex justify-center align-center"
        cols="12"
        lg="2"
        md="3"
        sm="4"
        xs="6"
      >
        <locations-card-loading />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import LocationsCardLoading from '@/components/locations/LocationsCardLoading.vue'
</script>

<style lang="scss" scoped>
.v-col {
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
