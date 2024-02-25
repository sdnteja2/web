<script lang="ts" setup>
const { page } = useContent()
defineOgImageComponent('OgImage', {
  title: page.title,
  description: page.description,

})
</script>

<template>
  <div>
    <ContentDoc />
  </div>
</template>
