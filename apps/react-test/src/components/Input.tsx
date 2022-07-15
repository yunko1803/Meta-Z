type Props = {
  handleChange: (event) => void
  placeholder: string
  type: string
  value: string
}

export const Input: FC<Props> = (props) => {
  const inputStyle =
    'w-80 h-12 border border-slate-300 border-gray-200 rounded text-gray-700 placeholder:text-gray-100 pl-[14px]'
  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.handleChange(event)

  return (
    <input
      className={inputStyle}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChangeEvent}
    />
  )
}
