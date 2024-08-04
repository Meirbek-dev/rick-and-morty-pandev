<template>
  <div class="row q-mt-md">
    <div class="col-12">
      <div class="title flex no-wrap content-center items-center">
        <p class="title-text">Episodes</p>
        <q-btn
          color="grey"
          icon="mdi-format-list-bulleted"
          label="see all"
          outline
          rounded
          size="10px"
          :to="{ name: 'episodes', query: { page: 1 } }"
        />
      </div>
    </div>
    <div class="col-12">
      <section v-if="isLoading" class="flex no-wrap gap-20">
        <div v-for="location in 10" :key="location" style="min-width: 250px">
          <episode-card-loading />
        </div>
      </section>

      <section v-else class="flex no-wrap gap-20">
        <div
          v-for="episode in episodes"
          :key="episode.id"
          style="min-width: 250px"
        >
          <episodes-card
            :episode="episode"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import EpisodeCardLoading from 'components/episodeCard/components/EpisodeCardLoading.vue'
  import EpisodesCard from 'src/components/episodes/EpisodesCard.vue'
  import { IEpisode } from '@/types/episode'

  defineProps<{
    episodes: IEpisode[]
    isLoading: boolean
  }>()
</script>

<style scoped lang="scss"></style>
