<template>
  <div class="row q-mt-md">
    <div class="q-mr-md flex no-wrap items-center">
      <q-icon
        :color="iconColor"
        name="mdi-heart-pulse"
        size="24px"
      />

      <p class="q-mb-none q-ml-sm">
        {{ character?.status || '' }}
      </p>
    </div>

    <div class="q-mr-md flex no-wrap items-center">
      <q-icon
        color="light-green-6"
        name="mdi-alien-outline"
        size="24px"
      />

      <p class="q-mb-none q-ml-sm">
        {{ character?.species || '' }}
      </p>
    </div>

    <div class="q-mr-md flex no-wrap items-center">
      <q-icon
        :color="genderIcon.color"
        :name="genderIcon.icon"
        size="24px"
      />

      <p class="q-mb-none q-ml-sm">
        {{ character?.gender || '' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { getGenderIcon, getIconColor } from '@/utils/iconUtils'
  import { Gender, ICharacter, Status } from '@/types/character'
  import { computed } from 'vue'

  type IGenderIcon = {
    icon: string;
    color: string;
  }

  const props = defineProps<{
    character: ICharacter
  }>()

  const genderIcon = computed<IGenderIcon>(() => (
    getGenderIcon(props.character.gender as Gender || '')
  ))

  const iconColor = computed<string>(() => (
    getIconColor(props.character.status as Status || '')
  ))
</script>

<style scoped>

</style>
