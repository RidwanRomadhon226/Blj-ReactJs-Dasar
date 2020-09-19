import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: "",
      title: "",
      body: "",
    },
  };

  getPostApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((dtr) => {
        // console.log(dtr.data);
        this.setState(
          {
            post: dtr.data,
          },
          (err) => {
            console.log(err);
          }
        );
      });
  };

  postDataToApi = () => {
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then(
      (res) => {
        // console.log("Hasil:", res);
        this.getPostApi();
      },
      (err) => {
        console.log(err);
      }
    );
  };

  heandelRemove = (data) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      // console.log(res);
      this.getPostApi();
    });
  };

  heandelFormChange = (event) => {
    // console.log("form Change", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    // console.log("Time :", timestamp);
    formBlogPostNew["id"] = timestamp;
    // console.log("Target Name:", event.target.name);
    formBlogPostNew[event.target.name] = event.target.value;
    // console.log("form Change Blog Post Awal:", this.state.formBlogPost);
    // console.log("form Change Blog Post New:", formBlogPostNew);
    // let title = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  heandelSubmit = () => {
    this.postDataToApi();
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    this.getPostApi();

    // axios.get("http://localhost:3004/posts").then((dtr) => {
    //   console.log(dtr.data);
    //   this.setState({
    //     post: dtr.data,
    //   });
    // });
  }

  render() {
    return (
      <Fragment>
        <p>Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add Post"
            onChange={this.heandelFormChange}
          />
          <label htmlFor="body-content">Title</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            onChange={this.heandelFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.heandelSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.heandelRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
