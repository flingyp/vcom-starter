import { useNameSpace } from '../hooks/useNameSpace'
import { ButtonProps } from './button-props'

// 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'

export default (props: ButtonProps) => {
  const ns = useNameSpace('y-button')
  const classes = {
    [ns.b()]: true,
    [ns.bm('default-type')]: props.type === 'default',
    [ns.bm('primary-type')]: props.type === 'primary',
    [ns.bm('success-type')]: props.type === 'success',
    [ns.bm('warning-type')]: props.type === 'warning',
    [ns.bm('info-type')]: props.type === 'info',
    [ns.bm('danger-type')]: props.type === 'danger'
  }

  return {
    classes
  }
}
