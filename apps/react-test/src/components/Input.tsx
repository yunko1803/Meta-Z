type Props = {
  handleChange: (event) => void
  placeholder: string
  type: string
  value: string
}

export const Input: FC<Props> = (props) => {
  return (
    <input
      // eslint-disable-next-line max-len
      className="w-80 h-12 border border-slate-300 border-gray-200 rounded text-gray-700 placeholder:text-gray-100 pl-[14px] "
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      // eslint-disable-next-line solid/reactivity
      onChange={props.handleChange}
    />
  )
}
