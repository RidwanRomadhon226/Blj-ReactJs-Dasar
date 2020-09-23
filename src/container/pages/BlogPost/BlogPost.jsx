import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";
import API from "../../../services";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: "",
      title: "",
      body: "",
    },
    isUpdate: false,
    comments: [],
  };

  getPostApi = () => {
    API.getNewsBlog().then((dtr) => {
      this.setState({
        post: dtr,
      });
    });

    API.getComment().then((dtr) => {
      // console.log("data", dtr);
      this.setState({
        comments: dtr,
      });
    });
    // axios
    //   .get("http://localhost:3004/posts?_sort=id&_order=desc")
    //   .then((dtr) => {
    //     // console.log(dtr.data);

    //   });
  };

  postDataToApi = () => {
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then(
      (res) => {
        // console.log("Hasil:", res);
        this.getPostApi();
        this.setState({
          formBlogPost: {
            userId: 1,
            id: "",
            title: "",
            body: "",
          },
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  putDataToApi = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            userId: 1,
            id: "",
            title: "",
            body: "",
          },
        });
      });
  };

  heandelRemove = (data) => {
    // console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      // console.log(res);
      this.getPostApi();
    });
  };

  heandleUpdate = (data) => {
    console.log("data:", data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
    // axios
    //   .put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost)
    //   .then((res) => {
    //     console.log(res);
    //     this.getPostApi();
    //   });
  };

  heandelFormChange = (event) => {
    // console.log("form Change", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    // console.log("Time :", timestamp);
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
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
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
  };

  heandeDetail = (id) => {
    this.props.history.push(`/detial-post/${id}`);
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
        <hr />
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add Post"
            value={this.state.formBlogPost.title}
            onChange={this.heandelFormChange}
          />
          <label htmlFor="body-content">Title</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            value={this.state.formBlogPost.body}
            rows="10"
            onChange={this.heandelFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.heandelSubmit}>
            Simpan
          </button>
        </div>
        {this.state.comments.map((comment) => {
          return (
            <p key={comment.id}>
              {comment.name} - {comment.email}
            </p>
          );
        })}
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.heandelRemove}
              update={this.heandleUpdate}
              goDetail={this.heandeDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
