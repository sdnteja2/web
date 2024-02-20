<script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
]
</script>

<template>
  <UContainer class="py-16">
    <div class="w-full text-center pb-8">
      <h2 class="font-title text-lg md:text-3xl font-black ">
        FASILITAS
      </h2>
    </div>
    <div class="flex flex-wrap w-full justify-center items-start">
      <div class="w-full md:w-1/2 ">
        <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' } " class="rounded-lg overflow-hidden" indicators arrows>
          <img :src="item" class="w-full" draggable="false">
        </UCarousel>
      </div>
      <div class="w-full md:w-1/2">
        <ol>
          <li>
            1. Ruang Kelas
          </li>
          <li>
            2. Perpustakaan
          </li>
          <li>
            3. Laboratorium
          </li>
        </ol>
      </div>
    </div>
  </UContainer>
</template>
