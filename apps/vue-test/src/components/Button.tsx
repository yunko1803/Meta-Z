import {defineComponent} from 'vue'

export const Button = defineComponent((_, {slots}) => {
  return () => (
    // eslint-disable-next-line max-len
    <a class={['btn']}>{slots.default?.()}</a>
  )
})
