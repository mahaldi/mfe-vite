import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './Page/Landing'
import Pricing from './Page/Pricing'

function App(props) {
  const {history} = props;
  console.log('history', history)
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
      </Switch>
  </Router>
  )
}
App.propTypes = {
  history: PropTypes.shape({})
}
export default App
