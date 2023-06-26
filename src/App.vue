<script>
import { computed } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheResources from './components/layout/TheResources.vue'

export default {
  components: {
    TheHeader,
    TheResources,
  },

  provide() {
    return {
      resources: computed(() => this.storedResources),
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    }
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

  methods: {
    addResource(newResource) {
      this.storedResources.unshift(newResource)
    },

    deleteResource(resourceId) {
      const filteredResources = this.storedResources.filter(
        (resource) => resource.id !== resourceId
      )

      this.storedResources = filteredResources
    },
  },
}
</script>

<template>
  <div class="font-inter">
    <TheHeader title="Learning Resources" />

    <main class="max-w-screen-sm mx-auto p-5 sm:p-7">
      <TheResources />
    </main>
  </div>
</template>
