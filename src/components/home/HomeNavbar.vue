<script setup lang="ts">
defineProps<{
  isScrolled: boolean
}>()
</script>

<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300"
    :class="
      isScrolled
        ? 'border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md'
        : 'border-transparent bg-transparent py-6'
    "
  >
    <div class="container mx-auto flex items-center justify-between px-6">
      <div
        class="flex items-center gap-2.5 text-2xl font-bold tracking-tight"
        :class="isScrolled ? 'text-primary-dark' : 'text-white'"
      >
        <img src="/assets/images/logo_cym.png" alt="CYM Logo" class="h-10 w-10 object-contain" />
        <span class="font-heading tracking-tighter uppercase"
          >Christ
          <span class="-mt-1 block text-sm leading-none font-light tracking-widest opacity-60"
            >in You Ministry</span
          ></span
        >
      </div>

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

      <div class="flex items-center gap-6">
        <a
          href="#visit"
          class="group bg-primary hover:bg-primary-dark hover:shadow-primary/20 flex items-center gap-2 rounded-xl px-7 py-3 text-[13px] font-bold tracking-widest text-white uppercase transition-all hover:shadow-xl active:scale-95"
        >
          Join Community
        </a>
      </div>
    </div>
  </nav>
</template>
