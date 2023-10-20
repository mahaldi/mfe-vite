import {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom';

const MarketingLazy = lazy(() => import('./components/marketingApp'))
const DashboardLazy = lazy(() => import('./components/dashboardApp'))
const history = createBrowserHistory()

function App() {

  return (
    <>
      <Router history={history}>
        <header>header container</header>
        <Link to="/dashboard/landing">go to dashboard page</Link>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/dashboard">
              <DashboardLazy />
            </Route>
            <Route path="/">
              <MarketingLazy />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

App.propTypes = {
  history: PropTypes.shape({})
}
export default App
