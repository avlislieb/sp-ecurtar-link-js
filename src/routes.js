import { BrowserRouter, Switch, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Login from "./pages/Login";

function RoutesApp() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route path="/links">
                <Links />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
        
      </BrowserRouter>
  );
}

export default RoutesApp;