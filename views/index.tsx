import { Router, Route } from '@solidjs/router'
import Home from './Home'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
}

export { Routes, Home }