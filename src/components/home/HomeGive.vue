<template>
  <section id="give" class="py-32 bg-slate-50">
    <div class="container mx-auto px-6">
      <div class="grid gap-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div class="text-primary mb-4 text-xs font-black tracking-[0.3em] uppercase">Generosity</div>
          <h2 class="text-primary-dark mb-8 text-5xl font-bold tracking-tight">Support the Mission.</h2>
          <p class="mb-10 text-lg font-medium text-slate-500 leading-relaxed">
            Your generosity enables us to serve Metro City, support local partners, and create spaces for spiritual growth. We believe in being a blessing to our community through collective action.
          </p>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <div class="text-primary-dark font-bold text-lg mb-2">Secure Giving</div>
               <p class="text-sm text-slate-400">All transactions are encrypted and processed securely through our partners.</p>
            </div>
            <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <div class="text-primary-dark font-bold text-lg mb-2">Tax Deductible</div>
               <p class="text-sm text-slate-400">CYM is a registered non-profit. All donations are tax deductible.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-primary-dark rounded-[3rem] p-8 md:p-10 text-white shadow-2xl">
           <h3 class="text-2xl font-bold mb-6 text-center">Online Giving (PH)</h3>
           <div class="grid gap-4 md:grid-cols-2 mb-8">
              <!-- GCash -->
              <div class="bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-center group hover:bg-white/10 transition-all">
                 <div class="mb-3 inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#007DFE]/20 text-[#007DFE] text-[9px] font-black uppercase tracking-widest">GCash</div>
                 <div class="mb-4 mx-auto w-28 h-28 bg-white rounded-xl flex items-center justify-center p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <div class="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                       <img src="/assets/images/qr_gcash.png" alt="GCash QR Code" class="w-full h-full object-contain" />
                    </div>
                 </div>
                 <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">GCash Number</div>
                 <div class="text-sm font-black tracking-tight text-white">+63 953 075 7358</div>
              </div>

              <!-- Maya -->
              <div class="bg-white/5 border border-white/10 rounded-[1.5rem] p-5 text-center group hover:bg-white/10 transition-all">
                 <div class="mb-3 inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3CCBBE]/20 text-[#3CCBBE] text-[9px] font-black uppercase tracking-widest">Maya</div>
                 <div class="mb-4 mx-auto w-28 h-28 bg-white rounded-xl flex items-center justify-center p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <div class="w-full h-full flex flex-col items-center justify-center">
                       <img src="/assets/images/qr_maya.svg" alt="Maya QR Code" class="w-full h-full object-contain scale-125" />
                    </div>
                 </div>
                 <div class="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Maya Number</div>
                 <div class="text-sm font-black tracking-tight text-white">+63 917 123 4567</div>
              </div>
           </div>
           <p class="text-center text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">Cym International Giving</p>
        </div>
      </div>
    </div>
  </section>
</template>
