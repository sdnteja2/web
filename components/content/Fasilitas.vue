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
      <h2 class="title">
        FASILITAS
      </h2>
    </div>
    <div class="flex flex-wrap w-full justify-center items-start">
      <div class="w-full md:w-1/2 m ">
        <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' } " class="rounded-lg overflow-hidden" indicators arrows>
          <img :src="item" class="w-full" draggable="false">
        </UCarousel>
      </div>
      <div class="w-full md:w-1/2 md:pl-4 md:pt-0 pt-2">
        <ul class="list-disc pl-4 ">
          <li>
            Ruang Kelas
          </li>
          <li>
            Perpustakaan
          </li>
          <li>
            Laboratorium
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
