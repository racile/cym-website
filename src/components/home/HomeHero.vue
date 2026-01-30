<script setup lang="ts">
defineProps<{
  recentUpdates: Array<{
    title: string
    author: string
    category: string
    date: string
  }>
}>()
</script>

<template>
  <header class="bg-primary-dark relative flex overflow-x-hidden lg:min-h-[90vh] lg:items-center">
    <div class="absolute inset-0 opacity-40">
      <img
        src="/assets/images/hero.png"
        alt="Community"
        class="h-full w-full object-cover opacity-60 mix-blend-overlay grayscale"
      />
      <div
        class="from-primary-dark via-primary-dark/80 absolute inset-0 bg-linear-to-tr to-transparent"
      ></div>
    </div>

    <div
      class="relative container mx-auto w-full overflow-hidden px-6 pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
        <div
          class="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div
            class="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5 pr-4 backdrop-blur-xl sm:pr-6 lg:mx-0"
          >
            <div
              class="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-zap"
              >
                <path
                  d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                />
              </svg>
            </div>
            <span
              class="text-[9px] font-bold tracking-widest text-white uppercase opacity-90 sm:text-xs"
              >Experience transformation today</span
            >
          </div>

          <h1
            class="mb-8 text-[22px] leading-[1.2] font-bold text-white uppercase sm:text-5xl md:text-8xl"
          >
            Built on <span class="text-primary italic">Faith</span>.<br />Driven by
            <span class="text-primary">Purpose</span>.
          </h1>

          <p
            class="mb-10 w-full max-w-full text-[13px] leading-relaxed font-medium text-white/60 sm:max-w-xl sm:text-lg"
          >
            We are a modern community of believers dedicated to living out the gospel in the heart
            of our community. Join us as we grow, serve, and transform together.
          </p>

          <div class="flex w-full max-w-[260px] flex-col gap-4 sm:max-w-none sm:flex-row sm:gap-5">
            <a
              href="#visit"
              class="bg-primary hover:text-primary-dark shadow-primary/20 flex items-center justify-center gap-3 rounded-2xl px-10 py-5 text-sm font-bold tracking-widest text-white uppercase shadow-2xl transition-all hover:-translate-y-1 hover:bg-white active:scale-95"
            >
              Join Us This Sunday
            </a>
            <a
              href="#about"
              class="group flex items-center justify-center gap-3 rounded-2xl border-2 border-white/10 bg-white/5 px-10 py-5 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              Our Story
            </a>
          </div>

          <div class="mt-20 flex items-center gap-10 opacity-40 contrast-125 grayscale">
            <span class="text-xs font-bold tracking-[0.3em] text-white uppercase"
              >Trusted Partner Of</span
            >
            <div class="flex gap-8">
              <div class="h-8 w-24 rounded bg-white/20"></div>
              <div class="h-8 w-24 rounded bg-white/20"></div>
              <div class="h-8 w-24 rounded bg-white/20"></div>
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div
            class="bg-primary/20 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-[120px]"
          ></div>
          <div
            class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl"
          >
            <img
              src="/assets/images/worship.png"
              alt="Community gathering"
              class="rounded-3xl shadow-2xl"
            />
            <div class="mt-8 space-y-6 p-6">
              <div
                v-for="update in recentUpdates"
                :key="update.title"
                class="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <div class="text-primary mb-1 text-[11px] font-black tracking-widest uppercase">
                    {{ update.category }}
                  </div>
                  <div class="font-bold text-white">{{ update.title }}</div>
                </div>
                <div class="text-right">
                  <div class="text-xs font-bold text-white/40">{{ update.date }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Social Proof Floating -->
          <div class="absolute bottom-20 -left-12 rounded-2xl bg-white p-6 shadow-2xl">
            <div class="mb-3 flex -space-x-3">
              <div
                v-for="i in 4"
                :key="i"
                class="h-10 w-10 rounded-full border-4 border-white bg-slate-200"
              ></div>
              <div
                class="bg-primary flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-[10px] font-bold text-white"
              >
                +500
              </div>
            </div>
            <div class="text-xs leading-none font-bold tracking-widest text-slate-400 uppercase">
              Growing Community
            </div>
            <div class="text-primary-dark mt-1 font-bold">Active in Ministry</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
