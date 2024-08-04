<template>
  <v-card class="location-card mt-16">
    <v-avatar class="location-card-icon">
      <v-skeleton-loader
        type="avatar"
      />
    </v-avatar>

    <v-card-text class="d-flex flex-column align-center justify-center pb-0">
      <v-skeleton-loader
        height="30"
        type="text"
        width="100%"
      />

      <v-skeleton-loader
        class="mt-2"
        height="30"
        type="text"
        width="100%"
      />
    </v-card-text>

    <v-card-text class="d-flex flex-column align-center justify-center pt-0">
      <div>
        <v-skeleton-loader
          height="22"
          type="chip"
          width="90"
        />
      </div>
      <div class="mt-2">
        <v-skeleton-loader
          size="40"
          type="avatar"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "./style/LocationsCard.scss";
</style>
