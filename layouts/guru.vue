<template>
  <div>
    <Navbar />
    <UContainer class="py-20 md:px-10 mx-auto">
      <!-- Title -->
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h1 class="">
          Guru & Staff
        </h1>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          SDN Teja II
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentList v-slot="{ list }" path="/guru/">
          <UCard
            v-for="guru in list" :key="guru._path" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            class=""
          >
            <div class="flex items-center gap-x-4">
              <NuxtImg
                class="rounded-full bg-top bg-cover object-cover w-16 h-16" :src="guru.foto"
                alt="Image Description"
              />
              <div class="grow">
                <h3 class="font-bold  text-merah ">
                  {{ guru.nama }}
                </h3>
                <p class="text-xs ">
                  {{ guru.jabatan }}
                </p>
                <p class="text-xs ">
                  NIP. {{ guru.nip }}
                </p>
              </div>
            </div>

            <p class="italic py-2 text-sm">
              "{{ guru.quotes }}"
            </p>
            <!-- Social Brands -->
            <template #footer>
              <div class="w-full flex justify-end items-center">
                <UButton
                  icon="i-basil-instagram-outline" size="sm" color="primary" variant="ghost" square to="/"
                  target="_blank"
                />
                <UButton
                  icon="i-basil-facebook-solid" size="sm" color="primary" variant="ghost" square to="/"
                  target="_blank"
                />
                <UButton
                  icon="i-basil-gmail-outline" size="sm" color="primary" variant="ghost" square to="/"
                  target="_blank"
                />
              </div>
            </template>
            <!-- End Social Brands -->
          </UCard>
        </contentlist>
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Team -->
    <!-- End Grid -->
    <Footer />
  </div>
</template>
