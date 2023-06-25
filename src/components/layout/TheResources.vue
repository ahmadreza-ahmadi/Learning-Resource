<script>
import ResourceList from '../resources/ResourceList.vue'
import ResourceAdd from '../resources/ResourceAdd.vue'

export default {
  components: {
    ResourceList,
    ResourceAdd,
  },

  data() {
    return {
      // WARN: The value of this must be the same as component name
      selectedTab: 'ResourceList',
    }
  },

  computed: {
    storedResourcesButtonVariant() {
      return this.selectedTab === 'ResourceList' ? 'primary' : 'secondary'
    },

    addResourceButtonVariant() {
      return this.selectedTab === 'ResourceAdd' ? 'primary' : 'secondary'
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
  },
}
</script>

<template>
  <BaseCard class="mb-6">
    <BaseButton
      :variant="storedResourcesButtonVariant"
      size="md"
      rounded="lg"
      class="mr-3"
      @click="setSelectedTab('ResourceList')"
      >Stored Resources</BaseButton
    >
    <BaseButton
      :variant="addResourceButtonVariant"
      size="md"
      rounded="lg"
      @click="setSelectedTab('ResourceAdd')"
      >Add Resource</BaseButton
    >
  </BaseCard>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
