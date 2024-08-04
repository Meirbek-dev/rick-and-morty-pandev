<template>
  <section class="location-detail full-height full-height column items-center">
    <div class="episode-detail-icon">
      <q-skeleton
        class="location-card-icon"
        size="80px"
        type="QAvatar"
      />
    </div>

    <div class="episode-detail-name q-mt-lg">
      <div class="flex justify-center items-center">
        <q-skeleton
          height="40px"
          type="text"
          width="200px"
        />

        <div>
          <q-skeleton
            class="q-ml-md"
            size="45px"
            type="QAvatar"
          />
        </div>
      </div>

      <div class="flex items-center justify-center no-wrap q-mb-sm q-mt-sm">
        <q-icon name="mdi-calendar-range" size="20px" />

        <q-skeleton
          class="q-ml-md"
          height="40px"
          type="text"
          width="250px"
        />
      </div>
    </div>

    <div class="episode-detail-info q-mt-sm">
      <div class="flex gap-20 justify-center">
        <div class="flex items-center no-wrap">
          <q-icon size="40px">
            <img alt="location-img" src="../../../assets/icons/planet.webp">
          </q-icon>

          <q-skeleton
            class="q-ml-md"
            height="40px"
            type="text"
            width="120px"
          />
        </div>

        <div class="flex items-center no-wrap">
          <q-icon size="50px">
            <img alt="location-img" src="../../../assets/icons/galaxy.webp">
          </q-icon>

          <q-skeleton
            class="q-ml-md"
            height="40px"
            type="text"
            width="120px"
          />
        </div>
      </div>

      <div class="flex items-center no-wrap justify-center q-mt-md">
        <q-icon name="mdi-account-multiple" size="30px" />

        <q-skeleton
          class="q-ml-md"
          height="40px"
          type="text"
          width="220px"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
