type Props = {
  onClick?: () => void
}

export const Button: FC<Props> = (props) => {
  return (
    <button className="btn w-80 h-5 bg-blue" onClick={props.onClick}>
      {/* <img src="@public/logos/pentagon.png" /> */}
      {props.children}
    </button>
  )
}
