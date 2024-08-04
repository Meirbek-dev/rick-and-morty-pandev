<template>
  <q-card class="episode-card">
    <q-card-section class="q-pb-none">
      <div class="flex no-wrap content-center items-center">
        <q-icon color="negative" name="mdi-television-play" size="24px" />
        <p class="q-ma-none q-ml-sm text-truncate">
          {{ getEpisode.name }} | {{ getEpisode.episode }}
        </p>
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none q-pb-none flex justify-between no-wrap">
      <div>
        <q-btn
          color="primary"
          icon="mdi-information"
          label="see more"
          outline
          rounded
          size="9px"
          @click="seeMore"
        />
      </div>
    </q-card-section>
  </q-card>
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

  const getEpisode = computed<IEpisode>(() => (props.episode))

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
