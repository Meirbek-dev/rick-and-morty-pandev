<template>
  <v-footer app class="px-2" height="auto">
    <v-row align="center" justify="space-between" no-gutters>
      <v-col cols="auto">
        <v-btn
          v-for="item in socialItems"
          :key="item.title"
          :aria-label="item.title"
          class="mr-2"
          :href="item.href"
          icon
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon :icon="item.icon" />
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <div class="text-caption text-disabled text-right pr-4">
          <span class="d-none d-sm-inline">by Meirbek-dev - </span>{{ currentYear }}
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const socialItems = [
    {
      title: 'GitHub Repository',
      icon: 'mdi-github',
      href: 'https://github.com/Meirbek-dev',
    },
  ]

  const currentYear = ref(new Date().getFullYear())

  onMounted(() => {
    currentYear.value = new Date().getFullYear()
  })
</script>
