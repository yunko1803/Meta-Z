import {Header} from 'components/Header'
import {UpdatePasswordForm} from 'components/UpdatePasswordForm'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import {Button} from 'src/components/Button'
import {Loading} from 'src/components/Loading'
import {DELAY, ONE, THREE, TWO, ZERO} from '../utils/constants'

export const UpdatePassword: FPC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errAry, setErrAry] = useState([])
  const [cookies] = useCookies(['user'])
  const isUserExist = Boolean(cookies.user)
  const navigate = useNavigate()

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
    <>
      {isUserExist ? (
        <div className="flex flex-col h-screen">
          {isLoading && <Loading />}
          <Header />
          <UpdatePasswordForm
            onClickLoading={setIsLoading}
            addErrMessage={addErrMessage}
          />
        </div>
      ) : (
        <div className="grid h-screen place-items-center">
          <div>
            <div className="text-center mb-4">접근 할수 없는 페이지 입니다</div>
            <Button onClick={() => navigate('/')}>Go Home</Button>
          </div>
        </div>
      )}
    </>
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
