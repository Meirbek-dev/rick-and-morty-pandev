<!-- <template>
  <div>
    <locations-card
      :icon="locationIcon"
      :location="character?.locationCharacter"
    />
  </div>
  <div>
    <locations-card
      :location="character?.originCharacter"
    />
  </div>
</template> -->

<script lang="ts" setup>
  // import locationIcon from '../../../assets/icons/location-icon.webp'
  import { ICharacter } from '@/types/character'
  import LocationsCard from '@/components/locations/LocationsCard.vue'

  defineProps<{
    character: ICharacter
  }>()

</script>

<style scoped>

</style>
