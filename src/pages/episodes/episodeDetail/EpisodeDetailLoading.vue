<template>
  <v-container class="episode-detail-content d-flex flex-column justify-end align-center">
    <div class="episode-detail-content-icon">
      <v-skeleton-loader
        size="70"
        type="avatar"
      />
    </div>

    <v-row align="center" class="episode-detail-content-name mt-4" justify="center" no-gutters>
      <v-col class="mr-2" cols="auto">
        <v-skeleton-loader
          height="50"
          type="text"
          width="300"
        />
      </v-col>

      <v-col cols="auto">
        <v-skeleton-loader
          size="45"
          type="avatar"
        />
      </v-col>
    </v-row>

    <div class="episode-detail-content-info">
      <v-row class="gap-5" justify="center" no-gutters>
        <v-col class="d-flex align-center" cols="auto">
          <v-icon size="30">mdi-calendar-range</v-icon>
          <v-skeleton-loader
            class="ml-4"
            height="40"
            type="text"
            width="100"
          />
        </v-col>

        <v-col class="d-flex align-center" cols="auto">
          <v-icon size="30">mdi-playlist-play</v-icon>
          <v-skeleton-loader
            class="ml-4"
            height="40"
            type="text"
            width="100"
          />
        </v-col>
      </v-row>

      <v-row align="center" class="mt-6" justify="center" no-gutters>
        <v-col class="d-flex align-center" cols="auto">
          <v-icon size="30">mdi-account-multiple</v-icon>
          <v-skeleton-loader
            class="ml-4"
            height="40"
            type="text"
            width="300"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.gap-5 {
  gap: 20px;
}
</style>
