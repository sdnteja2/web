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
        <ContentList
          v-slot="{ list }" path="/guru/"
        >
          <UCard v-for="guru in list" :key="guru._path" data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="flex  flex-col p-2 w-full ">
            <div class="flex items-center gap-x-4">
              <NuxtImg class="rounded-full bg-top bg-cover object-cover w-20 h-20" :src="guru.foto" alt="Image Description" />
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
            <div class="w-full flex justify-end items-center">
              <UButton square>
                i
              </UButton>
              <!-- <a class="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a> -->
            </div>
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
