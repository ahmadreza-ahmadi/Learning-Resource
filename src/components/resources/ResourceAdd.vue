<script>
export default {
  inject: ['addResource'],

  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
    }
  },

  computed: {
    newResource() {
      return {
        id: new Date().toISOString(),
        title: this.enteredTitle,
        description: this.enteredDescription,
        link: this.enteredLink,
      }
    },

    inputClass() {
      return 'px-3 py-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-100'
    },
  },

  methods: {
    submitForm() {
      if (!this.enteredTitle || !this.enteredLink) {
        return
        // TODO: Show a modal when an error occured
      }

      this.addResource(this.newResource)

      this.resetForm()
    },

    resetForm() {
      this.enteredTitle = ''
      this.enteredDescription = ''
      this.enteredLink = ''
    },
  },
}
</script>

<template>
  <BaseCard>
    <form action="#" @submit.prevent="submitForm" class="flex flex-col gap-4">
      <fieldset class="flex flex-col gap-2">
        <label for="title">Title</label>
        <input v-model="enteredTitle" type="text" name="title" id="title" :class="inputClass" />
      </fieldset>
      <fieldset class="flex flex-col gap-2">
        <label for="description">Description</label>
        <textarea
          v-model="enteredDescription"
          name="description"
          id="description"
          rows="2"
          :class="inputClass"
        ></textarea>
      </fieldset>
      <fieldset class="flex flex-col gap-2">
        <label for="link">Link</label>
        <input v-model="enteredLink" type="url" name="link" id="link" :class="inputClass" />
      </fieldset>
      <div class="flex gap-2 mt-4">
        <BaseButton type="submit">Add Resource</BaseButton>
        <BaseButton type="reset" variant="secondary">Reset Form</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>
