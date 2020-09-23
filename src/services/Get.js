import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

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

export default Get;
