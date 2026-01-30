<script setup lang="ts">
defineEmits<{
  (e: 'open-modal', type: string): void
}>()

const currentYear = new Date().getUTCFullYear()
</script>

<template>
  <footer class="bg-primary-dark border-t border-white/5 py-32">
    <div class="container mx-auto px-6">
      <div class="grid gap-20 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div class="space-y-8">
          <div class="flex items-center gap-3 text-2xl font-bold tracking-tight text-white">
            <img
              src="/assets/images/logo_cym.png"
              alt="CYM Logo"
              class="h-10 w-10 object-contain"
            />
            <span class="font-heading tracking-tighter uppercase"
              >CYM
              <span class="-mt-1 block text-sm leading-none font-light tracking-widest opacity-60"
                >Ministry</span
              ></span
            >
          </div>
          <p class="max-w-sm text-[15px] leading-relaxed font-medium text-slate-400">
            Christ in You Ministry: Experiencing transformation through faith, community, and
            purpose. Serving Metro City since 2024.
          </p>
          <div class="flex gap-4">
            <a
              v-for="s in ['facebook', 'instagram', 'twitter', 'youtube']"
              :key="s"
              href="#"
              class="hover:bg-primary hover:border-primary flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:text-white"
            >
              <svg
                v-if="s === 'facebook'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                v-if="s === 'instagram'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <svg
                v-if="s === 'twitter'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                />
              </svg>
              <svg
                v-if="s === 'youtube'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube"
              >
                <path
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-primary mb-8 text-xs font-black tracking-[0.3em] uppercase">
            Ministries
          </h4>
          <ul class="space-y-4 text-[15px] font-bold text-slate-400">
            <li>
              <a href="#" class="hover:text-primary transition-colors">Worship Collective</a>
            </li>
            <li><a href="#" class="hover:text-primary transition-colors">Small Groups</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Youth (Next Gen)</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Global Impact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-primary mb-8 text-xs font-black tracking-[0.3em] uppercase">Resources</h4>
          <ul class="space-y-4 text-[15px] font-bold text-slate-400">
            <li><a href="#" class="hover:text-primary transition-colors">Sermon Archive</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Daily Devotional</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Church App</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Online Giving</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-primary mb-8 text-xs font-black tracking-[0.3em] uppercase">About</h4>
          <ul class="space-y-4 text-[15px] font-bold text-slate-400">
            <li><a href="#" class="hover:text-primary transition-colors">Our Beliefs</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Leadership</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      <div
        class="mt-32 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 text-[11px] font-black tracking-widest text-slate-500 uppercase md:flex-row"
      >
        <p>&copy; {{ currentYear }} Christ in You Ministry. Built for the glory of God.</p>
        <div class="flex gap-10">
          <button
            @click="$emit('open-modal', 'privacy')"
            class="hover:text-primary cursor-pointer transition-colors"
          >
            Privacy Policy
          </button>
          <button
            @click="$emit('open-modal', 'terms')"
            class="hover:text-primary cursor-pointer transition-colors"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
