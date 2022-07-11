import {Header} from 'components/Header'
import {SignInForm} from 'components/SignInForm'

export const SignIn: FPC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SignInForm />
    </div>
  )
}

export default SignIn
