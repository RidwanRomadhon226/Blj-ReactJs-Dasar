import React, { Component, Fragment } from "react";
import BlogPost from "../BlogPost/BlogPost";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecyclecomp">LifeCycleComp</Link>
            <Link to="/youtube">Youtube</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecyclecomp" component={LifeCycleComp} />
          <Route path="/youtube" component={YouTubeComp} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
