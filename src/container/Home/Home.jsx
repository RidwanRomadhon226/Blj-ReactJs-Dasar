import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      // <div>
      //   <p> Youtube Component </p>
      //   <hr />
      //   <YouTubeComp time="3.30" title="Belajar React" desc="Belajar Asik" />;
      //   <YouTubeComp time="7.20" title="Belajar Vue" desc="Belajar Asik" />;
      //   <YouTubeComp time="8.80" title="Belajar Laravel" desc="Belajar Asik" />;
      //   <YouTubeComp />;
      // </div>
      // <div>
      //   <Product />
      // </div>

      /* <div>
          <p>Life Cycle Component</p>
          <hr />
        </div>

        <div>
          <LifeCycleComp />
        </div> */

      <div>
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
