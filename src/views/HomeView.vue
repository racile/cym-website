<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeNavbar from '@/components/home/HomeNavbar.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import HomeStats from '@/components/home/HomeStats.vue'
import HomeCommunities from '@/components/home/HomeCommunities.vue'
import HomeJourney from '@/components/home/HomeJourney.vue'
import HomeMedia from '@/components/home/HomeMedia.vue'
import HomeGive from '@/components/home/HomeGive.vue'
import HomeContact from '@/components/home/HomeContact.vue'
import HomeCTA from '@/components/home/HomeCTA.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
import HomeModals from '@/components/home/HomeModals.vue'

const isScrolled = ref(false)
const activeModal = ref<string | null>(null)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

const communities = [
  {
    title: 'Discipleship Groups',
    description:
      'Weekly gatherings for deep study, prayer, and authentic community in a small group setting.',
    icon: 'users',
    count: '24 Groups',
  },
  {
    title: 'Worship Collective',
    description:
      'A community of artists and musicians dedicated to creating space for spiritual encounter.',
    icon: 'music',
    count: '45 Artists',
  },
  {
    title: 'City Impact',
    description:
      'Our outreach team dedicated to serving the needs of Metro City through local partnerships.',
    icon: 'globe',
    count: '15 Partners',
  },
  {
    title: 'Next Gen',
    description:
      'Providing a safe and inspiring environment for children and youth to discover their faith.',
    icon: 'star',
    count: '120+ Students',
  },
]

const recentUpdates = [
  {
    title: 'The Path of Grace',
    author: 'Pastor Michael',
    category: 'Theology',
    date: 'Jan 28',
  },
  {
    title: 'Community Outreach Wrap-up',
    author: 'Sarah Jenkins',
    category: 'Impact',
    date: 'Jan 25',
  },
  {
    title: 'Worship Night Highlights',
    author: 'Worship Team',
    category: 'Worship',
    date: 'Jan 22',
  },
]
</script>

<template>
  <div class="bg-bg-page selection:bg-primary/20 min-h-screen">
    <HomeNavbar :is-scrolled="isScrolled" />
    <HomeHero :recent-updates="recentUpdates" />
    <HomeStats />
    <HomeCommunities :communities="communities" />
    <HomeJourney />
    <HomeMedia />
    <HomeGive />
    <HomeContact />
    <HomeCTA />
    <HomeFooter @open-modal="activeModal = $event" />
    <HomeModals v-model="activeModal" />
  </div>
</template>

<style scoped>
:deep(.container) {
  max-width: 1280px;
}
</style>
