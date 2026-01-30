<script setup lang="ts">
defineProps<{
  communities: Array<{
    title: string
    description: string
    icon: string
    count: string
  }>
}>()
</script>

<template>
  <section id="community" class="bg-slate-50 py-32">
    <div class="container mx-auto px-6">
      <div class="mb-20 text-center">
        <div class="text-primary mb-4 text-xs font-black tracking-[0.3em] uppercase">
          Engage & Grow
        </div>
        <h2 class="text-primary-dark mb-6 text-5xl font-bold tracking-tight">
          Communities within CYM.
        </h2>
        <p class="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-500">
          Faith is not meant to be lived alone. Our diverse communities provide spaces for
          connection, growth, and service tailored to your journey.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="c in communities"
          :key="c.title"
          class="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
        >
          <div>
            <div
              class="group-hover:bg-primary mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all group-hover:rotate-6 group-hover:text-white"
            >
              <svg
                v-if="c.icon === 'users'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <svg
                v-if="c.icon === 'music'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-music"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <svg
                v-if="c.icon === 'globe'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20" />
                <path d="M2 12h20" />
                <path d="M12 2a14.5 14.5 0 0 1 0 20" />
              </svg>
              <svg
                v-if="c.icon === 'star'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>
            <h3 class="text-primary-dark mb-4 text-xl font-bold tracking-tight">{{ c.title }}</h3>
            <p class="text-[15px] leading-relaxed font-medium text-slate-500">
              {{ c.description }}
            </p>
          </div>
          <div class="mt-10 flex items-center justify-between">
            <span class="text-[11px] font-black tracking-widest text-slate-300 uppercase">{{
              c.count
            }}</span>
            <button
              class="group-hover:bg-primary-dark flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors group-hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
