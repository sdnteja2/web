<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Galeri {
  _path: string
  title: string
  description: string

}

const props = defineProps({
  galeri: {
    type: Object,
    required: true,
    validator: (value: Galeri) => {
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
  return (process.dev || useContentPreview()?.isEnabled()) ? props.galeri?._id : undefined
})
</script>

<template>
  <article
    v-if="galeri._path && galeri.title" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    :data-content-id="id"
    class="h-full"
  >
    <UCard
      :ui="{
        footer: {
          padding: 'px-2 py-2 sm:px-4',
        },
        header: {
          padding: 'px-2 py-2 sm:px-4',
        },
      }"
      class="h-full"
    >
      <div class="aspect-square ">
        <NuxtImg
          v-if="galeri.image"
          class=" object-cover rounded-md"
          :src="galeri.image"
          :alt="galeri.title"
          width="500"
          height="500"
        />
      </div>
      <h2 class="capitalize">
        {{ galeri.title }}
      </h2>
      <template #footer>
        <div>
          <p>{{ galeri.description }}</p>
        </div>
      </template>
    </UCard>
    <UModal>
      <template #trigger>
        <UButton
          icon="i-basil-image-outline" size="sm" color="primary" variant="ghost" square
        />
      </template>
      <template #default>
        <div class="aspect-square ">
          <NuxtImg
            v-if="galeri.image"
            class=" object-cover rounded-md"
            :src="galeri.image"
            :alt="galeri.title"
            width="500"
            height="500"
          />
        </div>
      </template>
    </UModal>
  </article>
</template>
