<script>
import TheHeader from './components/layout/TheHeader.vue'
import ResourceList from './components/resources/ResourceList.vue'

export default {
  components: {
    TheHeader,
    ResourceList,
  },

  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="font-inter">
    <TheHeader />

    <main class="max-w-screen-sm mx-auto p-5 sm:p-7">
      <ResourceList :resources="storedResources" />
    </main>
  </div>
</template>
