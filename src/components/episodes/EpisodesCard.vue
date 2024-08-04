<template>
  <v-card class="episode-card">
    <v-card-text class="pa-2">
      <div class="d-flex align-center">
        <v-icon color="error" size="24">mdi-television-play</v-icon>
        <p class="ma-0 ml-2 text-truncate">
          {{ getEpisode.name }} | {{ getEpisode.episode }}
        </p>
      </div>
    </v-card-text>
    <v-card-text class="pa-2 d-flex justify-space-between">
      <v-btn
        color="primary"
        prepend-icon="mdi-information"
        rounded
        size="small"
        variant="outlined"
        @click="seeMore"
      >
        see more
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { IEpisode } from '@/types/episode'
  import { useRouter } from 'vue-router'
  import { computed } from 'vue'

  const router = useRouter()
  const currentRoute = router.currentRoute
  const props = defineProps<{
    episode: IEpisode
  }>()

  const getEpisode = computed<IEpisode>(() => props.episode)

  const seeMore = (): void => {
    const routeQuery = (
      currentRoute.value.name === '/episodes' ||
      currentRoute.value.name === 'episodeDetail'
        ? currentRoute.value.query
        : {}
    )

    router.push({
      name: '/episodes',
      hash: '#episodeDetail',
      query: {
        page: 1,
        ...routeQuery,
        id: getEpisode.value.id,
      },
    })
  }
</script>

<style scoped lang="scss">
@import "./style/EpisodesCard.scss";
</style>
