import {Header} from 'components/Header'
import {SignInForm} from 'components/SignInForm'
import {Loading} from 'src/components/Loading'

export const SignIn: FPC = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Loading />}
      <Header />
      <SignInForm onClickLoading={setIsLoading} />
    </div>
  )
}

export default SignIn
