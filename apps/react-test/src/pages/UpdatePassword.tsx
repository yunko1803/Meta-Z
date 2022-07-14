import {Header} from 'components/Header'
import {UpdatePasswordForm} from 'components/UpdatePasswordForm'
import {Loading} from 'src/components/Loading'
import {DELAY, ONE, THREE, TWO, ZERO} from '../utils/constants'

export const UpdatePassword: FPC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errAry, setErrAry] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (errAry.length) {
        case THREE:
          // eslint-disable-next-line max-nested-callbacks
          setErrAry((errAry) => errAry.filter((_, index) => index !== TWO))
          break
        case TWO:
          // eslint-disable-next-line max-nested-callbacks
          setErrAry((errAry) => errAry.filter((_, index) => index !== ONE))
          break
        case ONE:
          // eslint-disable-next-line max-nested-callbacks
          setErrAry((errAry) => errAry.filter((_, index) => index !== ZERO))
          break
      }
    }, DELAY)

    return () => clearTimeout(timer)
  }, [errAry])

  // eslint-disable-next-line solid/components-return-once
  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Loading />}
      <Header />
      <UpdatePasswordForm
        onClickLoading={setIsLoading}
        addErrMessage={addErrMessage}
      />
    </div>
  )

  function addErrMessage(err: string) {
    const newErrAry = [err, ...errAry]
    if (newErrAry.length > THREE) {
      setErrAry(newErrAry.slice(ZERO, THREE))
      return
    }
    setErrAry(newErrAry)
  }
}

export default UpdatePassword
