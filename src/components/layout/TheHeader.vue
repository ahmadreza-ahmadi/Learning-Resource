<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <header class="w-full bg-gray-100 p-4 flex items-center justify-center">
    <h1 class="text-xl font-bold text-pink-800">{{ title }}</h1>
  </header>
</template>
