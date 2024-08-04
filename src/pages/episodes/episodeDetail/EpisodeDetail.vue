<template>
  <v-card>
    <v-container fluid>
      <v-row align="center" class="full-height" justify="center">
        <episode-detail-loading v-if="isLoading" />

        <empty-result v-else-if="!isLoading && !episode?.id" />

        <v-col v-else class="episode-detail" cols="12">
          <v-row align="center" class="episode-detail-content" justify="center">
            <v-col class="text-center" cols="12">
              <v-icon color="red" size="70px">mdi-television-play</v-icon>
            </v-col>

            <v-col class="text-center" cols="12">
              <p class="mb-0 display-1">{{ episode.name }}</p>
            </v-col>

            <v-col class="episode-detail-content-info" cols="12">
              <v-row justify="center">
                <v-col class="d-flex align-center" cols="auto">
                  <v-icon size="30px">mdi-calendar-range</v-icon>
                  <p class="mb-0 ml-3 text-h5">{{ episode.air_date }}</p>
                </v-col>

                <v-col class="d-flex align-center" cols="auto">
                  <v-icon size="30px">mdi-playlist-play</v-icon>
                  <p class="mb-0 ml-3 text-h5">{{ episode.episode }}</p>
                </v-col>
              </v-row>

              <v-row class="mt-4" justify="center">
                <v-col class="d-flex align-center" cols="auto">
                  <v-icon size="30px">mdi-account-multiple</v-icon>
                  <p class="mb-0 ml-3 text-h5 text-center">
                    {{ `${episode.characters.length} ` }}
                    <a class="text-primary cursor-pointer" @click="showDetailDialog">
                      characters
                    </a>
                    <span>appear in this episode</span>
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <episodes-and-characters-dialog
            :array-items="episode.episodeCharacters"
            component="CharacterCard"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
  import EpisodeDetailLoading from 'src/components/episodes/episodeDetail.vue/EpisodeDetailLoading.vue'
  import EpisodesAndCharactersDialog from 'components/EpisodesAndCharactersDialog.vue'
  import EmptyResult from 'src/components/common/EmptyResult.vue'
  import { computed, onMounted, watch } from 'vue'
  import { IEpisode } from '@/types/episode'
  import { useEpisodeStore } from '@/stores/episodesStore'
  import { useRouter } from 'vue-router'
  import DialogDetailContent from 'components/DialogDetailContent.vue'
  // import { IEventBus } from 'boot/bus'
  // import { EventBus } from 'quasar'

  // const bus = inject<EventBus<IEventBus>>('bus')
  const router = useRouter()
  const episodeStore = useEpisodeStore()

  const currentRoute = router.currentRoute
  const episodeId = Number(currentRoute.value.query.id)

  const episode = computed<IEpisode>(() => episodeStore.getEpisode)

  const isLoading = computed<boolean>(() => episodeStore.getLoadingDetail)

  watch(currentRoute, (route, oldRoute) => {
    if (
      route.query.id &&
      route.hash === '#episodeDetail' &&
      route.query.id !== oldRoute.query.id
    ) {
      episodeStore.fetchOneEpisode(Number(route.query.id))
    }
  })

  // const showDetailDialog = (): void => {
  //   if (episode.value.characters && episode.value.characters?.length > 0) {
  //     bus?.emit('show-dialog', true)
  //   }
  // }

  onMounted((): void => {
    if (episodeId) {
      episodeStore.fetchOneEpisode(episodeId)
    }
  })
</script>

<style scoped>
.full-height {
  height: 100%;
}

.episode-detail-content-icon {
  text-align: center;
}

.episode-detail-content-name {
  text-align: center;
}

.episode-detail-content-info {
  text-align: center;
}
</style>
