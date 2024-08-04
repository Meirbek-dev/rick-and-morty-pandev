<template>
  <v-card class="location-card mt-16">
    <v-avatar class="location-card-icon">
      <v-img :alt="location.name || 'location-img'" :src="icon" />
    </v-avatar>

    <v-card-text class="d-flex flex-column align-center justify-center pb-0">
      <p class="ma-0 text-truncate text-center">
        {{ location.name || '' }}
      </p>
      <p class="text-truncate text-center">
        {{ location.type || location.name || '' }}
      </p>
    </v-card-text>

    <v-card-text class="d-flex flex-column align-center justify-center pt-0">
      <v-btn
        color="primary"
        :disabled="location.id === 0"
        prepend-icon="mdi-information"
        rounded
        size="small"
        variant="outlined"
        @click="seeMore"
      >
        see more
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { ILocation } from '@/types/location'
  // import iconPlanet from 'assets/icons/planet-earth.webp'
  import { useRouter } from 'vue-router'
  import { computed } from 'vue'

  const router = useRouter()
  const currentRoute = router.currentRoute

  const props = withDefaults(defineProps<{
    location: ILocation;
    icon?: string;
  }>(), {
  // icon: iconPlanet,
  })

  const getLocation = computed<ILocation>(() => (props.location))

  const seeMore = (): void => {
    const routeQuery = (
      currentRoute.value.hash === '#locationDetail' ||
      currentRoute.value.name === '/locations'
        ? currentRoute.value.query
        : {}
    )

    router.push({
      name: '/locations',
      hash: '#locationDetail',
      query: {
        page: 1,
        ...routeQuery,
        id: getLocation.value.id,
      },
    })
  }
</script>

<style scoped lang="scss">
@import "./style/LocationsCard.scss";
</style>
