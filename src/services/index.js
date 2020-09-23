import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";
import Get from "./Get";
import Post from "./Post";
// const RootPath = "http://localhost:3004";
// const OnlineRoot = "https://jsonplaceholder.typicode.com";

// const Get = (path, root) => {
//   const promise = new Promise((resolve, reject) => {
//     axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
//       (dtr) => {
//         resolve(dtr.data);
//         // this.setState(
//         //   {
//         //     post: dtr.data,
//         //   },
//         //   (err) => {
//         //     console.log(err);
//         //   }
//         // );
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
//   return promise;
// };

// const Post = (path, root, data) => {
//   const promise = new Promise((resolve, reject) => {
//     axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
//       (result) => {
//         resolve(result);
//         // console.log("Hasil:", res);
//         // this.getPostApi();
//         // this.setState({
//         //   formBlogPost: {
//         //     userId: 1,
//         //     id: "",
//         //     title: "",
//         //     body: "",
//         //   },
//         // });
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });

//   return promise;
// };

//Post
const postNewsBlog = (data) => Post("posts", false, data);

//Get
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComment = () => Get("comments", true);

const API = {
  postNewsBlog,
  getNewsBlog,
  getComment,
};

export default API;
