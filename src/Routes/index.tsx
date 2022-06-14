import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/SignUp';
import Login from '../pages/Login';

const isAuthenticated = () => sessionStorage.getItem("@Barista-Token") !== null;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;