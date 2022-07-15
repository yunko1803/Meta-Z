import {Header} from 'components/Header'
import {SignInForm} from 'components/SignInForm'
import {Loading} from 'src/components/Loading'
import {ToastContainer} from 'src/containers/ToastContainer'
import {DELAY, ONE, THREE, TWO, ZERO} from '../utils/constants'

export const SignIn: FPC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errAry, setErrAry] = useState([])

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

  const filterArray = (ary: string[], selectedIndex: number) =>
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
    <div className="flex flex-col h-screen">
      {isLoading && <Loading />}
      <ToastContainer msgAry={errAry} />
      <Header />
      <SignInForm onClickLoading={setIsLoading} addErrMessage={addErrMessage} />
    </div>
  )
}

export default SignIn
