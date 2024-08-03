<template>
  <section class="row q-mb-lg">
    <div class="col-12 flex flex-center q-mt-md">
      <q-pagination
        v-model="currentPage"
        boundary-links
        direction-links
        :max="pages"
        :max-pages="maxPages"
        rounded
        @update:model-value="changePage"
      />
    </div>
    <div class="col-12 q-my-lg">
      <slot />
    </div>
    <div class="col-12 flex flex-center q-mt-md">
      <q-pagination
        v-model="currentPage"
        boundary-links
        direction-links
        :max="pages"
        :max-pages="maxPages"
        rounded
        @update:model-value="changePage"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const queryPage = Number(router.currentRoute.value.query.page)
  const currentPage = ref<number>(1)

  const emit = defineEmits<{(e: 'change:page', page: number): void;}>()

  const props = defineProps<{
    pages: number
    maxPages: number,
    page?: number
  }>()

  const pageProp = computed(() => (
    props.page
  ))

  watch(pageProp, newPageProp => {
    currentPage.value = Number(newPageProp)
    changePage()
  })

  watch(router.currentRoute, (route, oldRoute) => {
    if (
      route.query.page !== oldRoute.query.page &&
      (
        route.name === '/' ||
        route.name === '/locations' ||
        route.name === '/episodes'
      )
    ) {
      currentPage.value = parseInt(route.query.page as string)
      changePage()
    }
  })

  const changePage = (): void => {
    emit('change:page', currentPage.value)
  }

  onMounted((): void => {
    if (queryPage) {
      currentPage.value = queryPage
    }
  })
</script>
