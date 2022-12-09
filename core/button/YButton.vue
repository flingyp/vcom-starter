<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import useButton from './use-button'
  import { buttonProps, ButtonProps } from './button-props'

  export default defineComponent({
    name: 'YButton',
    props: buttonProps,
    setup(props: ButtonProps) {
      const { classes } = useButton(props)

      return { classes }
    }
  })
</script>

<style lang="scss" scoped>
  @import './YButton.scss';
</style>
