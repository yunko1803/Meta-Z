type Props = {
  placeholder: string
  type: string
  value: string
  handleChange: (value: string) => void
}

export const Input: FC<Props> = (props) => {
  return (
    <input
      // eslint-disable-next-line max-len
      className="w-80 h-12 border border-slate-300 rounded text-gray-700"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.handleChange(event.target.value)}
    />
  )
}
