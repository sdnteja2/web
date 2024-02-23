<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'artikel',
  },
})

const { data: _articles } = await useAsyncData('artikel', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const articles = computed(() => _articles.value || [])
</script>

<template>
  <UContainer v-if="articles?.length" class="articles-list">
    <div class="max-w-[85rem] ">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="title">
          Artikel  SDN Teja II
        </h1>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          Artikel yang telah di publikasikan oleh SDN Teja II
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3   gap-6"
      >
        <!-- Card -->
        <div class="featured">
          <ArtikelListItem :article="articles[0]" :featured="true" />
        </div>
        <div class="layout">
          <ArtikelListItem v-for="(article, index) in articles.slice(1)" :key="index" :article="article" />
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">creating</ProseA> one in the <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>
