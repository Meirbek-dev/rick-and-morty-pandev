<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="12">
        <v-row align="center" class="title" justify="space-between" no-gutters>
          <v-col>
            <h2 class="text-h6">Episodes</h2>
          </v-col>
          <v-col class="text-right">
            <v-btn
              color="grey"
              prepend-icon="mdi-format-list-bulleted"
              rounded
              size="small"
              :to="{ name: 'episodes', query: { page: 1 } }"
              variant="outlined"
            >
              see all
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row v-if="isLoading" class="gap-5" no-gutters>
          <v-col
            v-for="n in 10"
            :key="n"
            cols="auto"
            style="min-width: 250px"
          >
            <episode-card-loading />
          </v-col>
        </v-row>

        <v-row v-else class="gap-5" no-gutters>
          <v-col
            v-for="episode in episodes"
            :key="episode.id"
            cols="auto"
            style="min-width: 250px"
          >
            <episodes-card :episode="episode" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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

<style scoped>
.gap-5 {
  gap: 20px;
}
</style>
