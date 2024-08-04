<template>
  <q-card class="location-card q-mt-xl">
    <q-avatar class="location-card-icon">
      <img alt="location-img" :src="icon">
    </q-avatar>

    <q-card-section class="column items-center content-center q-pb-none">
      <p class="q-ma-none text-truncate text-center">
        {{ location.name || '' }}
      </p>

      <p class="text-truncate text-center">
        {{ location.type || location.name || '' }}
      </p>
    </q-card-section>

    <q-card-section class="column flex-center items-center q-pt-none">
      <div>
        <q-btn
          color="primary"
          :disable="location.id === 0"
          icon="mdi-information"
          label="see more"
          outline
          rounded
          size="9px"
          @click="seeMore"
        />
      </div>
    </q-card-section>
  </q-card>
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
