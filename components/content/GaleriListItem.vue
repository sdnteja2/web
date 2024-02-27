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
const isOpen = ref(false)
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
      <div class="aspect-square " @click="isOpen = true">
        <NuxtImg
          v-if="galeri.image"
          class=" object-cover rounded-md"
          :src="galeri.image"
          :alt="galeri.title"
          :title="galeri.title"
          loading="lazy"
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
    <UModal v-model="isOpen">
      <UCard
        :ui="
          {
            header: {
              padding: 'px-2 py-1 sm:px-4',
            },
            footer: {
              padding: 'px-2 py-2 sm:px-4',
            },
          }
        "
      >
        <template #header>
          <div class="w-full  flex justify-end">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <USkeleton class="aspect-w-16 aspect-h-9" :ui="{ rounded: 'rounded-md' }" />
        <NuxtImg
          class=" object-cover rounded-md aspect-video"
          :src="galeri.image"
          :alt="galeri.title"
        />
        <template #footer>
          <p class="">
            {{ galeri.title }}
          </p>
        </template>
      </UCard>
    </UModal>
  </article>
</template>
