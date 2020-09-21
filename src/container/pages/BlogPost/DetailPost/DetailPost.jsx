import Axios from "axios";
import React, { Component } from "react";
import "./DetailPost.css";

class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    // console.log(this.props.match.params.postId);
    let id = this.props.match.params.postId;
    Axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      // console.log("resault: ", res);
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }

  render() {
    return (
      <div className="p-detail-post">
        <h3>Detail Post</h3>
        <p className="detail-title">Title: {this.state.post.title}</p>
        <p className="detail-body">Body: {this.state.post.body} </p>
      </div>
    );
  }
}

export default DetailPost;
