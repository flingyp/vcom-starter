import { PropType, ExtractPropTypes } from 'vue'

export type buttonTypes = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'

export const buttonProps = {
  type: {
    type: String as PropType<buttonTypes>,
    default: 'default'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
