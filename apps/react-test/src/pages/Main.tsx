import {FC} from 'react'
import {Button} from 'components/Button'
import {NavLink} from 'react-router-dom'

export const MainPage: FC = () => {
  return (
    <>
      hello
      <NavLink to="sign">
        <Button>Sign In / Sign Up</Button>
      </NavLink>
    </>
  )
}

export default MainPage
