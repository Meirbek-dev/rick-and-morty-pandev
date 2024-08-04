<template>
  <v-card class="episode-card">
    <v-card-text class="pb-0">
      <v-row align="center" no-gutters>
        <v-icon color="error" size="24">mdi-television-play</v-icon>
        <v-skeleton-loader
          class="ml-2"
          height="30"
          type="text"
          width="150"
        />
      </v-row>
    </v-card-text>
    <v-card-text class="pb-0 d-flex justify-space-between align-center">
      <v-skeleton-loader
        height="20"
        type="chip"
        width="80"
      />
      <v-skeleton-loader
        size="30"
        type="avatar"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "./style/EpisodesCard.scss";
</style>
