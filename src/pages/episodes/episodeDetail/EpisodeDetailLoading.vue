<template>
  <div class="episode-detail-content column justify-end content-center items-center">
    <div class="episode-detail-content-icon">
      <q-skeleton
        size="70px"
        type="QAvatar"
      />
    </div>

    <div class="episode-detail-content-name flex items-center justify-center gap-10 q-mt-md">
      <div>
        <q-skeleton
          height="50px"
          type="text"
          width="300px"
        />
      </div>

      <div>
        <q-skeleton
          size="45px"
          type="QAvatar"
        />
      </div>
    </div>

    <div class="episode-detail-content-info">
      <div class="flex gap-20 justify-center">
        <div class="flex items-center no-wrap">
          <q-icon name="mdi-calendar-range" size="30px" />

          <q-skeleton
            class="q-ml-md"
            height="40px"
            type="text"
            width="100px"
          />
        </div>

        <div class="flex items-center no-wrap">
          <q-icon name="mdi-playlist-play" size="30px" />

          <q-skeleton
            class="q-ml-md"
            height="40px"
            type="text"
            width="100px"
          />
        </div>
      </div>

      <div class="flex items-center no-wrap q-mt-lg justify-center">
        <q-icon name="mdi-account-multiple" size="30px" />

        <q-skeleton
          class="q-ml-md"
          height="40px"
          type="text"
          width="300px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>
