<script lang="ts" setup></script>

<template>
  <div>
    <nav>
      <div class="fixed top-0 z-50 w-full">
        <UContainer class="flex justify-between items-center h-16 bg-slate-50 dark:bg-slate-950 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <div class="flex items-center">
            <Logo />
            <p class="font-body ">
              SDN Teja II
            </p>
          </div>
          <div>
            <div class="flex  items-center">
              <ContentNavigation v-slot="{ navigation }">
                <ul>
                  <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">
                      {{ link.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </ContentNavigation>
              <DarkMode />
              <UPopover>
                <UButton
                  color="gray"
                  variant="ghost" trailing-icon="i-solar-hamburger-menu-line-duotone"
                />

                <template #panel>
                  <div class="p-4">
                    <h1>ok</h1>
                  </div>
                </template>
              </UPopover>
            </div>
          </div>
        </UContainer>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
