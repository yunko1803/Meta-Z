import {FC} from 'react'
import {Button} from 'components/Button'
import {NavLink} from 'react-router-dom'
import {useCookies} from 'react-cookie'

export const MainPage: FC = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const isUserExist = Boolean(cookies.user)
  // console.log(isUserExist)

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
        <NavLink to="sign-out">
          <Button>Sign Out</Button>
        </NavLink>
        <NavLink to="update-password">
          <Button>Update Password</Button>
        </NavLink>
      </div>
    ) : (
      <div className="flex flex-col">
        <NavLink to="sign-in">
          <Button>Sign In</Button>
        </NavLink>
        <NavLink to="sign-up">
          <Button>Sign Up</Button>
        </NavLink>
      </div>
    )
  }
}

export default MainPage
