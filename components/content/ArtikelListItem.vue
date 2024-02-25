<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Article {
  _path: string
  title: string
  date: string
  description: string
  cover: string
  image: string

}

const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
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
  return (process.dev || useContentPreview()?.isEnabled()) ? props.article?._id : undefined
})
</script>

<template>
  <article
    v-if="article._path && article.title" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    :data-content-id="id"
    class="h-full"
  >
    <UCard class="h-full">
      <NuxtLink :to="article._path">
        <div class="aspect-w-16 aspect-h-9">
          <NuxtImg class="w-full object-cover rounded-lg" :src="article.image" :alt="article.title" />
        </div>
        <div class="w-full  justify-end flex my-4">
          <UBadge size="xs" class="">
            <time>
              {{ formatDate(article.date) }}
            </time>
          </UBadge>
        </div>
        <div class="mb-2">
          <h2 class="font-semibold font-body leading-tight text-gray-800 dark:text-gray-300 ">
            {{ article.title }}
          </h2>
        </div>
      </NuxtLink>
      <template #footer>
        <div class="flex flex-row space-x-2">
          <UBadge v-for="(tag, n) in article.tags" :key="n" size="xs" class="uppercase">
            {{ tag }}
          </UBadge>
        </div>
      </template>
    </UCard>
  </article>
</template>
