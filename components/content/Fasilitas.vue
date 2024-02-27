<script setup lang="ts">
import { onMounted, ref } from 'vue'

const items = [
  '/img/fasilitas1.jpg',
  '/img/fasilitas2.jpg',
  '/img/fasilitas3.jpg',
  '/img/fasilitas4.jpg',
  '/img/fasilitas5.jpg',
  '/img/fasilitas6.jpg',
  '/img/fasilitas7.jpg',
  '/img/fasilitas8.jpg',
  '/img/fasilitas9.jpg',
  '/img/fasilitas10.jpg',
  '/img/fasilitas11.jpg',
  '/img/fasilitas12.jpg',
  '/img/fasilitas13.jpg',
  '/img/fasilitas14.jpg',
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
      <div class="w-full md:w-1/2">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"

          arrows
        >
          <NuxtImg
            data-aos="fade-up" data-aos-anchor-placement="top-bottom" :src="item" class="w-full h-48 md:h-72 object-cover rounded-md "
            draggable="false"
            height="480"
            width="720"
            loading="lazy"
            title="fasilitas"
            alt="fasilitas"
          />
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
