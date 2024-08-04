<template>
  <v-container class="mb-4 d-flex flex-column justify-center">
    <v-row class="mt-6">
      <v-col v-if="!isLoading && !locations.length" cols="12">
        <empty-result />
      </v-col>

      <v-col v-else cols="12">
        <pagination-content
          :max-pages="4"
          :page="currentPage"
          :pages="responseInfo.pages || 1"
          @change:page="changePage"
        >
          <v-row justify="center">
            <list-locations-loading v-if="isLoading" />

            <v-col
              v-for="location in locations"
              v-else
              :key="location.id"
              class="d-flex justify-center"
              cols="12"
              lg="2"
              md="3"
              sm="4"
              xs="6"
            >
              <locations-card :location="location" />
            </v-col>
          </v-row>
        </pagination-content>
      </v-col>
    </v-row>

    <location-detail />
  </v-container>
</template>

<script lang="ts" setup>
  import ListLocationsLoading from '@/pages/locations/ListLocationsLoading.vue'
  import LocationDetail from './locationDetail/LocationDetail.vue'
  import LocationsCard from './LocationsCard.vue'
  import PaginationContent from '../common/PaginationContent.vue'
  import { useLocationStore } from '@/stores/locationsStore'
  import { ILocation } from '@/types/location'
  import EmptyResult from '../common/EmptyResult.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const locationStore = useLocationStore()

  const currentRoute = router.currentRoute
  const page = currentRoute.value.query.page as string
  const currentPage = ref<number>(1)

  const isLoading = computed<boolean>(() => (
    locationStore.getLoading
  ))

  const responseInfo = computed(() => (
    locationStore.getResponseInfo
  ))

  const locations = computed<ILocation[]>(() => (
    locationStore.getLocations
  ))

  const changePage = (page: number): void => {
    currentPage.value = page

    router.push({
      query: {
        page,
      },
    })

    locationStore.fetchLocations({
      page: currentPage.value,
    })
  }

  onMounted((): void => {
    if (!page) {
      router.push({
        query: {
          page: 1,
        },
      })
    }

    locationStore.fetchLocations({ page: parseInt(page) })
  })
</script>

<style scoped>
</style>
