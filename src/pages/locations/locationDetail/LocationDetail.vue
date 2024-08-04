<template>
  <v-dialog-content>
    <v-container class="location-detail fill-height">
      <location-detail-loading v-if="isLoading" />

      <empty-result v-else-if="!isLoading && !location.id" />

      <v-container v-else class="d-flex flex-column align-center">
        <div class="episode-detail-icon">
          <v-avatar size="80">
            <v-img alt="location-img" src="../../assets/icons/planet-earth.webp" />
          </v-avatar>
        </div>

        <v-container class="episode-detail-name mt-6">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <p class="mb-0 mr-4 text-center text-h4">
                {{ location.name }}
              </p>
            </v-col>
          </v-row>

          <v-row align="center" class="mb-2" justify="center" no-wrap>
            <v-icon size="20">mdi-calendar-range</v-icon>
            <p class="mb-0 ml-2 text-h6">
              <span class="font-weight-bold">created at: </span>
              <span>{{ $filters.formatDate(String(location.created)) }}</span>
            </p>
          </v-row>
        </v-container>

        <v-container class="episode-detail-info">
          <v-row class="gap-5" justify="center">
            <v-col class="d-flex align-center" cols="auto">
              <v-icon size="40">
                <v-img alt="location-img" src="../../assets/icons/planet.webp" />
              </v-icon>
              <p class="mb-0 ml-2 text-h5">
                {{ location.type }}
              </p>
            </v-col>

            <v-col class="d-flex align-center" cols="auto">
              <v-icon size="45">
                <v-img alt="location-img" src="../../assets/icons/galaxy.webp" />
              </v-icon>
              <p class="mb-0 ml-2 text-h5">
                {{ location.dimension || 'unknown' }}
              </p>
            </v-col>
          </v-row>

          <v-row align="center" class="mt-4" justify="center" no-wrap>
            <v-icon size="30">mdi-account-multiple</v-icon>
            <p class="mb-0 ml-4 text-h5 text-center">
              {{ `${location.residents.length} ` }}

              class="text-primary cursor-pointer"
              @click="showDetailDialog"
              >
              characters
              </a>
              <span>in this location</span>
            </p>
          </v-row>
        </v-container>

        <episodes-and-characters-dialog
          :array-items="location.locationResidents"
          component="CharacterCard"
        />
      </v-container>
    </v-container>
  </v-dialog-content>
</template>

<script lang="ts" setup>
  import LocationDetailLoading from './LocationDetailLoading.vue'
  import DialogDetailContent from 'components/DialogDetailContent.vue'
  import EpisodesAndCharactersDialog from 'components/EpisodesAndCharactersDialog.vue'
  import { computed, inject, onMounted, watch } from 'vue'
  import { useLocationStore } from '@/stores/locationsStore'
  import { ILocation } from '@/types/location'
  import EmptyResult from '@/components/common/EmptyResult.vue'
  import { useRouter } from 'vue-router'
  import { IEventBus } from 'boot/bus'
  import { EventBus } from 'quasar'

  const bus = inject<EventBus<IEventBus>>('bus')
  const router = useRouter()
  const locationStore = useLocationStore()

  const currentRoute = router.currentRoute
  const locationId = Number(currentRoute.value.query.id)

  const isLoading = computed<boolean>(() => (
    locationStore.getLoadingDetail
  ))

  const location = computed<ILocation>(() => (
    locationStore.getLocation
  ))

  watch(currentRoute, (route, oldRoute): void => {
    if (route.query.id && route.query.id !== oldRoute.query.id) {
      locationStore.fetchOneLocation(Number(route.query.id))
    }
  })

  const showDetailDialog = (): void => {
    if (location.value.residents && location.value.residents?.length > 0) {
      bus?.emit('show-dialog', true)
    }
  }

  onMounted(async (): Promise<void> => {
    if (locationId) {
      await locationStore.fetchOneLocation(locationId)
    }
  })
</script>

<style scoped>
@import '@/styles/app.scss'
</style>
