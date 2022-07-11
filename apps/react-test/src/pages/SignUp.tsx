import {Header} from 'components/Header'
import {SignUpForm} from 'components/SignUpForm'

export const SignUp: FPC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SignUpForm />
    </div>
  )
}

export default SignUp
