<template>
  <section id="visit" class="overflow-hidden bg-slate-900 py-32">
    <div class="container mx-auto px-6 text-center">
      <div class="relative z-10 mx-auto max-w-4xl">
        <div
          class="text-primary mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase"
        >
          Start Your Journey
        </div>
        <h2 class="mb-10 text-6xl leading-tight font-bold tracking-tight text-white">
          Ready to find your place?
        </h2>
        <p class="mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium text-white/40">
          We'd love to welcome you this Sunday at 10:00 AM. Join us for worship and stay for a
          coffee in our welcome lounge.
        </p>

        <div class="flex flex-col items-center justify-center gap-10 md:flex-row">
          <button
            class="group bg-primary hover:text-primary-dark shadow-primary/20 relative flex items-center gap-4 rounded-2xl px-10 py-6 text-sm font-bold tracking-widest text-white uppercase shadow-2xl transition-all hover:-translate-y-1 hover:bg-white"
          >
            Plan Your First Visit
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
              class="lucide lucide-calendar"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </button>
          <div class="flex items-center gap-6">
            <div class="h-1 w-12 bg-white/10"></div>
            <span class="text-xs font-bold tracking-widest text-white/40 uppercase">Or</span>
            <div class="h-1 w-12 bg-white/10"></div>
          </div>
          <button
            class="hover:text-primary text-sm font-bold tracking-widest text-white uppercase transition-colors"
          >
            Watch Online First
          </button>
        </div>

        <div class="mt-24 grid gap-8 text-white/40 md:grid-cols-3">
          <div
            v-for="info in [
              { l: 'Location', v: 'Natumolan Tagoloan, Cagayan De Oro' },
              { l: 'Office Hours', v: 'Mon – Fri: 9AM – 5PM' },
              { l: 'Get in Touch', v: 'rodman.guzman@cym.com' },
            ]"
            :key="info.l"
            class="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div class="text-primary mb-2 text-[10px] font-black tracking-widest uppercase">
              {{ info.l }}
            </div>
            <div class="font-bold tracking-tight text-white/80">{{ info.v }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
