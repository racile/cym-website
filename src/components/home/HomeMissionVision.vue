<script setup lang="ts">
// No props needed for now
</script>

<template>
  <section id="mission-vision" class="relative overflow-hidden bg-white py-24 md:py-32">
    <!-- Background Accents -->
    <div class="bg-primary/5 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl"></div>
    <div class="bg-accent/5 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl"></div>

    <div class="relative container mx-auto px-6">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <!-- Mission Section -->
        <div class="relative">
          <div class="mb-8 inline-flex items-center gap-3">
            <div
              class="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-target"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <span class="text-primary text-xs font-black tracking-[0.2em] uppercase"
              >Our Mission</span
            >
          </div>
          <h2 class="text-primary-dark mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            To honor God by being committed to
            <span class="text-primary">evangelizing and discipling</span> individuals for His glory.
          </h2>
          <div class="mt-10 flex flex-wrap gap-4">
            <div
              class="flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700"
            >
              <span class="bg-primary h-2 w-2 rounded-full"></span>
              Evangelism
            </div>
            <div
              class="flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700"
            >
              <span class="bg-primary h-2 w-2 rounded-full"></span>
              Discipleship
            </div>
            <div
              class="flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700"
            >
              <span class="bg-primary h-2 w-2 rounded-full"></span>
              God's Glory
            </div>
          </div>
        </div>

        <!-- Vision Section -->
        <div class="group bg-primary-dark relative rounded-[2.5rem] p-8 md:p-12">
          <div class="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div
              class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10"
            ></div>
          </div>

          <div class="relative z-10">
            <div class="mb-8 inline-flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span class="text-xs font-black tracking-[0.2em] text-white/60 uppercase"
                >Our Vision</span
              >
            </div>
            <h2 class="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Vision
            </h2>
            <div class="space-y-6">
              <div
                v-for="(v, i) in [
                  'To reflect a Christ-like character.',
                  'To serve the community passionately.',
                  'To be committed to transforming lives through God\'s Word.',
                  'To impact humanity with the love and truth of Jesus Christ.',
                ]"
                :key="i"
                class="flex gap-4"
              >
                <div
                  class="bg-primary/20 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                >
                  {{ i + 1 }}
                </div>
                <p class="text-lg leading-relaxed text-slate-300">
                  {{ v }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Any additional specific styles if needed */
</style>
