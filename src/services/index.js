import axios from "axios";

const RootPath = "http://localhost:3004";
const OnlineRoot = "https://jsonplaceholder.typicode.com";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (dtr) => {
        resolve(dtr.data);
        // this.setState(
        //   {
        //     post: dtr.data,
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComment = () => Get("comments", true);

const API = {
  getNewsBlog,
  getComment,
};

export default API;
