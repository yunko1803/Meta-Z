import {Suspense} from 'react'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import {routes} from 'src/routes'
import {CookiesProvider} from 'react-cookie'
import {Loading} from './components/Loading'

const Routes = () => {
  return useRoutes(routes)
}

export const Root: FC = () => {
  return (
    <>
      <CookiesProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </Router>
      </CookiesProvider>
    </>
  )
}

export default Root
