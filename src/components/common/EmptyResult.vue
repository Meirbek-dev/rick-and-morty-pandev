<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col
        class="text-center"
        cols="12"
        lg="4"
        md="6"
        sm="8"
      >
        <h2 :class="[$vuetify.theme.current.dark ? 'text-grey-lighten-1' : 'text-grey-darken-1', 'text-h4', 'mb-6']">
          {{ title }}
        </h2>
        <v-icon :color="iconColor" :size="iconSize">
          {{ icon }}
        </v-icon>
        <p v-if="description" class="mt-4 text-body-1">{{ description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: 'Empty Data',
    },
    icon: {
      type: String,
      default: 'mdi-alert-octagram',
    },
    iconColor: {
      type: String,
      default: 'grey',
    },
    iconSize: {
      type: [String, Number],
      default: 150,
    },
    description: {
      type: String,
      default: '',
    },
  })
</script>
