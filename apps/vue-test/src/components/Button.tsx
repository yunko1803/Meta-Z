import {defineComponent} from 'vue'

export const Button = defineComponent((_, {slots}) => {
  return () => (
    // eslint-disable-next-line max-len
    <a
      class={[
        'inline-flex',
        'justify-center',
        'rounded-md',
        'bg-black',
        'bg-opacity-20',
        'px-4',
        'py-2',
        'text-sm',
        'font-medium',
        'text-white',
        'hover:bg-opacity-30',
        'focus:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-white',
        'focus-visible:ring-opacity-75',
      ]}
    >
      {slots.default?.()}
    </a>
  )
})
