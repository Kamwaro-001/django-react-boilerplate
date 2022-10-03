import React from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/signup/Register";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends React.Component {
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;