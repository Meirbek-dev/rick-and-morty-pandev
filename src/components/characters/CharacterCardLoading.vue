<template>
  <q-card class="character-card">
    <q-card-section class="q-pa-none q-pb-md">
      <q-skeleton
        class="skeleton-img"
        height="220px"
        square
        width="100%"
      />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="flex no-wrap items-center">
        <q-skeleton
          size="20px"
          type="QAvatar"
        />

        <q-skeleton
          class="q-ml-sm"
          type="text"
          width="60px"
        />
      </div>
      <div class="flex no-wrap items-center q-mt-sm">
        <q-skeleton
          size="20px"
          type="QAvatar"
        />

        <q-skeleton
          class="q-ml-sm"
          type="text"
          width="60px"
        />
      </div>
      <div class="flex no-wrap items-center q-mt-sm">
        <q-skeleton
          size="20px"
          type="QAvatar"
        />

        <q-skeleton
          class="q-ml-sm"
          type="text"
          width="60px"
        />
      </div>
    </q-card-section>
    <q-card-actions align="between" class="q-px-md flex justify-between">
      <q-skeleton
        height="25px"
        type="QChip"
        width="75px"
      />

      <q-skeleton
        size="27px"
        type="QAvatar"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "./style/CharacterCard.scss";
</style>
