import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './page/Landing';
import Detail from './page/Detail';

function App(props) {
    const {history} = props;
    
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/dashboard/landing">
                <Landing />
            </Route>
            <Route exact path="/dashboard/detail">
                <Detail />
            </Route>
        </Switch>
    </Router>
    )
  }
  App.propTypes = {
    history: PropTypes.shape({})
  }
  export default App
  
