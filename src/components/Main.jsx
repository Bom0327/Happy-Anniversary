import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/HomeScreen";
import StoryHome from "./Screens/StoryScreen";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/story-details" component={StoryHome} />
    </Switch>
  );
}

export default Main;
