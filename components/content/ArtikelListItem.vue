<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Article {
  _path: string
  title: string
  date: string
  description: string

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
    v-if="article._path && article.title"
    :class="{ featured }"
    :data-content-id="id"
  >
    <div v-if="article.cover" class="image">
      <!-- <div v-if="article?.badges">
        <span
          v-for="(badge, index) in article.badges"
          :key="index"
          :style="{
            backgroundColor: badge?.bg || 'rgba(0, 0, 0, 0.3)',
            color: badge?.color || 'white',
          }"
        >
          {{ typeof badge === 'string' ? badge : badge.content }}
        </span>
      </div> -->
      <NuxtLink :to="article._path">
        <NuxtImg
          :src="article.cover"
          :alt="article.title"
          width="16"
          height="9"
        />
      </NuxtLink>
    </div>

    <div class="content">
      <NuxtLink
        :to="article._path"
        class="headline"
      >
        <h1>
          {{ article.title }}
        </h1>
      </NuxtLink>

      <p class="description">
        {{ article.description }}
      </p>
      <!-- <time>
        {{ formatDate(article.date) }}
      </time> -->
    </div>
  </article>
</template>
