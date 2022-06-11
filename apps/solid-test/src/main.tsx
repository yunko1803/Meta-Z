import {render} from 'solid-js/web'
import {Router} from 'solid-app-router'
import {Root} from './Root'

render(
  () => (
    <Router>
      <Root />
    </Router>
  ),
  document.querySelector('#app'),
)
