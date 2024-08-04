<template>
  <like-component @on-double-click="dblclick">
    <q-card v-if="character?.id" class="character-card full-width">
      <q-card-section class="q-pa-none q-pb-md">
        <q-img height="100%" :src="character.image" width="100%">
          <div
            class="absolute absolute-bottom text-truncate character-name"
            style="max-height: 30px"
          >
            {{ character.name }}
          </div>
        </q-img>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="flex no-wrap items-center">
          <q-icon :color="iconColor" name="mdi-heart-pulse" size="16px" />

          <p class="character-text-info text-truncate">
            {{ character.status }}
          </p>
        </div>
        <div class="flex no-wrap items-center">
          <q-icon color="green-7" name="mdi-alien-outline" size="16px" />

          <p class="character-text-info text-truncate">
            {{ character.species }}
          </p>
        </div>
        <div class="flex no-wrap items-center">
          <q-icon color="deep-orange-8" name="mdi-map-marker-radius" size="16px" />

          <p class="character-text-info text-truncate">
            {{ character?.location?.name }}
          </p>
        </div>
      </q-card-section>
      <q-card-actions class="q-px-md flex justify-between actions">
        <q-btn
          color="primary"
          outline
          rounded
          size="9px"
          @click="seeMore"
        >
          <div class="flex flex-center no-wrap">
            <q-icon class="q-mr-sm" name="mdi-information-outline" />
            <p class="q-mb-none">see more</p>
          </div>
        </q-btn>

        <q-btn
          color="primary"
          dense
          flat
          :icon="isFavoriteIcon"
          round
          @click="toggleFavorite"
        />
      </q-card-actions>
    </q-card>
  </like-component>
</template>

<script lang="ts" setup>
  import { ICharacter, Status } from '@/types/character'
  import { getIconColor } from '@/utils/iconUtils'
  import { useRouter } from 'vue-router'
  import { computed } from 'vue'

  const router = useRouter()
  const currentRoute = router.currentRoute.value
  const props = defineProps<{
    character: ICharacter;
  }>()

  const characterProp = computed<ICharacter>(() => props.character)

  const iconColor = computed<string>(() =>
    getIconColor(characterProp.value.status as Status)
  )

  const seeMore = (): void => {
    const routerQuery =
      currentRoute.name === '/' || currentRoute.hash === '#characterDetail'
        ? currentRoute.query
        : {}

    router.push({
      name: '/',
      hash: '#characterDetail',
      query: {
        page: 1,
        ...routerQuery,
        id: characterProp.value.id,
      },
    })
  }
</script>

<style scoped lang="scss">
@import "./style/CharacterCard.scss";
</style>
