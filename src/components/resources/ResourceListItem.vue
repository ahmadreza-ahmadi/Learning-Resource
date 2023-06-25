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
    <header>
      <h3>{{ resource.title }}</h3>
      <button>Delete</button>
    </header>
    <p>{{ resource.description }}</p>
    <nav>
      <a :href="resource.link" target="_blank">View Resource</a>
    </nav>
  </li>
</template>
