<script setup lang="ts">
import { onMounted, ref } from 'vue'

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages)
      return carouselRef.value.select(0)

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UContainer class="py-16">
    <div class="w-full text-center pb-8">
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
        FASILITAS
      </h2>
    </div>
    <div class="flex flex-wrap w-full justify-center items-start">
      <div class="w-full md:w-1/2 m ">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"
          indicators
        >
          <NuxtImg data-aos="fade-up" data-aos-anchor-placement="top-bottom" :src="item" class="w-full" draggable="false" />
        </UCarousel>
      </div>
      <div class="w-full md:w-1/2 md:pl-4 md:pt-0 pt-2">
        <ul data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="list-disc pl-4 ">
          <li>
            Taman Baca
          </li>
          <li>
            Perpustakaan
          </li>
          <li>
            Laboratorium Komputer
          </li>
          <li>
            UKS
          </li>
          <li>
            Lapangan Olahraga
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
