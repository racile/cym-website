<template>
  <section id="media" class="bg-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="bg-primary shadow-3xl shadow-primary/20 overflow-hidden rounded-[3rem]">
        <div class="grid md:grid-cols-2">
          <div class="group relative aspect-video cursor-pointer md:aspect-auto">
            <img
              src="/assets/images/worship.png"
              alt="Worship"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition-colors group-hover:bg-slate-950/40"
            >
              <div
                class="text-primary flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition-transform group-hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-play pl-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center p-8 text-white md:p-24">
            <span class="text-primary-light mb-4 text-xs font-black tracking-[0.3em] uppercase"
              >Latest Message</span
            >
            <h2 class="mb-8 text-3xl leading-tight font-black md:text-5xl">
              Finding Peace in the Chaos
            </h2>
            <p class="mb-12 text-xl leading-relaxed font-medium opacity-80">
              Watch our latest teaching on how to maintain inner peace and spiritual focus in an
              increasingly busy world.
            </p>
            <div class="flex flex-wrap gap-4">
              <button
                class="bg-primary-dark rounded-2xl px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 active:scale-95"
              >
                Watch Now
              </button>
              <button
                class="rounded-2xl border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                Past Sermons
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
}
</style>
