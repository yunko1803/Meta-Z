import {FC} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {Button} from 'components/Button'
import {Spacer} from 'components/Spacer'

export const MainPage: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const isUserExist = Boolean(cookies.user)
  const navigate = useNavigate()

  // eslint-disable-next-line solid/components-return-once
  return (
    <div className="grid h-screen place-items-center">
      {isUserExist && <div>안녕하세요 {cookies.user.email} 님</div>}
      {renderButtonsBasedOnAuthentication()}
    </div>
  )

  function renderButtonsBasedOnAuthentication() {
    return isUserExist ? (
      <div className="flex flex-col">
        <Button onClick={signOut}>Sign Out</Button>
        <NavLink to="update-password">
          <Button>Update Password</Button>
        </NavLink>
      </div>
    ) : (
      <div className="flex flex-col">
        <NavLink to="sign-in">
          <Button>Sign In</Button>
        </NavLink>
        <Spacer space={10} />
        <NavLink to="sign-up">
          <Button>Sign Up</Button>
        </NavLink>
      </div>
    )
  }

  function signOut() {
    removeCookie('user')
    navigate('/')
  }
}

export default MainPage
