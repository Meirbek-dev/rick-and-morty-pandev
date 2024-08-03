<template>
  <v-app-bar app dark dense elevation="4">
    <v-app-bar-nav-icon aria-label="Toggle navigation menu" class="d-sm-none" @click="toggleDrawer" />
    <v-app-bar-title class="mr-4">
      <router-link v-slot="{ navigate }" custom to="/">
        <v-img
          alt="Rick and Morty Logo"
          class="cursor-pointer"
          contain
          height="40"
          max-width="120"
          role="button"
          src="@/assets/logo2.png"
          tabindex="0"
          @click="navigate"
          @keyup.enter="navigate"
        />
      </router-link>
    </v-app-bar-title>
    <v-spacer />
    <v-spacer />
    <nav class="hidden-sm-and-down">
      <v-btn
        v-for="item in navItems"
        :key="item.title"
        class="mx-2"
        text
        :to="item.href"
      >
        {{ item.title }}
      </v-btn>
    </nav>
    <theme-toggler />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list dense nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        link
        :to="item.href"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ThemeToggler from './ThemeToggler.vue'

  const drawer = ref(false)
  const navItems = ref([
    { title: 'Home', href: '/' },
    { title: 'Episodes', href: '/episodes' },
    { title: 'Locations', href: '/locations' },
  ])

  const toggleDrawer = () => {
    drawer.value = !drawer.value
  }
</script>
