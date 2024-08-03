<template>
  <q-page class="q-mb-md flex content-center column full-width">
    <main class="q-mt-lg full-width">
      <div
        v-if="!characterStore.getLoading && !characters.length"
        class="col-12"
      >
        <empty-result />
      </div>

      <pagination-content
        v-else
        :max-pages="4"
        :page="currentPage"
        :pages="characterStore.getResponseInfo.pages || 1"
        @change:page="changePage"
      >
        <section class="row flex-center">
          <list-characters-loading
            v-if="characterStore.getLoading"
            :items="20"
          />

          <div
            v-for="character in characters"
            v-else
            :key="character.id"
            class="col-6 col-sm-6 col-md-4 col-lg-3 q-pa-sm"
          >
            <character-card
              :character="character"
            />
          </div>
        </section>
      </pagination-content>
    </main>

    <character-detail />
  </q-page>
</template>

<script lang="ts" setup>
  import ListCharactersLoading from './ListCharactersLoading.vue'
  import CharacterCard from './CharacterCard.vue'
  import PaginationContent from '../common/PaginationContent.vue'
  import { ICharacter } from '@/types/character'
  import { useCharacterStore } from '@/stores/charactersStore'
  import EmptyResult from '../common/EmptyResult.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import CharacterDetail from 'pages/characterDetail/CharacterDetail.vue'

  const router = useRouter()
  const characterStore = useCharacterStore()

  const currentRoute = router.currentRoute
  const page = router.currentRoute.value.query.page as string
  const currentPage = ref<number>(1)

  const characters = computed<ICharacter[]>(() => (
    characterStore.getCharacters
  ))

  const changePage = (page: number): void => {
    currentPage.value = page

    router.push({
      query: {
        ...currentRoute.value.query,
        page: currentPage.value,
      },
    })

    characterStore.fetchSingleCharacters({
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

    characterStore.fetchSingleCharacters({ page: parseInt(page) })
  })
</script>

<style scoped>
</style>
