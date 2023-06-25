<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },

    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },

    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg', 'xl'].includes(value)
      },
    },

    rounded: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg', 'xl'].includes(value)
      },
    },

    content: String,
  },

  computed: {
    componentClass() {
      const VARIANTS = {
        primary: 'bg-orange-500 text-white ',
        secondary: 'bg-gray-50 text-orange-500 border border-gray-200',
      }

      const SIZES = {
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-[10px] py-[5px]',
        lg: 'text-lg px-3 py-[6px]',
        xl: 'text-xl px-4 py-2',
      }

      const ROUNDEDS = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-sm',
        full: 'rounded-full',
      }

      return [
        `${VARIANTS[this.variant]}
         ${SIZES[this.size]} ${ROUNDEDS[this.rounded]}`,
      ]
    },
  },
}
</script>

<template>
  <button :type="type" :class="componentClass">
    <slot>{{ content }}</slot>
  </button>
</template>
