<template>
  <q-page class="q-mb-md flex content-center column">
    <section class="q-mt-lg full-width">
      <div
        v-if="!isLoading && !locations.length"
        class="col-12"
      >
        <empty-result />
      </div>

      <pagination-content
        v-else
        :max-pages="4"
        :page="currentPage"
        :pages="responseInfo.pages || 1"
        @change:page="changePage"
      >
        <section class="row flex-center">
          <list-locations-loading
            v-if="isLoading"
          />

          <div
            v-for="location in locations"
            v-else
            :key="location.id"
            class="col-12 col-xs-6 col-sm-4 col-md-3 col-lg-2 flex flex-center"
          >
            <locations-card
              :location="location"
            />
          </div>
        </section>
      </pagination-content>
    </section>

    <location-detail />
  </q-page>
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
