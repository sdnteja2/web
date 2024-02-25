<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Berita {
  _path: string
  title: string
  date: string
  description: string
  cover: string
  image: string

}

const props = defineProps({
  berita: {
    type: Object,
    required: true,
    validator: (value: Berita) => {
      if (value?._path && value.title)
        return true
      return false
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const id = computed(() => {
  return (process.dev || useContentPreview()?.isEnabled()) ? props.berita?._id : undefined
})
</script>

<template>
  <article
    v-if="berita._path && berita.title" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    :data-content-id="id"
    class="h-full"
  >
    <NuxtLink :to="berita._path">
      <UCard class="h-full">
        <div class="mb-2">
          <h2 class="font-bold text-xl  font-body leading-tight text-gray-800 dark:text-gray-300 ">
            {{ berita.title }}
          </h2>
        </div>

        <template #footer>
          <div class="w-full  justify-end flex ">
            <UBadge size="xs" class="">
              <time>
                {{ formatDate(berita.date) }}
              </time>
            </UBadge>
          </div>
        </template>
      </UCard>
    </NuxtLink>
  </article>
</template>
