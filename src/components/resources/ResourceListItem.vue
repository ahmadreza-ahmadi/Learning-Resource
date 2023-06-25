<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <li>
    <BaseCard>
      <header class="flex items-center justify-between">
        <h3 class="text-2xl font-bold my-2">{{ resource.title }}</h3>
        <BaseButton
          variant="secondary"
          size="sm"
          rounded="md"
          class="!text-red-500"
          >Delete</BaseButton
        >
      </header>
      <p class="font-medium text-lg my-2">{{ resource.description }}</p>
      <nav>
        <a
          :href="resource.link"
          target="_blank"
          class="font-medium text-orange-600 hover:text-orange-400 active:text-orange-400"
          >View Resource</a
        >
      </nav>
    </BaseCard>
  </li>
</template>
