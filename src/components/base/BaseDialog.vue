<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },

  emits: ['close'],
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-screen z-10 bg-black/75" @click="$emit('close')"></div>
  <dialog open class="fixed mx-auto p-0 w-[32rem] top-1/2 -translate-y-1/2 z-10 rounded-2xl">
    <header class="p-4">
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <hr />
    <section class="p-4">
      <slot name="body"> </slot>
    </section>
    <menu class="flex justify-end p-4">
      <slot name="actions">
        <BaseButton size="lg" @click="$emit('close')">Close</BaseButton>
      </slot>
    </menu>
  </dialog>
</template>
