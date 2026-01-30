<template>
  <section id="contact" class="py-32 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid gap-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div class="text-primary mb-4 text-xs font-black tracking-[0.3em] uppercase">Connect With Us</div>
          <h2 class="text-primary-dark mb-8 text-5xl font-bold tracking-tight">Visit CYM International.</h2>
          <p class="mb-12 text-lg font-medium text-slate-500 leading-relaxed">
            Our international headquarters serves as a dedicated space for community, leadership, and global connection. We are always ready to welcome you, whether you're joining us for the first time or visiting our official offices.
          </p>
          
          <div class="space-y-8">
            <div v-for="item in [
              { l: 'Location', v: 'Old Rd, Natumolan Tagoloan, Cagayan De Oro City, 9001 Misamis Oriental, Philippines', i: 'map-pin', link: 'https://www.google.com/maps/place/CYM+INTERNATIONAL+INC./@8.532805,124.7557607,17z/' },
              { l: 'Phone', v: '+63 953 075 7358', i: 'phone' },
              { l: 'Email Inquiries', v: 'rodman.guzman@cym.com', i: 'mail' }
            ]" :key="item.l" class="flex gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary">
                 <svg v-if="item.i === 'map-pin'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 <svg v-if="item.i === 'phone'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 <svg v-if="item.i === 'mail'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div class="text-xs font-black uppercase tracking-widest text-slate-300 mb-1">{{ item.l }}</div>
                <div v-if="item.link">
                  <a :href="item.link" target="_blank" class="font-bold text-primary-dark tracking-tight hover:text-primary transition-colors flex items-center gap-2">
                    {{ item.v }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </a>
                </div>
                <div v-else class="font-bold text-primary-dark tracking-tight">{{ item.v }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="h-[500px] w-full bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden group">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.144414141414!2d124.7557607!3d8.532805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffed797ae33831%3A0x441ecf7dc070c011!2sCYM%20INTERNATIONAL%20INC.!5e0!3m2!1sen!2sph!4v1706600000000!5m2!1sen!2sph" 
             width="100%" 
             height="100%" 
             style="border:0;" 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"
             class="grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
           ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
