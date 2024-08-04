<template>
  <div
    v-for="item in items"
    :key="item"
    class="col-6 col-sm-6 col-md-4 col-lg-3 q-pa-sm"
  >
    <character-card-loading />
  </div>
</template>

<script lang="ts" setup>
  import CharacterCardLoading from '@/components/characters/CharacterCardLoading.vue'
  withDefaults(defineProps<{
    items: number
  }>(), {
    items: 20,
  })
</script>

<style scoped>

</style>
