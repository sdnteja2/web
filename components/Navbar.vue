<script setup>
// Remove the unused import statement for ref

function togglePopover(open, close) {
  if (open)
    close()
}
</script>

<template>
  <nav>
    <header
      class="shadow-sm fixed z-50 top-0 w-full dark:backdrop-blur-md dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md bg-slate-50 dark:bg-slate-950"
    >
      <UContainer class="container flex justify-between h-14 mx-auto">
        <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-2"> <Logo />
          SDN Teja II
        </a>

        <div class="flex items-center">
          <div class="hidden md:block">
            <ContentNavigation v-slot="{ navigation }">
              <ul class="flex space-x-2">
                <li v-for="link of navigation" :key="link._path">
                  <NuxtLink class="w-full flex  px-2 py-1" :to="link._path">
                    <span class="underline-fx" /> {{ link.title }}
                  </NuxtLink>
                </li>
              </ul>
              <div />
            </ContentNavigation>
          </div>
          <div class="flex justify-end">
            <DarkMode />
          </div>
          <div class="md:hidden overflow-auto">
            <UPopover :popper="{ placement: 'top-end' }">
              <UButton variant="ghost" trailing-icon="i-solar-menu-dots-bold" />
              <template #panel="{ open, close }">
                <div
                  class="p-4 dark:backdrop-blur-md dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md bg-slate-50 dark:bg-slate-950"
                >
                  <ContentNavigation v-slot="{ navigation }">
                    <ul class="flex flex-col  ">
                      <li v-for="link of navigation" :key="link._path">
                        <NuxtLink
                          class=" flex my-1 px-2 py-1" :to="link._path"
                          @click="togglePopover(open, close)"
                        >
                          <span class="underline-fx" /> {{ link.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </ContentNavigation>
                </div>
              </template>
            </UPopover>
          </div>
        </div>
      </UContainer>
    </header>
  </nav>
</template>

<style scoped>
a.router-link-active {
  color: #e53e3e;
}

nav ul a {
  position: relative;
  .underline-fx {
    position: absolute;
    bottom: -1px;
    width: 0;
    height: 1px;
    background-color: #e53e3e;
    transition: width 200ms ease-in-out;
  }

  &:hover .underline-fx {
    width: 75%;
  }
}
</style>
