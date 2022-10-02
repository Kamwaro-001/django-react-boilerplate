import React from "react";
import Root from "./Root";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/signup/Register";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        <Root>
          <Routes>
            <Route path="/register" element={ <Register /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            <Route exact path="/" element={ <Home /> } />
          </Routes>
        </Root>
      </div>
    );
  }
}

export default App;