<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <li>
    <header class="flex items-center justify-between">
      <h3 class="text-2xl font-bold my-2">{{ resource.title }}</h3>
      <button
        class="bg-gray-50 text-red-500 text-sm px-2 py-1 rounded-md border border-gray-200"
      >
        Delete
      </button>
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
  </li>
</template>
