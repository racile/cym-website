<script setup lang="ts">
const activeModal = defineModel<string | null>()

const modalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <div class="space-y-4">
        <p>At Christ in You Ministries (CYM), we are committed to protecting your privacy. This policy outlines how we handle your personal information.</p>
        <h4 class="font-bold">1. Information We Collect</h4>
        <p>We collect information you provide directly to us, such as when you sign up for our newsletter, register for an event, or contact us.</p>
        <h4 class="font-bold">2. How We Use Information</h4>
        <p>We use the information to communicate with you about events, ministries, and updates. We never sell your data to third parties.</p>
        <h4 class="font-bold">3. Data Security</h4>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access.</p>
      </div>
    `,
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <div class="space-y-4">
        <p>By using the CYM website, you agree to the following terms and conditions.</p>
        <h4 class="font-bold">1. Use of Content</h4>
        <p>All content on this site is for personal, non-commercial use. Any reproduction or distribution without permission is prohibited.</p>
        <h4 class="font-bold">2. Community Standards</h4>
        <p>Users are expected to engage respectfully with our community and digital platforms.</p>
        <h4 class="font-bold">3. Disclaimer</h4>
        <p>The information on this site is provided "as is" without warranty of any kind.</p>
      </div>
    `,
  },
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="activeModal" class="fixed inset-0 z-100 flex items-center justify-center p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>

      <!-- Modal Content -->
      <div
        class="animate-in zoom-in-95 relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white shadow-2xl duration-300"
      >
        <div class="flex items-center justify-between border-b border-slate-100 p-8">
          <h3 class="font-heading text-primary-dark text-2xl font-bold">
            {{ modalContent[activeModal as keyof typeof modalContent].title }}
          </h3>
          <button
            @click="activeModal = null"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100"
          >
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
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div
          class="max-h-[60vh] overflow-y-auto p-8 text-slate-600"
          v-html="modalContent[activeModal as keyof typeof modalContent].content"
        ></div>

        <div class="bg-slate-50 p-8 text-right">
          <button
            @click="activeModal = null"
            class="bg-primary hover:bg-primary-dark rounded-xl px-8 py-3 font-bold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
