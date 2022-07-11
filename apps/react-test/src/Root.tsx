import {Suspense} from 'react'
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import {routes} from 'src/routes'
import {CookiesProvider} from 'react-cookie'

const Routes = () => {
  return useRoutes(routes)
}

export const Root: FC = () => {
  return (
    <>
      <CookiesProvider>
        <Router>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </Router>
      </CookiesProvider>
    </>
  )
}

export default Root
