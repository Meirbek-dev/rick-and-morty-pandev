<template>
  <section class="character-detail row content-center full-height q-mt-lg">
    <div class="col-12 col-sm-4 col-md-4 q-pa-md flex justify-center">
      <q-skeleton
        height="100%"
        square
        style="min-height: 380px"
        width="400px"
      />
    </div>

    <div class="character-detail-info col-12 col-sm-8 col-md-8 q-pa-md">
      <div class="flex items-center justify-text">
        <div class="character-name flex no-wrap items-center">
          <q-skeleton height="50px" type="text" width="250px" />

          <q-skeleton class="q-ml-md" type="QAvatar" />
        </div>
      </div>

      <div class="flex no-wrap items-center">
        <q-icon name="mdi-calendar-range" size="20px" />

        <q-skeleton
          class="q-ml-sm"
          height="50px"
          type="text"
          width="200px"
        />
      </div>

      <div class="flex no-wrap items-center">
        <q-icon color="negative" name="mdi-television-play" size="24px" />

        <q-skeleton
          class="q-ml-sm"
          height="50px"
          type="text"
          width="200px"
        />
      </div>

      <div class="row ">
        <div class="q-mr-md flex no-wrap items-center">
          <q-skeleton
            size="26px"
            type="QAvatar"
          />

          <q-skeleton
            class="q-ml-sm"
            height="35px"
            type="text"
            width="50px"
          />
        </div>

        <div class="q-mr-md flex no-wrap items-center">
          <q-skeleton
            size="26px"
            type="QAvatar"
          />

          <q-skeleton
            class="q-ml-sm"
            height="35px"
            type="text"
            width="50px"
          />
        </div>

        <div class="q-mr-md flex no-wrap items-center">
          <q-skeleton
            size="26px"
            type="QAvatar"
          />

          <q-skeleton
            class="q-ml-sm"
            height="35px"
            type="text"
            width="50px"
          />
        </div>
      </div>

      <div class="character-detail-info-locations row no-wrap gap-20">
        <div>
          <locations-card-loading />
        </div>
        <div>
          <locations-card-loading />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import LocationsCardLoading from '@/components/locations/LocationsCardLoading.vue'
</script>

<style scoped lang="scss">
@import '../style/CharacterDetail.scss'
</style>
