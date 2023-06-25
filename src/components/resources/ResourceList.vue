<script>
import ResourceListItem from './ResourceListItem.vue'

export default {
  components: {
    ResourceListItem,
  },

  props: {
    resources: Array,
  },
}
</script>

<template>
  <ul class="flex flex-col gap-4">
    <ResourceListItem
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    />
  </ul>
</template>
