import React from "react";
import "./App.scss";
import Header from "./comps/Header";
import PostList from "./comps/PostList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./comps/Post";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route path="/post/:id" component={Post} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
