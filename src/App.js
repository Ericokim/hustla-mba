import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Slider from './containers/Slider/Slider'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="">
       <Layout>
          <Switch>
            {/* <Slider/> */}
            <Home/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
