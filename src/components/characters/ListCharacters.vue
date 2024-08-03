<template>
  <div class="row flex-center q-mt-lg full-width">
    <div class="col-12">
      <div v-if="!hideTitle" class="title flex no-wrap content-center items-center">
        <p class="title-text">
          Characters
        </p>
        <q-btn
          color="grey"
          icon="mdi-format-list-bulleted"
          label="see all"
          outline
          rounded
          size="10px"
          :to="{ name: 'characters', query: { page: 1 } }"
        />
      </div>
    </div>
    <list-characters-loading
      v-if="isLoading"
      :items="6"
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
  </div>
</template>

<script setup lang="ts">
  // import ListCharactersLoading from 'pages/characters/components/ListCharactersLoading.vue'
  // import CharacterCard from 'components/characterCard/CharacterCard.vue'
  import { ICharacter } from '@/types/character'

  withDefaults(defineProps<{
    characters: ICharacter[],
    isLoading?: boolean,
    hideTitle?: boolean
  }>(), {
    hideTitle: false,
  })
</script>
