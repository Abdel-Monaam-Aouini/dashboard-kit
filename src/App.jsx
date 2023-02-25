import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
const Sidebar = lazy(() => import("./containers/Sidebar/Sidebar"));
const Toolbar = lazy(() => import("./containers/Toolbar/Toolbar"));
// Pages
const Ideas = lazy(() => import("./pages/Ideas/Ideas"));
const Agents = lazy(() => import("./pages/Agents/Agents"));
const Tickets = lazy(() => import("./pages/Tickets/Tickets"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Articles = lazy(() => import("./pages/Articles/Articles"));
const Overview = lazy(() => import("./pages/Overview/Overview"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const Subscription = lazy(() => import("./pages/Subscription/Subscription"));

// TODO: pages ? index.js | Sidebar settings border-top

const App = () => {
  const [activePage, setActivePage] = useState("");

  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>loading ...</div>}>
          <Sidebar activePage={activePage} setActivePage={setActivePage} />

          <div className="content">
            <Toolbar activePage={activePage} />

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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
