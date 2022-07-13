type Props = {
  space: number
}

export const Spacer: FC<Props> = (props) => {
  return <div style={{height: `${props.space}px`}} />
}
