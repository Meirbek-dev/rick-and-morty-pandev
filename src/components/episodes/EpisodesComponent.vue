<template>
  <q-page class="q-mb-md flex content-center column full-width full-height">
    <section class="q-mt-lg full-width">
      <div
        v-if="!isLoading && !episodes.length"
        class="col-12"
      >
        <empty-result />
      </div>

      <pagination-content
        v-else
        :max-pages="4"
        :page="currentPage"
        :pages="episodeStore.responseInfo.pages || 1"
        @change:page="changePage"
      >
        <section class="row flex-center">
          <list-episodes-loading
            v-if="isLoading"
          />

          <div
            v-for="episode in episodes"
            v-else
            :key="episode.id"
            class="col-12 col-sm-6 col-md-4 col-lg-3 flex flex-center q-pa-sm"
          >
            <episodes-card
              :episode="episode"
            />
          </div>
        </section>
      </pagination-content>
    </section>

    <episode-detail />
  </q-page>
</template>

<script lang="ts" setup>
  import ListEpisodesLoading from '@/pages/episodes/ListEpisodesLoading.vue'
  import PaginationContent from '../common/PaginationContent.vue'
  import EpisodesCard from './EpisodesCard.vue'
  import { IEpisode } from '@/types/episode'
  import { useEpisodeStore } from '@/stores/episodesStore'
  import EmptyResult from '../common/EmptyResult.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import EpisodeDetail from './episodeDetail/EpisodeDetail.vue'

  const router = useRouter()
  const episodeStore = useEpisodeStore()

  const page = router.currentRoute.value.query.page as string
  const currentPage = ref<number>(1)

  const isLoading = computed<boolean>(() => (
    episodeStore.getLoading
  ))

  const episodes = computed<IEpisode[]>(() => (
    episodeStore.getEpisodes
  ))

  const changePage = (page: number): void => {
    currentPage.value = page

    router.push({
      query: {
        page,
      },
    })

    episodeStore.fetchEpisodes({
      page,
    })
  }

  onMounted(() => {
    if (!page) {
      router.push({
        query: {
          page: 1,
        },
      })
    }

    episodeStore.fetchEpisodes({ page: parseInt(page) })
  })
</script>

<style scoped>

</style>
