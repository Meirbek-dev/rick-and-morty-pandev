<template>
  <div>
    <v-alert
      v-if="characterStore.alertVisible"
      dismissible
      :text="characterStore.alertText"
      :title="characterStore.alertTitle"
      :type="characterStore.alertType"
      @dismissed="characterStore.hideAlert"
    />
  </div>
</template>

<script setup lang="ts">
  import { useCharacterStore } from '@/stores/charactersStore'

  const characterStore = useCharacterStore()
</script>
