import {Toast} from '../components/Toast'

type Props = {
  msgAry: string[]
}

export const ToastContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center absolute w-full mt-2">
      {props.msgAry.map((msg, index) => (
        <Toast key={index}>{msg}</Toast>
      ))}
    </div>
  )
}
