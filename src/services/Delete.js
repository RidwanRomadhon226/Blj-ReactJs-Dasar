import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (dtr) => {
        resolve(dtr.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Delete;

// axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
//   // console.log(res);
//   this.getPostApi();
// });
