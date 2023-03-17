import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Containers
const Sidebar = lazy(() => import('./containers/Sidebar/Sidebar'))
const Toolbar = lazy(() => import('./containers/Toolbar/Toolbar'))
// Pages
const Ideas = lazy(() => import('./pages/Ideas/Ideas'))
const Agents = lazy(() => import('./pages/Agents/Agents'))
const Tickets = lazy(() => import('./pages/Tickets/Tickets'))
const Contacts = lazy(() => import('./pages/Contacts/Contacts'))
const Articles = lazy(() => import('./pages/Articles/Articles'))
const Overview = lazy(() => import('./pages/Overview/Overview'))
const Settings = lazy(() => import('./pages/Settings/Settings'))
const Subscription = lazy(() => import('./pages/Subscription/Subscription'))

// TODO: pages ? index.js | Sidebar settings border-top

const App = () => {
  const [activePage, setActivePage] = useState('')

  return (
    <Router>
      <div className='app'>
        <Suspense fallback={<div>loading ...</div>}>
          <Sidebar activePage={activePage} setActivePage={setActivePage} />

          <div className='content'>
            <Toolbar activePage={activePage} />
            <Switch>
              <Route exact path='/overview' component={Overview} />
              <Route exact path='/tickets' component={Tickets} />
              <Route exact path='/ideas' component={Ideas} />
              <Route exact path='/contacts' component={Contacts} />
              <Route exact path='/agents' component={Agents} />
              <Route exact path='/articles' component={Articles} />
              <Route exact path='/settings' component={Settings} />
              <Route exact path='/subscription' component={Subscription} />
            </Switch>
          </div>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
