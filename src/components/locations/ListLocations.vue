<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="12">
        <v-row align="center" class="title" no-gutters>
          <v-col>
            <p class="text-h6">Locations</p>
          </v-col>
          <v-col class="text-right">
            <v-btn
              color="grey"
              prepend-icon="mdi-format-list-bulleted"
              rounded
              size="small"
              :to="{ name: 'locations', query: { page: 1 } }"
              variant="outlined"
            >
              see all
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-row v-if="isLoading" class="flex-nowrap gap-5">
          <v-col
            v-for="n in 10"
            :key="n"
            cols="auto"
            style="max-width: 150px"
          >
            <locations-card-loading />
          </v-col>
        </v-row>

        <v-row v-else class="flex-nowrap gap-5">
          <v-col
            v-for="location in locations"
            :key="location.id"
            cols="auto"
            style="max-width: 150px"
          >
            <locations-card
              :location="location"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
@import '@/styles/app.scss'
</style>
