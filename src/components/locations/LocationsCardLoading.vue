<template>
  <q-card class="location-card q-mt-xl">
    <q-avatar class="location-card-icon">
      <q-skeleton
        type="QAvatar"
      />
    </q-avatar>

    <q-card-section class="column items-center content-center q-pb-none">
      <q-skeleton
        height="30px"
        type="text"
        width="100%"
      />

      <q-skeleton
        height="30px"
        type="text"
        width="100%"
      />
    </q-card-section>

    <q-card-section class="column flex-center items-center q-pt-none">
      <div>
        <q-skeleton
          height="22px"
          type="QChip"
          width="90px"
        />
      </div>
      <div class="q-mt-sm">
        <q-skeleton
          size="40px"
          type="QAvatar"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "./style/LocationsCard.scss";
</style>
