<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  isScrolled: boolean
}>()

const isMobileMenuOpen = ref(false)
</script>

<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300"
    :class="
      isScrolled || isMobileMenuOpen
        ? 'border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md'
        : 'border-transparent bg-transparent py-6'
    "
  >
    <div class="container mx-auto flex items-center justify-between px-6">
      <div
        class="relative z-50 flex items-center gap-2.5 text-2xl font-bold tracking-tight"
        :class="isScrolled || isMobileMenuOpen ? 'text-primary-dark' : 'text-white'"
      >
        <img src="/assets/images/logo_cym.png" alt="CYM Logo" class="h-10 w-10 object-contain" />
        <span class="font-heading tracking-tighter uppercase"
          >Christ
          <span class="-mt-1 block text-sm leading-none font-light tracking-widest opacity-60"
            >in You Ministry</span
          ></span
        >
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden items-center gap-10 md:flex">
        <li v-for="item in ['About', 'Community', 'Media', 'Give', 'Contact']" :key="item">
          <a
            :href="`#${item.toLowerCase()}`"
            class="hover:text-primary text-[13px] font-bold tracking-[0.15em] uppercase transition-all"
            :class="isScrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'"
          >
            {{ item }}
          </a>
        </li>
      </ul>

      <div class="hidden items-center gap-6 md:flex">
        <a
          href="#visit"
          class="group bg-primary hover:bg-primary-dark hover:shadow-primary/20 flex items-center gap-2 rounded-xl px-7 py-3 text-[13px] font-bold tracking-widest text-white uppercase transition-all hover:shadow-xl active:scale-95"
        >
          Join Community
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="z-50 focus:outline-none md:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :class="isScrolled || isMobileMenuOpen ? 'text-primary-dark' : 'text-white'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
          v-if="!isMobileMenuOpen"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x"
          v-else
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <!-- Mobile Menu Overlay -->
      <Teleport to="body">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden"
        >
          <ul class="mb-10 flex flex-col items-center gap-8 pt-20">
            <li v-for="item in ['About', 'Community', 'Media', 'Give', 'Contact']" :key="item">
              <a
                :href="`#${item.toLowerCase()}`"
                class="text-primary-dark hover:text-primary text-2xl font-bold tracking-[0.15em] uppercase transition-all"
                @click="isMobileMenuOpen = false"
              >
                {{ item }}
              </a>
            </li>
          </ul>
          <a
            href="#visit"
            class="bg-primary hover:bg-primary-dark shadow-primary/20 flex items-center gap-2 rounded-xl px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-xl transition-all active:scale-95"
            @click="isMobileMenuOpen = false"
          >
            Join Community
          </a>
        </div>
      </Teleport>
    </div>
  </nav>
</template>
