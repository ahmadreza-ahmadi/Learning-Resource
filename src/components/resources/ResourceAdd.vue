<script>
export default {
  inject: ['addResource'],

  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
      inputIsInvalid: false,
    }
  },

  computed: {
    newResource() {
      return {
        id: new Date().toISOString(),
        title: this.enteredTitle.trim(),
        description: this.enteredDescription.trim(),
        link: this.enteredLink.trim(),
      }
    },

    inputClass() {
      return 'px-3 py-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-orange-100'
    },
  },

  methods: {
    submitForm() {
      if (!this.enteredTitle || !this.enteredLink) {
        this.inputIsInvalid = true
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

    confirmError() {
      this.inputIsInvalid = false
    },
  },
}
</script>

<template>
  <BaseDialog v-if="inputIsInvalid" @close="confirmError">
    <template #header>
      <h2 class="text-2xl font-bold">Invalid Input</h2>
    </template>
    <template #body>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few characters into each input
        field.
      </p>
    </template>
    <template #actions>
      <BaseButton size="lg" @click="confirmError">Okay</BaseButton>
    </template>
  </BaseDialog>
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
