import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import {routes} from 'src/routes'
import {ChakraProvider} from '@chakra-ui/react'

const Routes = () => {
  return useRoutes(routes)
}

export const Root: FC = () => {
  return (
    <ChakraProvider>
      <span>root</span>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  )
}

export default Root
