<template>
  <div class="row q-mt-md">
    <div class="col-12">
      <div class="col-12">
        <div class="title flex no-wrap content-center items-center">
          <p class="title-text">
            Locations
          </p>
          <q-btn
            color="grey"
            icon="mdi-format-list-bulleted"
            label="see all"
            outline
            rounded
            size="10px"
            :to="{ name: 'locations', query: { page: 1 } }"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <section v-if="isLoading" class="flex no-wrap gap-20">
        <div
          v-for="location in 10"
          :key="location.id"
          style="max-width: 150px"
        >
          <locations-card-loading />
        </div>
      </section>

      <section v-else class="flex no-wrap gap-20">
        <div
          v-for="location in locations"
          :key="location.id"
          style="max-width: 150px"
        >
          <locations-card
            :location="location"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LocationsCardLoading from 'src/components/locations/LocationsCardLoading.vue'
  import LocationsCard from 'src/components/locations/LocationsCard.vue'
  import { ILocation } from '@/types/location'

  defineProps<{
    locations: ILocation[],
    isLoading: boolean
  }>()
</script>

<style scoped lang="scss">
</style>
