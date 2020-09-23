import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
        // console.log("Hasil:", res);
        // this.getPostApi();
        // this.setState({
        //   formBlogPost: {
        //     userId: 1,
        //     id: "",
        //     title: "",
        //     body: "",
        //   },
        // });
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

export default Post;
