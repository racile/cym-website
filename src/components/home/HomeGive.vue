<template>
  <section id="give" class="bg-slate-50 py-32">
    <div class="container mx-auto px-6">
      <div class="grid gap-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div class="text-primary mb-4 text-xs font-black tracking-[0.3em] uppercase">
            Generosity
          </div>
          <h2 class="text-primary-dark mb-8 text-5xl font-bold tracking-tight">
            Support the Mission.
          </h2>
          <p class="mb-10 text-lg leading-relaxed font-medium text-slate-500">
            Your generosity enables us to serve Metro City, support local partners, and create
            spaces for spiritual growth. We believe in being a blessing to our community through
            collective action.
          </p>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div class="text-primary-dark mb-2 text-lg font-bold">Secure Giving</div>
              <p class="text-sm text-slate-400">
                All transactions are encrypted and processed securely through our partners.
              </p>
            </div>
            <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div class="text-primary-dark mb-2 text-lg font-bold">Tax Deductible</div>
              <p class="text-sm text-slate-400">
                CYM is a registered non-profit. All donations are tax deductible.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-primary-dark rounded-[3rem] p-8 text-white shadow-2xl md:p-10">
          <h3 class="mb-6 text-center text-2xl font-bold">Online Giving (PH)</h3>
          <div class="mb-8 grid gap-4 md:grid-cols-2">
            <!-- GCash -->
            <div
              class="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center transition-all hover:bg-white/10"
            >
              <div
                class="mb-3 inline-flex items-center justify-center rounded-full bg-[#007DFE]/20 px-3 py-1 text-[9px] font-black tracking-widest text-[#007DFE] uppercase"
              >
                GCash
              </div>
              <div
                class="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              >
                <div
                  class="flex h-full w-full flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/assets/images/qr_gcash.png"
                    alt="GCash QR Code"
                    class="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div class="mb-1 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                GCash Number
              </div>
              <div class="text-sm font-black tracking-tight text-white">+63 953 075 7358</div>
            </div>

            <!-- Maya -->
            <div
              class="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center transition-all hover:bg-white/10"
            >
              <div
                class="mb-3 inline-flex items-center justify-center rounded-full bg-[#3CCBBE]/20 px-3 py-1 text-[9px] font-black tracking-widest text-[#3CCBBE] uppercase"
              >
                Maya
              </div>
              <div
                class="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              >
                <div class="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src="/assets/images/qr_maya.svg"
                    alt="Maya QR Code"
                    class="h-full w-full scale-125 object-contain"
                  />
                </div>
              </div>
              <div class="mb-1 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                Maya Number
              </div>
              <div class="text-sm font-black tracking-tight text-white">+63 917 123 4567</div>
            </div>
          </div>
          <p class="text-center text-[9px] font-black tracking-[0.2em] text-white/20 uppercase">
            Cym International Giving
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
