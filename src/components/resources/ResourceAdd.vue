<script>
export default {
  computed: {
    inputClass() {
      return 'px-3 py-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-100'
    },
  },
}
</script>

<template>
  <BaseCard>
    <form action="#" @submit.prevent class="flex flex-col gap-4">
      <fieldset class="flex flex-col gap-2">
        <label for="titel">Title</label>
        <input type="text" name="title" id="title" :class="inputClass" />
      </fieldset>
      <fieldset class="flex flex-col gap-2">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="2" :class="inputClass"></textarea>
      </fieldset>
      <fieldset class="flex flex-col gap-2">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" :class="inputClass" />
      </fieldset>
      <div class="flex gap-2 mt-4">
        <BaseButton type="submit">Add Resource</BaseButton>
        <BaseButton type="reset" variant="secondary">Reset Form</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>
