<script setup>
// List of articles
const tags = await queryContent(['berita', 'artikel']).find()
</script>

<template>
  <UContainer class="py 20">
    <div class="py-4 md:py-8">
      <div>
        <h1>Tags</h1>
        <pre>{{ tags }}</pre>
      </div>
    </div>
  </UContainer>
</template>
