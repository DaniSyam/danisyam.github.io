import { Router, Route } from '@solidjs/router'
import Home from './Home'
import Dashboard from './Dashboard'
import Blog from './Blog'
import Projects from './Projects'
import NotFound from './NotFound'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={Projects} />
      <Route path="*" component={NotFound} />
    </Router>
  )
}

export { Routes, Home }