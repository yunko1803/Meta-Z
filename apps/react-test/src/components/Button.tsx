type Props = {
  disable?: boolean
  onClick?: () => void
}

export const Button: FC<Props> = (props) => {
  return (
    <button
      className={
        props.disable
          ? 'btn w-80 h-5 bg-black pointer-events-none cursor-not-allowed opacity-50'
          : 'btn w-80 h-5 bg-black'
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
