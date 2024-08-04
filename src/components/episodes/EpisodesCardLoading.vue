<template>
  <q-card class="episode-card">
    <q-card-section class="q-pb-none">
      <div class="flex no-wrap content-center items-center">
        <q-icon color="negative" name="mdi-television-play" size="24px" />

        <q-skeleton
          class="q-ml-sm"
          height="30px"
          type="text"
          width="150px"
        />
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none q-pb-none flex justify-between items-center no-wrap q-pb-sm">
      <div>
        <q-skeleton
          height="20px"
          type="QChip"
          width="80px"
        />
      </div>
      <div>
        <q-skeleton
          size="30px"
          type="QAvatar"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "./style/EpisodesCard.scss";
</style>
