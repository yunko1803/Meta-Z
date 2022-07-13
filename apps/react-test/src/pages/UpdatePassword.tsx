import {Header} from 'components/Header'
import {UpdatePasswordForm} from 'components/UpdatePasswordForm'

export const UpdatePassword: FPC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <UpdatePasswordForm />
    </div>
  )
}

export default UpdatePassword
