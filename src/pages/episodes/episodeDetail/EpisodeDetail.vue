<template>
  <dialog-detail-content>
    <section class="full-height">
      <episode-detail-loading v-if="isLoading" />

      <empty-result v-else-if="!isLoading && !episode?.id" />

      <section v-else class="episode-detail">
        <div class="episode-detail-content column justify-end content-center items-center">
          <div class="episode-detail-content-icon">
            <q-icon color="negative" name="mdi-television-play" size="70px" />
          </div>

          <div class="episode-detail-content-name flex items-center justify-center gap-10">
            <div>
              <p class="q-mb-none text-center text-h4">
                {{ episode.name }}
              </p>
            </div>
          </div>

          <div class="episode-detail-content-info">
            <div class="flex gap-20 justify-center">
              <div class="flex items-center no-wrap">
                <q-icon name="mdi-calendar-range" size="30px" />

                <p class="q-mb-none q-ml-md text-h5">
                  {{ episode.air_date }}
                </p>
              </div>

              <div class="flex items-center no-wrap">
                <q-icon name="mdi-playlist-play" size="30px" />

                <p class="q-mb-none q-ml-md text-h5">
                  {{ episode.episode }}
                </p>
              </div>
            </div>

            <div class="flex items-center no-wrap q-mt-lg justify-center">
              <q-icon name="mdi-account-multiple" size="30px" />

              <p class="q-mb-none q-ml-md text-h5 text-center">
                {{ `${episode.characters.length} ` }}
                <a
                  class="text-primary cursor-pointer"
                  @click="showDetailDialog"
                >
                  characters
                </a>
                <span>appear in this episode</span>
              </p>
            </div>
          </div>
        </div>

        <episodes-and-characters-dialog
          :array-items="episode.episodeCharacters"
          component="CharacterCard"
        />
      </section>
    </section>
  </dialog-detail-content>
</template>

<script lang="ts" setup>
  import EpisodeDetailLoading from 'src/components/episodes/episodeDetail.vue/EpisodeDetailLoading.vue'
  import EpisodesAndCharactersDialog from 'components/EpisodesAndCharactersDialog.vue'
  import DialogDetailContent from 'components/DialogDetailContent.vue'
  import { computed, inject, onMounted, watch } from 'vue'
  import { IEpisode } from '@/types/episode'
  import { useEpisodeStore } from '@/stores/episodesStore'
  import EmptyResult from 'src/components/common/EmptyResult.vue'
  import { useRouter } from 'vue-router'
  // import { IEventBus } from 'boot/bus'
  // import { EventBus } from 'quasar'

  const bus = inject<EventBus<IEventBus>>('bus')
  const router = useRouter()
  const episodeStore = useEpisodeStore()

  const currentRoute = router.currentRoute
  const episodeId = Number(currentRoute.value.query.id)

  const episode = computed<IEpisode>(() => (episodeStore.getEpisode))

  const isLoading = computed<boolean>(() => (
    episodeStore.getLoadingDetail
  ))

  watch(currentRoute, (route, oldRoute) => {
    if (
      route.query.id &&
      route.hash === '#episodeDetail' &&
      route.query.id !== oldRoute.query.id
    ) {
      episodeStore.fetchOneEpisode(Number(route.query.id))
    }
  })

  const showDetailDialog = (): void => {
    if (episode.value.characters && episode.value.characters?.length > 0) {
      bus?.emit('show-dialog', true)
    }
  }

  onMounted((): void => {
    if (episodeId) {
      episodeStore.fetchOneEpisode(episodeId)
    }
  })
</script>

<style scoped>

</style>
