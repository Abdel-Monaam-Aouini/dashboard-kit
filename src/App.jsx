import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

// Containers
import Sidebar from './containers/Sidebar/Sidebar'
import Toolbar from './containers/Toolbar/Toolbar'
// Pages
import Ideas from './pages/Ideas/Ideas'
import Agents from './pages/Agents/Agents'
import Tickets from './pages/Tickets/Tickets'
import Contacts from './pages/Contacts/Contacts'
import Articles from './pages/Articles/Articles'
import Overview from './pages/Overview/Overview'
import Settings from './pages/Settings/Settings'
import Subscription from './pages/Subscription/Subscription'

// TODO: pages ? index.js | Sidebar settings border-top

class App extends Component {
  constructor() {
    super()

    this.state = {
      activePage: '',
    }

    this.setActivePage = this.setActivePage.bind(this)
  }

  setActivePage(page) {
    this.setState({
      activePage: page,
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar activePage={this.state.activePage} setActivePage={this.setActivePage} />

          <div className="content">
            <Toolbar activePage={this.state.activePage} />

            <Switch>
              <Route path="/overview" component={Overview} />
              <Route path="/tickets" component={Tickets} />
              <Route path="/ideas" component={Ideas} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/agents" component={Agents} />
              <Route path="/articles" component={Articles} />
              <Route path="/settings" component={Settings} />
              <Route path="/subscription" component={Subscription} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
