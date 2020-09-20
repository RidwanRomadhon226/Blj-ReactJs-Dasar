import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class YoutubeCompPages extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube Component</p>
        <hr />
        <YouTubeComp
          title="Youtube Ridwan"
          title="Youtube Good ooak"
          desc="Okee "
        />
        <YouTubeComp
          title="Youtube Ridwan"
          title="Youtube Mantep"
          desc="Okee "
        />
        <YouTubeComp
          title="Youtube Ridwan"
          title="Youtube Mantep"
          desc="Okee "
        />
      </Fragment>
    );
  }
}

export default YoutubeCompPages;
