<script lang="ts" setup></script>

<template>
  <div>
    <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <UDivider size="lg" class="mb-8">
        <div class="flex items-center justify-center p-3 bg-opacity-20 bg-merah rounded-full">
          <Logo class="w-8 h-8" />
        </div>
      </UDivider>
      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4  gap-6 mb-10">
        <div>
          <h2 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Teknologi Website
          </h2>
          <div class="mt-3 grid space-y-3 text-sm">
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://nuxt.com/"
            >
              Nuxt.js
            </NuxtLink>

            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://vercel.com/"
            >
              Vercel
            </NuxtLink>
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://supabase.com/"
            >
              Supabase
            </NuxtLink>
          </div>
        </div>
        <div>
          <h2 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Kabupaten
          </h2>
          <div class="mt-3 grid space-y-3 text-sm">
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"

              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="http://disdik.majalengkakab.go.id/beranda"
            >
              DISDIK Majalengka
            </NuxtLink>

            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"

              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://sites.google.com/dinas.belajar.id/layanan/home"
            >
              Layanan Disdik
            </NuxtLink>
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"

              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://sites.google.com/dinas.belajar.id/websekolah/home"
            >
              Semua Website Sekolah
            </NuxtLink>
          </div>
        </div>
        <!-- End Col -->
        <div>
          <h2 class="text-xs font-semibold  text-gray-900 uppercase dark:text-gray-100">
            Provinsi
          </h2>
          <div class="mt-3 grid space-y-3 text-sm">
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://disdik.jabarprov.go.id/"
            >
              DISDIK Jawa Barat
            </NuxtLink>

            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://disdik.jabarprov.go.id/informasi/berita"
            >
              Berita Disdik Jabar
            </NuxtLink>
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://disdik.jabarprov.go.id/sapa-disdik/konten-digital"
            >
              Konten Digital
            </NuxtLink>
          </div>
        </div>
        <!-- End Col -->
        <div>
          <h2 class="text-xs font-semibold  text-gray-900 uppercase dark:text-gray-100">
            Nasional
          </h2>
          <div class="mt-3 grid space-y-3 text-sm">
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://www.kemdikbud.go.id/"
            >
              KEMDIKBUD
            </NuxtLink>

            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://dapo.kemdikbud.go.id/"
            >
              DAPODIK
            </NuxtLink>
            <NuxtLink
              target="_blank"
              rel="noopener noreferrer"
              title="External Link"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="https://buku.kemdikbud.go.id/"
            >
              BUKU DIGITAL
            </NuxtLink>
          </div>
        </div>
        <!-- End Col -->

        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div class="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div class="sm:flex  sm:justify-between sm:items-center">
          <div class="flex items-center justify-center gap-x-3">
            <div class="mt-3 flex flex-col justify-center ">
              <NuxtLinks class="flex-none text-xl font-semibold dark:text-white" to="/" aria-label="Brand">
                SDN Teja II
              </NuxtLinks>
            </div>
          </div>
          <div class="justify-center flex py-2">
            <p class="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              ©2024 - <span> <UTooltip arrow text="Develover Website" :popper="{ placement: 'top', arrow: true }"><NuxtLink to="https://permadi.dev/" target="_blank">narr07</NuxtLink> </UTooltip> </span>
            </p>
          </div>
          <div class="flex justify-center">
            <div class="flex justify-between items-center">
              <!-- Social Brands -->
              <div class="space-x-2">
                <UTooltip arrow text="Github SDN TEJA II" :popper="{ placement: 'top', arrow: true }">
                  <UButton
                    icon="i-ph-github-logo-duotone"
                    size="sm"
                    color="gray"
                    square
                    variant="ghost"
                    to="https://github.com/sdnteja2"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github SDN TEJA II"
                    aria-label="Github SDN TEJA II"
                    alt="Github SDN TEJA II"
                  />
                </UTooltip>
                <UTooltip arrow text="Email SDN TEJA II" :popper="{ placement: 'top', arrow: true }">
                  <UButton
                    icon="i-ph-envelope-simple-duotone"
                    size="sm"
                    color="gray"
                    square
                    variant="ghost"
                    to="mailto:sdnteja2@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email SDN TEJA II"
                    aria-label="Email SDN TEJA II"
                    alt="Email SDN TEJA II"
                  />
                </UTooltip>
                <UTooltip arrow text="Instagram SDN TEJA II" :popper="{ placement: 'top', arrow: true }">
                  <UButton
                    icon="i-ph-instagram-logo-duotone"
                    size="sm"
                    color="gray"
                    square
                    variant="ghost"
                    to="https://www.instagram.com/sdnteja2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram SDN TEJA II"
                    aria-label="Instagram SDN TEJA II"
                    alt="Instagram SDN TEJA II"
                  />
                </UTooltip>
              </div>
            <!-- End Social Brands -->
            </div>
          </div>
        <!-- End Col -->
        </div>
      </div>
    </footer>
  </div>
</template>
