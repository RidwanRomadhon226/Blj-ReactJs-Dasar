//Lirary
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPages from "../pages/YoutubeCompPages/YoutubeCompPages";

//Styling
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
          <Route path="/youtube" component={YoutubeCompPages} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
