<script setup>
defineProps({
  nama: {
    type: String,
    default: 'Yusup, S.Pd.',
  },
  jabatan: {
    type: String,
    default: 'Kepala Sekolah',
  },
  ucapan: {
    type: String,
    default: 'Kehadiran website sekolah ini merupakan salah satu upaya kita untuk meningkatkan layanan informasi dan komunikasi sekolah kepada seluruh stakeholders, termasuk siswa, guru, karyawan, orang tua siswa, alumni, dan masyarakat umum.',
  },
  foto: {
    type: String,
    default: '/img/dal.png',
  },
})
</script>

<template>
  <div>
    <!-- Testimonials -->
    <UContainer class=" px-4 py-10 sm:px-16  lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2  md:justify-center md:items-center">
        <div class="hidden  md:flex md:justify-center  mb-24 md:mb-0 sm:px-6">
          <div class="relative justify-center">
            <img class="rounded-md h-[450px]" :src="foto" alt="Image Description">
          </div>
        </div>
        <!-- End Col -->

        <div>
          <!-- Blockquote -->
          <blockquote class="relative">
            <div class="relative z-10">
              <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                SELAYANG PANDANG
              </p>

              <p class=" font-medium italic text-gray-800 md:text-2xl  dark:text-gray-400">
                {{ ucapan }}
              </p>
            </div>

            <footer class="mt-6">
              <div class="flex items-center">
                <div class="md:hidden flex-shrink-0">
                  <img class="h-12 w-12 rounded-full" :src="foto" alt="Image Description">
                </div>
                <div class="ms-4 md:ms-0">
                  <div class="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {{ nama }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{ jabatan }}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
          <!-- End Blockquote -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </UContainer>
    <!-- End Testimonials -->
  </div>
</template>

<style scoped></style>
