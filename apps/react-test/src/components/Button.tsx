type Props = {
  onClick?: () => void
}

export const Button: FC<Props> = (props) => {
  return (
    <button className="btn w-80 h-5" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
