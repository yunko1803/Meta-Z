import {Header} from 'components/Header'
import {UpdatePasswordForm} from 'components/UpdatePasswordForm'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import {Button} from 'src/components/Button'
import {Loading} from 'src/components/Loading'
import {ToastContainer} from 'src/containers/ToastContainer'
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
          setErrAry(filterArray(errAry, TWO))
          break
        case TWO:
          setErrAry(filterArray(errAry, ONE))
          break
        case ONE:
          setErrAry(filterArray(errAry, ZERO))
          break
      }
    }, DELAY)

    return () => clearTimeout(timer)
  }, [errAry])

  const filterArray = (ary, selectedIndex) =>
    ary.filter((_, index) => index !== selectedIndex)

  const addErrMessage = (err: string) => {
    const newErrAry = [err, ...errAry]
    if (newErrAry.length > THREE) {
      setErrAry(newErrAry.slice(ZERO, THREE))
      return
    }
    setErrAry(newErrAry)
  }

  return (
    <>
      {isUserExist ? (
        <div className="flex flex-col h-screen">
          {isLoading && <Loading />}
          <ToastContainer msgAry={errAry} />
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
}

export default UpdatePassword
