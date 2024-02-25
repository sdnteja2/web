<script setup>
const { page } = useContent()
</script>

<template>
  <div>
    <Navbar />
    <UContainer class="py-20 mx-auto max-w-xl">
      <UBreadcrumb
        class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg bg-white dark:bg-gray-900  inset-x-0 text-center z-30"
        divider=">"
        :links="[{ label: 'Home', to: '/' }, { label: 'Guru', to: '/guru' }]"
      />
      <UCard>
        <div class="flex flex-col  space-y-2">
          <h1 class="title">
            {{ page.title }}
          </h1>

          <div class="mx-auto aspect-square">
            <NuxtImg
              class="rounded-lg w-64 h-64 object-cover"
              :src="page.foto"
              :alt="page.title"
              width="500"
              height="500"
            />
          </div>
        </div>
        <!-- <div class="prose prose-red dark:prose-invert prose-sm">
          <slot />
        </div> -->
      </UCard>
    </UContainer>
    <Footer />
  </div>
</template>
