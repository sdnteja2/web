<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'pembelajaran',
  },
})

const { data: _pembelajaran } = await useAsyncData('pembelajaran', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const pembelajarans = computed(() => _pembelajaran.value || [])
</script>

<template>
  <UContainer class="pembelajarans-list">
    <div class="max-w-3xl mx-auto ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="title">
          Berita  SDN Teja II
        </h1>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="mt-1 text-gray-600 dark:text-gray-400">
          Berita yang telah di publikasikan oleh SDN Teja II
        </p>
      </div>
      <!-- End Title -->
    </div>
  </UContainer>
</template>
