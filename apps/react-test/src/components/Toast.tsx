type Props = {
  onClick?: () => void
}

export const Toast: FC<Props> = (props) => {
  return (
    <div className="text-white flex items-center pl-4 w-80 h-10 bg-black rounded mt-1">
      {props.children}
    </div>
  )
}
