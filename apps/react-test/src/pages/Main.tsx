import {FC} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {Button} from 'components/Button'
import {Spacer} from 'components/Spacer'

export const MainPage: FC = () => {
  const [cookies, , removeCookie] = useCookies(['user'])
  const isUserExist = Boolean(cookies.user)
  const navigate = useNavigate()

  const signOut = () => {
    removeCookie('user')
    navigate('/')
  }

  const renderButtonsBasedOnAuthentication = () => {
    return (
      <div className="flex flex-col">
        {isUserExist ? (
          <>
            <Button onClick={signOut}>Sign Out</Button>
            <Spacer space={10} />
            <NavLink to="update-password">
              <Button>Update Password</Button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="sign-in">
              <Button>Sign In</Button>
            </NavLink>
            <Spacer space={10} />
            <NavLink to="sign-up">
              <Button>Sign Up</Button>
            </NavLink>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="grid h-screen place-items-center">
      {isUserExist && <div>안녕하세요 {cookies.user.email} 님</div>}
      {renderButtonsBasedOnAuthentication()}
    </div>
  )
}

export default MainPage
