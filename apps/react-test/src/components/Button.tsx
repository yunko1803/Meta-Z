type Props = {
  onClick?: () => void
  disable?: boolean
}

export const Button: FC<Props> = (props) => {
  return (
    <button
      className={
        // eslint-disable-next-line no-negated-condition
        !props.disable
          ? 'btn w-80 h-5 bg-black'
          : 'btn w-80 h-5 bg-black pointer-events-none cursor-not-allowed opacity-50'
      }
      onClick={props.onClick}
    >
      {/* <img src="@public/logos/pentagon.png" /> */}
      {props.children}
    </button>
  )
}
