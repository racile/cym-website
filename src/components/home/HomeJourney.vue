<template>
  <section id="about" class="overflow-hidden py-32">
    <div class="container mx-auto px-6">
      <div class="grid gap-20 lg:grid-cols-2 lg:items-center">
        <div class="relative">
          <div class="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl"></div>
          <img
            src="/assets/images/community.png"
            alt="Transformation"
            class="rounded-[3rem] shadow-2xl grayscale"
          />
          <div
            class="bg-primary-dark absolute -right-10 -bottom-10 max-w-sm rounded-[2rem] p-12 text-white shadow-2xl"
          >
            <div class="bg-primary mb-6 h-1 w-20"></div>
            <p class="text-xl leading-relaxed font-medium italic opacity-90">
              "Coming to CYM was the first time I felt like my faith actually connected with my
              everyday life. It's more than a church—it's home."
            </p>
            <div class="mt-8 flex items-center gap-4">
              <div class="h-12 w-12 rounded-full bg-slate-800"></div>
              <div>
                <div class="font-bold">David Chen</div>
                <div class="text-xs font-bold tracking-widest text-white/40 uppercase">
                  Community Member
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-10">
          <div class="text-primary text-xs font-black tracking-[0.3em] uppercase">Our Journey</div>
          <h2 class="text-primary-dark text-5xl leading-tight font-bold tracking-tight">
            Faith that meets the modern world.
          </h2>
          <div class="space-y-6">
            <div
              v-for="point in [
                {
                  t: 'Authentic Connection',
                  d: 'No perfect people allowed. We value real stories and honest faith.',
                },
                {
                  t: 'Theological Depth',
                  d: 'Rooted in ancient truth, translated for the complexities of today.',
                },
                {
                  t: 'Action-Oriented',
                  d: 'We believe faith is a verb. We are active in our city every day.',
                },
              ]"
              :key="point.t"
              class="group flex gap-6"
            >
              <div
                class="text-primary group-hover:bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:text-white"
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
                  class="lucide lucide-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h4 class="text-primary-dark mb-2 text-xl font-bold tracking-tight">
                  {{ point.t }}
                </h4>
                <p class="text-[15px] leading-relaxed font-medium text-slate-500">
                  {{ point.d }}
                </p>
              </div>
            </div>
          </div>
          <button
            class="text-primary-dark hover:text-primary flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase transition-colors"
          >
            Learn more about our vision
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
  </section>
</template>
