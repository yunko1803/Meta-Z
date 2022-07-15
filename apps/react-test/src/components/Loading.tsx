import {Spinner} from './Spinner'

export const Loading: FC = () => {
  return (
    <div className="absolute grid h-screen w-screen place-items-center bg-ghost">
      <Spinner />
    </div>
  )
}
