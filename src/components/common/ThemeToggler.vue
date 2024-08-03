<template>
  <v-btn
    :color="color"
    :icon="icon"
    variant="text"
    @click="toggleTheme"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const isDark = ref(theme.global.current.value.dark)

  const icon = computed(() => isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night')
  const color = computed(() => isDark.value ? 'white' : 'black')

  const toggleTheme = () => {
    isDark.value = !isDark.value
    theme.global.name.value = isDark.value ? 'dark' : 'light'
  }
</script>
