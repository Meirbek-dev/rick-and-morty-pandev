<template>
  <v-container class="location-detail d-flex flex-column align-center fill-height">
    <div class="episode-detail-icon">
      <v-skeleton-loader
        class="location-card-icon"
        size="80"
        type="avatar"
      />
    </div>

    <div class="episode-detail-name mt-6">
      <v-row align="center" justify="center" no-gutters>
        <v-skeleton-loader
          height="40"
          type="text"
          width="200"
        />
        <v-skeleton-loader
          class="ml-4"
          size="45"
          type="avatar"
        />
      </v-row>

      <v-row align="center" class="my-2" justify="center" no-wrap>
        <v-icon size="20">mdi-calendar-range</v-icon>
        <v-skeleton-loader
          class="ml-4"
          height="40"
          type="text"
          width="250"
        />
      </v-row>
    </div>

    <div class="episode-detail-info mt-2">
      <v-row class="gap-5" justify="center">
        <v-col class="d-flex align-center" cols="auto">
          <v-icon size="40">
            <v-img alt="location-img" src="../../../assets/icons/planet.webp" />
          </v-icon>
          <v-skeleton-loader
            class="ml-4"
            height="40"
            type="text"
            width="120"
          />
        </v-col>

        <v-col class="d-flex align-center" cols="auto">
          <v-icon size="50">
            <v-img alt="location-img" src="../../../assets/icons/galaxy.webp" />
          </v-icon>
          <v-skeleton-loader
            class="ml-4"
            height="40"
            type="text"
            width="120"
          />
        </v-col>
      </v-row>

      <v-row align="center" class="mt-4" justify="center" no-wrap>
        <v-icon size="30">mdi-account-multiple</v-icon>
        <v-skeleton-loader
          class="ml-4"
          height="40"
          type="text"
          width="220"
        />
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
@import '@/styles/app.scss'
</style>
