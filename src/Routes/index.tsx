import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from '../pages/Landing';
import Signup from '../pages/SignUp';
import Login from '../pages/Login';
import BarForm from '../pages/BarForm';
import BarDetails from '../pages/BarDetails';
import BarFormEdit from '../pages/BarFormEdit';

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
        <PrivateRoute path="/bar/create" component={BarForm} />
        <PrivateRoute path="/bar/:id/edit" component={BarFormEdit} />
        <PrivateRoute path="/bar/:id" component={BarDetails} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;