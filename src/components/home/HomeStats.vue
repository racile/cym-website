<template>
  <section class="border-b border-slate-100 bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="grid gap-12 md:grid-cols-4">
        <div
          v-for="stat in [
            { label: 'Weekly Attendance', value: '1,200+' },
            { label: 'Community Groups', value: '48' },
            { label: 'Annual Impact', value: '$150k+' },
            { label: 'Active Volunteers', value: '350+' },
          ]"
          :key="stat.label"
          class="text-center md:text-left"
        >
          <div class="text-primary-dark mb-2 text-4xl font-bold tracking-tight">
            {{ stat.value }}
          </div>
          <div class="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
