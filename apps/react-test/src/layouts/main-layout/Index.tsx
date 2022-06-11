import {Outlet} from 'react-router-dom'

export const MainLayout: FC = () => {
  return (
    <>
      <span>layout</span>
      <Outlet />
    </>
  )
}

export default MainLayout
