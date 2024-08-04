<template>
  <dialog-detail-content>
    <section class="full-height">
      <character-detail-loading v-if="isLoading" />

      <empty-result v-else-if="!isLoading && !character?.id" />

      <section v-else class="character-detail row content-center">
        <div class="col-12 col-sm-4 col-md-4 q-pa-md flex justify-center">
          <q-img
            :alt="character?.name"
            class="rounded-borders"
            :src="character?.image"
            style="max-width: 369px"
          />
        </div>

        <div class="character-detail-info col-12 col-sm-8 col-md-8 q-pa-md">
          <div class="flex items-center justify-text q-mb-sm">
            <div class="character-name flex items-center">
              <p class="q-mb-none text-center text-h4 q-mr-sm">
                {{ character?.name || '' }}
              </p>
            </div>
          </div>

          <div class="flex no-wrap items-center">
            <q-icon name="mdi-calendar-range" size="20px" />

            <p class="q-mb-none q-ml-sm">
              <span class="text-bold">created at: </span>
              <span>{{ $filters.formatDate(String(character?.created || new Date())) }}</span>
            </p>
          </div>

          <div class="flex no-wrap items-center q-mt-md">
            <q-icon color="negative" name="mdi-television-play" size="24px" />

            <p class="q-mb-none q-ml-sm">
              {{ `has participated in ${character?.episodes.length || 0} ` }}
              <a
                class="text-primary cursor-pointer"
                @click="showDetailDialog"
              >
                episodes
              </a>
            </p>
          </div>

          <character-info :character="character" />

          <div class="character-detail-info-locations row no-wrap gap-20">
            <character-locations :character="character" />
          </div>
        </div>

        <!-- <episodes-and-characters-dialog
          :array-items="character?.episodes"
          component="EpisodeCard"
        /> -->
      </section>
    </section>
  </dialog-detail-content>
</template>

<script lang="ts" setup>
  import CharacterDetailLoading from './CharacterDetailLoading.vue'
  import CharacterLocations from './CharacterLocations.vue'
  import CharacterInfo from './CharacterInfo.vue'
  // import EpisodesAndCharactersDialog from 'components/EpisodesAndCharactersDialog.vue'
  import { ICharacter } from '@/types/character'
  import { useCharacterStore } from '@/stores/charactersStore'
  import { computed, inject, onMounted, watch } from 'vue'
  import EmptyResult from '@/components/common/EmptyResult.vue'
  import { useRouter } from 'vue-router'
  // import { IEventBus } from 'boot/bus'
  // import { EventBus } from 'quasar'
  // import DialogDetailContent from 'components/DialogDetailContent.vue'

  // const bus = inject<EventBus<IEventBus>>('bus')
  const router = useRouter()
  const characterStore = useCharacterStore()

  const currentRoute = router.currentRoute
  const characterId = Number(currentRoute.value.query.id)

  const isLoading = computed<boolean>(() => (
    characterStore.loadingDetail
  ))

  const character = computed<ICharacter>(() => (
    characterStore.getCharacter
  ))

  watch(currentRoute, (route, oldRoute) => {
    if (
      route.query.id &&
      route.hash === '#characterDetail' &&
      route.query.id !== oldRoute.query.id
    ) {
      characterStore.fetchOneCharacter(Number(route.query.id))
    }
  })

  // const showDetailDialog = (): void => {
  //   if (character.value.episodes && character.value.episodes?.length > 0) {
  //     bus?.emit('show-dialog', true)
  //   }
  // }

  onMounted(async (): Promise<void> => {
    if (characterId) {
      await characterStore.fetchOneCharacter(characterId)
    }
  })
</script>

<style scoped lang="scss">
@import '../style/CharacterDetail.scss'
</style>
